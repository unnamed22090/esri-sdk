// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["./WorkerProxy"],function(e){var d=function(a,b,c){this.id=c;"function"===typeof a&&(this._target=new a(this));this.proxy=new e(this._target,b,this)};d.prototype.invoke=function(a,b,c){return this.proxy.invoke(a,b,c,this.id)};return d});