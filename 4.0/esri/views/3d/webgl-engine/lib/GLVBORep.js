// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util"],function(d,e,c){return function(){function a(){this._vbos={}}a.prototype.add=function(b,a){c.assert(null==this._vbos[b]);this._vbos[b]=a};a.prototype.get=function(a){return this._vbos[a]};return a}()});