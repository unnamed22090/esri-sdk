// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["dojo/Deferred","require"],function(h,k){var c=function(a,d,b){this._connections=a;this.worker=new Worker(k.toUrl("./worker.js"));this.index=d;this.workerInitCallback=b;this.msgCount=0;this.outgoingJobs={};this.incomingJobs={};this.worker.addEventListener("message",this.message.bind(this),!1)};c.prototype.terminate=function(){this.worker.terminate()};c.prototype.openConnection=function(a,d){return this.invoke("\x3copen-connection\x3e",{path:a},void 0,d)};c.prototype.closeConnection=function(a){this.invoke("\x3cclose-connection\x3e",
void 0,void 0,a)};c.prototype.invoke=function(a,d,b,e){var f=++this.msgCount,c=new h(function(a){this.worker.postMessage({type:"\x3ccancel\x3e",id:f,connection:e,data:{reason:a}});this.outgoingJobs[f]&&delete this.outgoingJobs[f]}.bind(this));this.outgoingJobs[f]=c;this.worker.postMessage({type:a,id:f,connection:e,data:d},b);return c.promise};c.prototype.message=function(a){if(a&&a.data){var d=a.data.type;if(d){var b=a.data,e=a.data.id;if("\x3cresponse\x3e"===d&&e){if(a=this.outgoingJobs[e])delete this.outgoingJobs[e],
b.error?a.reject(b.error):a.resolve(b.data)}else if("\x3cworker-init\x3e"===d)this.workerInitCallback&&("function"===typeof this.workerInitCallback&&"number"===typeof this.index)&&this.workerInitCallback(this.index);else if("\x3ccancel\x3e"===d&&e)(a=this.incomingJobs[e])&&a.cancel(b.data.reason);else{var c=b.connection;if(a=this._connections[c])if(a=a.client){var g=a[d];"function"===typeof g&&(b=g.call(a,b.data),this.incomingJobs[e]=b,b.then(function(a){this.worker.postMessage({type:"\x3cresponse\x3e",
id:e,connection:c,error:a.error,data:a.data},a.buffers)}.bind(this)).otherwise(function(a){a||(a="Error encountered at method"+d);(!a.dojoType||"cancel"!==a.dojoType)&&this.worker.postMessage({type:"\x3cresponse\x3e",id:e,connection:c,error:a})}.bind(this)).always(function(){delete this.incomingJobs[e]}.bind(this)))}}}}};return c});