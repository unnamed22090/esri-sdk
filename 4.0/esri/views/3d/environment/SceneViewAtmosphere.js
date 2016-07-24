// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../../core/Accessoire"],function(a){return a.createSubclass({classMetadata:{properties:{quality:{}}},quality:"low",_qualitySetter:function(b,a){return-1!==["low","high"].indexOf(b)?b:a},clone:function(){return new this.constructor({quality:this.quality})}})});