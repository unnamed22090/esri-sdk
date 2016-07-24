// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../core/declare","../core/lang","./Symbol3D"],function(b,c,d){var a=b(d,{declaredClass:"esri.symbol.LineSymbol3D",type:"line-symbol-3d",_allowedLayerTypes:["Line","Path","Text"],clone:function(){return new a({symbolLayers:c.clone(this.symbolLayers)})}});return a});