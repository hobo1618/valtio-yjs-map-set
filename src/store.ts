import { proxy } from "valtio";
import { proxyMap } from "valtio/utils";
import { bind } from "valtio-yjs";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import { getCookie } from "cookies-next";


const JWT = getCookie("room2");


// Vanilla Valtio with Map but without YJS
export const vanillaStore = proxy<{ myMap: Map<string, string> }>({
  myMap: proxyMap(),
});


// Valtio-YJS without Map
type Item = {
  id: string;
  value: string;
  // doc: Y.Doc;
};

const providerWithout = new TiptapCollabProvider({
  appId: process.env.NEXT_PUBLIC_TIPTAP_APP_ID || "",
  name: "valtio-without-map",
  token: JWT,
});

export const storeWithoutMap = proxy<{ myArr: Item[] }>({
  myArr: [],
});

const ymapWithoutMap = providerWithout.document.getMap("storeWithoutMap");

const unbindWithout = bind(storeWithoutMap, ymapWithoutMap);


// this is where the problem is:
// Valtio-YJS with Map
const providerWith = new TiptapCollabProvider({
  appId: process.env.NEXT_PUBLIC_TIPTAP_APP_ID || "",
  name: "valtio-with-map",
  token: JWT,
});

export const storeWithMap = proxy<{ myMap: Map<string, string> }>({
  myMap: proxyMap(),
});

const ymapWithMap = providerWith.document.getMap("storeWithMap");

// if we uncomment, the app works, but the connection to the tiptap WS server is lost
const unbindWith = bind(storeWithMap, ymapWithMap);
