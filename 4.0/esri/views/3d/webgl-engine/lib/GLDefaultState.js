// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(b,c){return function(){function a(a){this.cullEnabled=!1;this.blendFuncSrc=770;this.blendFuncDst=771;this.depthFunc=513;this._gl=a}a.prototype.apply=function(){this.cullEnabled?this._gl.enable(2884):this._gl.disable(2884);this._gl.blendFunc(this.blendFuncSrc,this.blendFuncDst);this._gl.depthFunc(this.depthFunc)};return a}()});