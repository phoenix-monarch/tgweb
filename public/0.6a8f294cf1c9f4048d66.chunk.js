(this.webpackJsonp=this.webpackJsonp||[]).push([[0,20],{104:function(e,t,r){"use strict";function s(){}r.d(t,"a",(function(){return s}))},116:function(e,t,r){"use strict";t.a={name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]}},127:function(e,t,r){"use strict";function s(e,t,r=!0){let s,n,o=null;return(...i)=>{s=!0,n=i,o||(r&&(s=!1,e(...n)),o=setInterval(()=>{if(!s)return clearInterval(o),void(o=null);s=!1,e(...n)},t))}}r.d(t,"a",(function(){return s}))},16:function(e,t,r){"use strict";r.r(t),r.d(t,"RootScope",(function(){return i}));var s=r(53),n=r(56),o=r(29);class i extends n.a{constructor(){super(),this.overlaysActive=0,this.idle={isIDLE:!0,deactivated:!1,focusPromise:Promise.resolve(),focusResolve:()=>{}},this.connectionStatus={},this.filterId=0,this.config={forwarded_count_max:100,edit_time_limit:172800,pinned_dialogs_count_max:5,pinned_infolder_count_max:100,message_length_max:4096,caption_length_max:1024},this.addEventListener("peer_changed",e=>{this.peerId=e}),this.addEventListener("user_auth",({id:e})=>{this.myId="number"==typeof s.b?+e:""+e}),this.addEventListener("connection_status_change",e=>{this.connectionStatus[e.name]=e}),this.addEventListener("idle",e=>{e?this.idle.focusPromise=new Promise(e=>{this.idle.focusResolve=e}):this.idle.focusResolve()})}get themeColorElem(){return void 0!==this._themeColorElem?this._themeColorElem:this._themeColorElem=document.head.querySelector('[name="theme-color"]')||null}setThemeColor(e=this.themeColor){e||(e=this.isNight()?"#212121":"#ffffff");const t=this.themeColorElem;t&&t.setAttribute("content",e)}setThemeListener(){try{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{this.systemTheme=e.matches?"night":"day",this.myId?this.dispatchEvent("theme_change"):this.setTheme()};"addEventListener"in e?e.addEventListener("change",t):"addListener"in e&&e.addListener(t),t()}catch(e){}}setTheme(){const e=this.isNight(),t=document.head.querySelector('[name="color-scheme"]');t&&t.setAttribute("content",e?"dark":"light"),document.documentElement.classList.toggle("night",e),this.setThemeColor()}get isOverlayActive(){return this.overlaysActive>0}set isOverlayActive(e){this.overlaysActive+=e?1:-1,this.dispatchEvent("overlay_toggle",this.isOverlayActive)}isNight(){return"night"===this.getTheme().name}getTheme(e=("system"===this.settings.theme?this.systemTheme:this.settings.theme)){return this.settings.themes.find(t=>t.name===e)}}const a=new i;o.a.rootScope=a,t.default=a},29:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const s=r(75).a.debug,n="undefined"!=typeof window?window:self;t.b=s},34:function(e,t,r){"use strict";function s(e){if(null===e||"object"!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());if(Array.isArray(e)){return e.map(e=>s(e))}let t=new e.constructor;for(var r in e)e.hasOwnProperty(r)&&(t[r]=s(e[r]));return t}function n(e,t){const r=Object.keys,s=typeof e;return e&&t&&"object"===s&&s===typeof t?r(e).length===r(t).length&&r(e).every(r=>n(e[r],t[r])):e===t}function o(e,t){const r={writable:!0,configurable:!0},s={};t.forEach(t=>{void 0===e[t]&&(s[t]=r)}),Object.defineProperties(e,s)}function i(e,t="asc"){if(!e)return[];const r=e instanceof Map?[...e.keys()]:Object.keys(e).map(e=>+e);return"asc"===t?r.sort((e,t)=>e-t):r.sort((e,t)=>t-e)}function a(e,t){if(!e)return t;for(var r in e)t.hasOwnProperty(r)||delete e[r];for(var r in t)e[r]=t[r];return e}function c(e,t,r){"byteLength"in r[e]&&(r[e]=[...r[e]]),t&&t[e]!==r[e]&&(t[e].length=r[e].length,r[e].forEach((r,s)=>{t[e][s]=r}),r[e]=t[e])}function l(e){return"object"==typeof e&&null!==e}function h(e,t){const r=t.split(".");let s=e;return r.forEach(e=>{e&&(s=s[e])}),s}function u(e,t,r){const s=t.split(".");h(e,s.slice(0,-1).join("."))[s.pop()]=r}function d(e,t,r,n){for(const o in e)typeof t[o]!=typeof e[o]?(t[o]=s(e[o]),r&&r(n||o)):l(e[o])&&d(e[o],t[o],r,n||o)}function f(e,t){if(t)for(let r in t)void 0!==t[r]&&(e[r]=t[r])}r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"i",(function(){return a})),r.d(t,"h",(function(){return c})),r.d(t,"f",(function(){return l})),r.d(t,"d",(function(){return h})),r.d(t,"j",(function(){return u})),r.d(t,"k",(function(){return d})),r.d(t,"g",(function(){return f}))},42:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var s,n=r(29);!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(s||(s={}));const o=[s.None,s.Error,s.Warn,s.Log,s.Debug],i=Date.now();function a(){return"["+((Date.now()-i)/1e3).toFixed(3)+"]"}function c(e,t=s.Log|s.Warn|s.Error,r=!1){function i(...r){return t&s.Log&&console.log(a(),e,...r)}return n.b||r||(t=s.Error),i.warn=function(...r){return t&s.Warn&&console.warn(a(),e,...r)},i.info=function(...r){return t&s.Log&&console.info(a(),e,...r)},i.error=function(...r){return t&s.Error&&console.error(a(),e,...r)},i.trace=function(...r){return t&s.Log&&console.trace(a(),e,...r)},i.debug=function(...r){return t&s.Debug&&console.debug(a(),e,...r)},i.setPrefix=function(t){e="["+t+"]:"},i.setPrefix(e),i.setLevel=function(e){t=o.slice(0,e+1).reduce((e,t)=>e|t,0)},i}},45:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var s=r(104);function n(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach(e=>e(...t))},listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise((r,s)=>{e.resolve=e=>{t.isFulfilled||t.isRejected||(t.isFulfilled=!0,r(e))},e.reject=(...e)=>{t.isRejected||t.isFulfilled||(t.isRejected=!0,s(...e))}});return t.catch(s.a).finally(()=>{t.notify=t.notifyAll=t.lastNotify=null,t.listeners.length=0,t.cancel&&(t.cancel=()=>{})}),Object.assign(t,e),t}},53:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return i}));const s=0,n=1271266957,o=777e3,i=2147483647},56:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));class s{constructor(e){this._constructor(e)}_constructor(e=!1){this.reuseResults=e,this.listeners={},this.listenerResults={}}addEventListener(e,t,r){var s,n;(null!==(s=this.listeners[e])&&void 0!==s?s:this.listeners[e]=[]).push({callback:t,options:r}),this.listenerResults.hasOwnProperty(e)&&(t(...this.listenerResults[e]),null===(n=r)||void 0===n?void 0:n.once)&&this.listeners[e].pop()}addMultipleEventsListeners(e){for(const t in e)this.addEventListener(t,e[t])}removeEventListener(e,t,r){this.listeners[e]&&this.listeners[e].findAndSplice(e=>e.callback===t)}dispatchEvent(e,...t){this.reuseResults&&(this.listenerResults[e]=t);const r=[],s=this.listeners[e];if(s){s.slice().forEach(n=>{var o;-1!==s.findIndex(e=>e.callback===n.callback)&&(r.push(n.callback(...t)),(null===(o=n.options)||void 0===o?void 0:o.once)&&this.removeEventListener(e,n.callback))})}return r}cleanup(){this.listeners={},this.listenerResults={}}}},63:function(e,t,r){"use strict";var s=r(29),n=r(75);const o="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,i="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,a=o||i,c=(e,...t)=>{self.clients.matchAll({includeUncontrolled:!1,type:"window"}).then(r=>{r.length&&r.slice(e?0:-1).forEach(e=>{e.postMessage(...t)})})},l=(...e)=>{self.postMessage(...e)},h=()=>{},u=i?c.bind(null,!1):o?l:h;i&&c.bind(null,!0);class d{constructor(){this.prefix="",this.cache={},this.useStorage=!0,n.a.test&&(this.prefix="t_")}get(e,t=!0){if(this.cache.hasOwnProperty(e)&&t)return this.cache[e];if(this.useStorage){let t;try{t=localStorage.getItem(this.prefix+e)}catch(e){this.useStorage=!1}if(null!==t)try{t=JSON.parse(t)}catch(e){}else t=void 0;return t}}set(e,t=!1){for(const r in e)if(e.hasOwnProperty(r)){const s=e[r];if(this.cache[r]=s,this.useStorage&&!t)try{const e=JSON.stringify(s);localStorage.setItem(this.prefix+r,e)}catch(e){this.useStorage=!1}}}delete(e,t=!1){e=""+e,t||delete this.cache[e];try{localStorage.removeItem(this.prefix+e)}catch(e){}}clear(){const e=["dc","server_time_offset","xt_instance","user_auth","state_id"];for(let t=1;t<=5;++t)e.push(`dc${t}_server_salt`),e.push(`dc${t}_auth_key`);for(let t of e)this.delete(t,!0)}toggleStorage(e){if(this.useStorage=e,e)return this.set(this.cache);this.clear()}}class f{constructor(){this.taskId=0,this.tasks={},f.STORAGES.push(this),a||(this.storage=new d)}finishTask(e,t){this.tasks.hasOwnProperty(e)&&(this.tasks[e](t),delete this.tasks[e])}proxy(e,...t){return new Promise((r,s)=>{if(a){const s=this.taskId++;this.tasks[s]=r;u({type:"localStorageProxy",id:s,payload:{type:e,args:t}})}else{t=Array.prototype.slice.call(t);r(this.storage[e].apply(this.storage,t))}})}get(e,t){return this.proxy("get",e,t)}set(e,t){return this.proxy("set",e,t)}delete(e,t){return this.proxy("delete",e,t)}clear(){return this.proxy("clear")}toggleStorage(e){return this.proxy("toggleStorage",e)}}f.STORAGES=[];const g=new f;s.a.appStorage=g;t.a=g},64:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));const s={8:new Uint8Array(1),16:new Uint16Array(1),32:new Uint32Array(1)};function n(e){const t=s[e];return crypto.getRandomValues(t),t[0]}function o(){return""+n(32)+n(32)%16777215}},75:function(e,t,r){"use strict";const s={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1};t.a=s},79:function(e,t,r){"use strict";var s=r(29),n=r(97),o=r(116);const i=new n.a(o.a,"session");s.a.stateStorage=i,t.a=i},91:function(e,t,r){"use strict";function s(e,t){return new Promise(r=>{const s=new FileReader;s.addEventListener("loadend",e=>r(e.target.result)),s[t](e)})}function n(e){return s(e,"readAsText")}function o(e){return s(e,"readAsDataURL")}function i(e){return function(e){return s(e,"readAsArrayBuffer")}(e).then(e=>new Uint8Array(e))}function a(e,t=""){let r;const s=function(e){if(-1===["image/jpeg","image/png","image/gif","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","application/json","application/pdf"].indexOf(e))return"application/octet-stream";return e}(t);try{r=new Blob(e,{type:s})}catch(t){let n=new BlobBuilder;e.forEach(e=>{n.append(e)}),r=n.getBlob(s)}return r}r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return a}))},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var s=r(45),n=r(127),o=r(75),i=r(91),a=r(34),c=r(42);class l{constructor(e,t){this.storageIsAvailable=!0,Object(a.g)(this,e),o.a.test&&(this.name+="_test"),this.storeName=t,this.log=Object(c.b)("IDB-"+this.storeName),this.openDatabase(!0),l.STORAGES.push(this)}static closeDatabases(e){this.STORAGES.forEach(t=>{if(e&&e===t)return;const r=t.db;r&&(r.onclose=()=>{},r.close())})}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;try{var t=indexedDB.open(this.name,this.version);if(!t)return Promise.reject()}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let r=!1;return setTimeout(()=>{r||t.onerror({type:"IDB_CREATE_TIMEOUT"})},3e3),this.openDbPromise=new Promise((e,s)=>{t.onsuccess=n=>{r=!0;const o=t.result;let i=!1;this.log("Opened"),o.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),s(e)},o.onclose=e=>{this.log.error("closed:",e),!i&&this.openDatabase()},o.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(i=!0),t.onerror&&t.onerror(e),o.close()},o.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(this.db=o)},t.onerror=e=>{r=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),s(e)},t.onupgradeneeded=e=>{r=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);var t=e.target.result;this.stores.forEach(e=>{t.objectStoreNames.contains(e.name)||((e,t)=>{var r;const s=e.createObjectStore(t.name);if(null===(r=t.indexes)||void 0===r?void 0:r.length)for(const e of t.indexes)s.createIndex(e.indexName,e.keyPath,e.objectParameters)})(t,e)})}})}delete(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readwrite",t=>e.map(e=>t.delete(e)),"")}clear(e){return this.getObjectStore("readwrite",e=>e.clear(),"",e)}save(e,t){return Array.isArray(e)||(e=[].concat(e),t=[].concat(t)),this.getObjectStore("readwrite",r=>e.map((e,s)=>r.put(t[s],e)),"")}saveFile(e,t){return t instanceof Blob||(t=Object(i.a)([t])),this.save(e,t)}get(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readonly",t=>e.map(e=>t.get(e)),"")}getObjectStore(e,t,r,s=this.storeName){let n;return r&&(n=performance.now(),this.log(r+": start")),this.openDatabase().then(o=>new Promise((i,a)=>{const c=o.transaction([s],e);c.onerror=e=>{clearTimeout(l),a(c.error)},c.oncomplete=e=>{clearTimeout(l),r&&this.log(r+": end",performance.now()-n);const t=d.map(e=>e.result);i(u?t:t[0])};const l=setTimeout(()=>{this.log.error("transaction not finished",c)},1e4),h=t(c.objectStore(s)),u=Array.isArray(h),d=u?h:[].concat(h)}))}getAll(){return this.getObjectStore("readonly",e=>e.getAll(),"")}}l.STORAGES=[];var h=function(e,t,r,s){return new(r||(r=Promise))((function(n,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))};function u(){}class d{constructor(e,t){this.db=e,this.storeName=t,this.cache={},this.useStorage=!0,this.getPromises=new Map,this.keysToSet=new Set,this.saveDeferred=Object(s.a)(),this.keysToDelete=new Set,this.deleteDeferred=Object(s.a)(),this.storage=new l(e,t),d.STORAGES.length&&(this.useStorage=d.STORAGES[0].useStorage),d.STORAGES.push(this),this.saveThrottled=Object(n.a)(()=>h(this,void 0,void 0,(function*(){const e=this.saveDeferred;this.saveDeferred=Object(s.a)();const t=this.keysToSet;if(t.size){const e=Array.from(t.values());t.clear();try{const t=e.map(e=>this.cache[e]);yield this.storage.save(e,t)}catch(t){console.error("[AS]: set error:",t,e)}}e.resolve(),t.size&&this.saveThrottled()})),16,!1),this.deleteThrottled=Object(n.a)(()=>h(this,void 0,void 0,(function*(){const e=this.deleteDeferred;this.deleteDeferred=Object(s.a)();const t=this.keysToDelete;if(t.size){const e=Array.from(t.values());t.clear();try{yield this.storage.delete(e)}catch(t){console.error("[AS]: delete error:",t,e)}}e.resolve(),t.size&&this.deleteThrottled()})),16,!1),this.getThrottled=Object(n.a)(()=>h(this,void 0,void 0,(function*(){const e=Array.from(this.getPromises.keys());this.storage.get(e).then(t=>{for(let r=0,s=e.length;r<s;++r){const s=e[r],n=this.getPromises.get(s);n&&(n.resolve(this.cache[s]=t[r]),this.getPromises.delete(s))}},r=>{["NO_ENTRY_FOUND","STORAGE_OFFLINE"].includes(r)||(this.useStorage=!1,console.error("[AS]: get error:",r,e,t));for(let t=0,r=e.length;t<r;++t){const r=e[t],s=this.getPromises.get(r);s&&(s.resolve(void 0),this.getPromises.delete(r))}}).finally(()=>{this.getPromises.size&&this.getThrottled()})})),16,!1)}isAvailable(){return this.useStorage}getCache(){return this.cache}getFromCache(e){return this.cache[e]}setToCache(e,t){return this.cache[e]=t}get(e,t=!0){return h(this,void 0,void 0,(function*(){if(this.cache.hasOwnProperty(e)&&t)return this.getFromCache(e);if(this.useStorage){const t=this.getPromises.get(e);if(t)return t;const r=Object(s.a)();return this.getPromises.set(e,r),this.getThrottled(),r}}))}getAll(){return this.storage.getAll().catch(()=>[])}set(e,t=!1){for(const r in e)if(e.hasOwnProperty(r)){const s=e[r];this.setToCache(r,s),this.useStorage&&!t&&(this.keysToSet.add(r),this.keysToDelete.delete(r),this.saveThrottled())}return this.useStorage?this.saveDeferred:Promise.resolve()}delete(e,t=!1){return e=""+e,t||delete this.cache[e],this.useStorage&&(this.keysToSet.delete(e),this.keysToDelete.add(e),this.deleteThrottled()),this.useStorage?this.deleteDeferred:Promise.resolve()}clear(e=!1){if(!e)for(const e in this.cache)delete this.cache[e];return this.storage.clear().catch(u)}static toggleStorage(e){return Promise.all(this.STORAGES.map(t=>(t.useStorage=e,e?t.set(t.cache):(t.keysToSet.clear(),t.keysToDelete.clear(),t.getPromises.forEach(e=>e.resolve(void 0)),t.getPromises.clear(),t.clear(!0))))).catch(u)}}d.STORAGES=[]}}]);
//# sourceMappingURL=0.6a8f294cf1c9f4048d66.chunk.js.map