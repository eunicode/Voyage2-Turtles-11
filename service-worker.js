"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Voyage2-Turtles-11/index.html","694ccee8f2a7ad4fb5d88ba408306192"],["/Voyage2-Turtles-11/static/css/main.dce8580b.css","860cc421421d2a51db18f4d2ee024e82"],["/Voyage2-Turtles-11/static/js/main.4b2fdf4e.js","35fb7745ed4b9f6fbda589261fa80baa"],["/Voyage2-Turtles-11/static/media/03.a9f5c9f1.JPG","a9f5c9f13e4d525b43af585e4de88cbb"],["/Voyage2-Turtles-11/static/media/04.470a4133.JPG","470a4133726f926d5468f76ae90ccc98"],["/Voyage2-Turtles-11/static/media/05.079fd45b.JPG","079fd45b81b18b32e4d3f72d4756c7ca"],["/Voyage2-Turtles-11/static/media/06.546dc15d.JPG","546dc15d77c245be8ba61763659d10c9"],["/Voyage2-Turtles-11/static/media/07.0b059fb4.JPG","0b059fb4e29ab7929baf45221cf224fe"],["/Voyage2-Turtles-11/static/media/08.7cc776bb.jpg","7cc776bbc5a3bc82550a2ab30288d851"],["/Voyage2-Turtles-11/static/media/13.62282dc4.JPG","62282dc4f32ecdbf84205456253c812a"],["/Voyage2-Turtles-11/static/media/14.24fc1e3e.JPG","24fc1e3ecffc0a62bc90450489f2b950"],["/Voyage2-Turtles-11/static/media/16.f1b4650a.JPG","f1b4650a9bc3913bcaf1a0b9e25e15e1"],["/Voyage2-Turtles-11/static/media/17.9b476ee4.jpg","9b476ee4af07912485dd4440855856d6"],["/Voyage2-Turtles-11/static/media/turtle_green.6941ff7f.png","6941ff7f142abf4c05a9576eb70a72b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/Voyage2-Turtles-11/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});