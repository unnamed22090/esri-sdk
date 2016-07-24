// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define([],function(){var a=function(d,b,c){this.client=d;this.id=b;this._workers=c};a.prototype.invoke=function(d,b,c,a){return this._workers.invoke(d,b,c,a,this.id)};a.prototype.broadcast=function(a,b,c){return this._workers.broadcast(a,b,c,this.id)};a.prototype.close=function(){this._workers.closeConnection(this)};return a});