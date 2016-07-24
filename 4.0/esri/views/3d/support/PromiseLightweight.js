// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
(function(l){function b(a){this._callbacks=[];this._errbacks=[];this._cancelCallback=a;this._iserr=this._isdone=this._iscancelled=!1}function e(a,f){var c=new b;0===a.length?c.done.apply(c,f):a[0].apply(null,f).then(function(){a.splice(0,1);e(a,arguments).then(function(){c.done.apply(c,arguments)})});return c}b.prototype.cancel=function(a){this._callbacks=[];this._errbacks=[];this._iscancelled=!0;this._cancelCallback&&this._cancelCallback(a)};b.prototype.then=function(a,b,c){var d;if(!this._iscancelled)return this._isdone?
d=a.apply(c,this.result):this._iserr&&b?d=b.apply(c,this.result):(this._callbacks.push(function(){return a.apply(c,arguments)}),b&&this._errbacks.push(function(){return b.apply(c,arguments)})),d};b.prototype.done=function(){this.result=arguments;this._isdone=!0;for(var a=0;a<this._callbacks.length;a++)this._callbacks[a].apply(null,arguments);this._callbacks=[];this._errbacks=[]};b.prototype.resolve=b.prototype.done;b.prototype.reject=function(){if(!this._iscancelled){this.result=arguments;this._iserr=
!0;for(var a=0;a<this._errbacks.length;a++)this._errbacks[a].apply(null,arguments);this._callbacks=[];this._errbacks=[]}};b.prototype.isRejected=function(){return this._iserr};b.prototype.isFulfilled=function(){return this._isdone||this._iserr};b.prototype.isCancelled=function(){return this._iscancelled};var h={Promise:b,join:function(a){function f(a,b){return function(){b&&(h=!0);k+=1;e[a]=Array.prototype.slice.call(arguments);k===d&&(h?c.reject():c.done(e))}}for(var c=new b,d=a.length,k=0,e=[],
h=!1,g=0;g<d;g++)a[g].then(f(g,!1),f(g,!0));0===a.length&&c.done();return c},chain:e};"function"===typeof define&&define.amd?define(function(){return h}):l.promise=h})(this);