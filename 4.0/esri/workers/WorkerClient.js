// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("dojo/Evented ../core/declare dojo/Deferred dojo/_base/lang dojo/request ../core/sniff ../core/urlUtils require".split(" "),function(k,n,h,e,p,q,f,r){var l=window.Blob||window.webkitBlob||window.mozBlob,m=window.URL||window.webkitURL||window.mozURL;return n([k],{declaredClass:"esri.workers.WorkerClient",worker:null,_queue:null,constructor:function(a){this._isIE=q("ie");this._queue={};this._acceptMessage=e.hitch(this,this._acceptMessage);this._errorMessage=e.hitch(this,this._errorMessage);a&&
(this.worker=this.setWorker(a))},setWorker:function(a){if(a instanceof Array){var b=a;a=b.shift()}a=this._getUrl(a);var c=!f.hasSameOrigin(f.getAbsoluteUrl(a),location.href),d;if(!1===a)return console.log("Can not resolve worker path"),!1;this.worker&&(d=this.worker,d.removeEventListener("message",this._acceptMessage,!1),d.removeEventListener("error",this._errorMessage,!1),d.terminate(),d=null);if(c){var g=this._getUrl("./mutableWorker",!0);try{var e=this._getRemoteText(g,!0);d=new Worker(m.createObjectURL(new l([e],
{type:"text/javascript"})))}catch(h){try{g=f.getProxyUrl(g).path+"?"+encodeURI(g),d=new Worker(g),this._useProxy=!0}catch(k){return console.log("Can not create worker"),!1}}}else d=new Worker(a);d.addEventListener("message",this._acceptMessage,!1);d.addEventListener("error",this._errorMessage,!1);this.worker=d;c&&this.importScripts(a);b&&this.importScripts(b);return d},postMessage:function(a,b){if(a instanceof Array||"object"!=typeof a)a={data:a};var c=Math.floor(64E9*Math.random()).toString(36);
a.msgId=c;c=this._queue[c]=new h;this.worker?(b?this.worker.postMessage(a,b):this.worker.postMessage(a),this.emit("start-message",{target:this,message:a})):c.reject({message:"No worker was set."});return c.promise},terminate:function(){var a=Object.keys(this._queue);this.worker&&this.worker.terminate();for(var b=a.length-1;0<=b;b--)this._queue[a[b]].cancel("terminated"),delete this._queue[a[b]]},addWorkerCallback:function(a,b){var c;c=this._getUrl(a,!0);return!1===c?(c=new h,c.reject({message:"Could not load text from "+
a}),c.promise):this.postMessage({action:"add-callback",url:c,cbName:b||"main"}).then(e.hitch(this,function(a){a.target=this;this.emit("callback-added",a)}))},importScripts:function(a){Array.isArray(a)||(a=[a]);a=a.map(function(a){a=this._getUrl(a,!0);this._useProxy&&!f.hasSameOrigin(a,location.href)&&(a=f.getProxyUrl(a).path+"?"+encodeURI(a));return a},this);return this.postMessage({action:"import-script",url:a}).then(e.hitch(this,function(a){a.target=this;this.emit("scripts-imported",a)}))},_acceptMessage:function(a){var b=
a.data,c=b.msgId;if(b.status&&"debug"==b.status)console[b.showAs||"debug"](b);else if(c&&c in this._queue){var d=this._queue[c];"progress"==b.status?d.progress(a.data):("error"==b.status?d.reject(a.data):d.resolve(a.data),delete this._queue[c])}this.emit("message",{message:a.data,event:a,target:this})},_errorMessage:function(a){this.onerror||this.onError?this.onerror?this.onerror(a):this.onError(a):console.log("Worker Error: "+a.message+"\nIn "+a.filename+" on "+a.lineno)},_getUrl:function(a,b){if(!a)return console.error("can not resolve empty path"),
!1;a.match(/\.js$/)||(a+=".js");var c=r.toUrl(a);return b?f.getAbsoluteUrl(c):c},_getRemoteText:function(a,b){var c="";(a=this._getUrl(a))&&p.get(a,{sync:b,handleAs:"text",headers:{"X-Requested-With":"","Content-Type":"text/plain"}}).then(function(a){c=a});return c},_startBlobWorker:function(){var a=this._xdSource;a||(a=this._getUrl("./mutableWorker"),a=new l(["if(!self._mutable){importScripts('"+a+"');}"],{type:"text/javascript"}),a=this._xdSource=m.createObjectURL(a));try{return new Worker(a)}catch(b){return console.log(b.message),
!1}}})});