# Map in Valtio-YJS appears to be broken
I created three scenarios:
 1. todos stored as a Map of key value pairs using Valtio's proxyMap --> this works
 2. todos stored as a Map and bound to a ymap using valtio-yjs's bind() --> this results in an error (see below)
 3. todos stored as an Array and bound to a ymap --> this works fine.

# Error:
`TypeError: snap.myMap.keys is not a function or its return value is not iterable`

To see for yourself, go to [this vercel deployment](https://valtio-yjs-map-qrdqo5m0g-hobo1618.vercel.app/) and try adding some todos. Valtio-YJS works fine for arrays and will updated in different browsers/clients.

But [this deployment crashes](https://valtio-yjs-map-set.vercel.app/) immediately.
