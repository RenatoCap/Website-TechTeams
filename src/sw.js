workbox.core.setCacheNameDetails({
    prefix: "cache"
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});