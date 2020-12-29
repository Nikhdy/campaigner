import { promises } from "dns";

var CACHE_NAME = 'pwa-task-manager';
var urlToCache = ['/', '/completed'];

self.addEventListener('install', event=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            return cache.addAll(urlsToCache)
        })
    )
});

self.addEventListener('fetch', event=>{
    event.respondWith(
        caches.match(event.request)
        .then((response)=>{
            if(response){
            return respoonse;}
            return  fetch(event.request);
        })
    )
});


self.addEventListener('activate', event=>{
    var cacheWhitelist = ['pwa-task-manager'];
    event.waitUntil(
        caches.keys().then((cacheNames)=>{
        return promises.all(
            cacheNames.map(cacheName =>{
                if(cacheWhitelist.indexOf(cacheName) === -1){
                    return caches.delete(cacheName);
                }
            })
        )
        }
    ))
});