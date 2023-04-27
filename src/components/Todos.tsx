import { useSnapshot } from "valtio";
import { vanillaStore, storeWithMap, storeWithoutMap } from "../store";
import { v4 } from "uuid";

const Vanilla = () => {
  const snap = useSnapshot(vanillaStore);
  return (
    <div className="border border-gray-400 rounded-md p-8">
      <h2 className="text-xl py-4">Vanilla Valtio Maps work fine.</h2>
      <button
        className="border border-gray-400 rounded-md px-2 py-1"
        onClick={() => vanillaStore.myMap.set(v4(), v4())}
      >
        add item
      </button>
      {[...snap.myMap.keys()].map((key) => (
        <div key={key}>
          {key} - {vanillaStore.myMap.get(key)}
        </div>
      ))}
    </div>
  );
};

const WithMap = () => {
  const snap = useSnapshot(storeWithMap);
  return (
    <div className="border border-gray-400 rounded-md p-8">
      <h2 className="text-xl py-4">
        But.... storing todos as a map breaks when bind(state, ymap) is applied
      </h2>
      <button
        className="border border-gray-400 rounded-md px-2 py-1"
        onClick={() => storeWithMap.myMap.set(v4(), v4())}
      >
        add item
      </button>
      {[...snap.myMap.keys()].map((key) => (
        <div key={key}>
          {key} - {storeWithMap.myMap.get(key)}
        </div>
      ))}
    </div>
  );
};

const WithoutMap = () => {
  const snap = useSnapshot(storeWithoutMap);
  return (
    <div className="border border-gray-400 rounded-md p-8">
      <h2 className="text-xl py-4">While... valtio-yj works properly with arrays</h2>
      <button
        className="border border-gray-400 rounded-md px-2 py-1"
        onClick={() => storeWithoutMap.myArr.push({ id: v4(), value: v4() })}
      >
        add item
      </button>
      {snap.myArr.map((item) => (
        <div key={item.id}>
          {item.id} - {item.value}
        </div>
      ))}
    </div>
  );
};

const Todos = () => {
  return (
    <div className="flex flex-col gap-4 m-8">
      <Vanilla />
      <WithMap />
      <WithoutMap />
    </div>
  );
};
export default Todos;
