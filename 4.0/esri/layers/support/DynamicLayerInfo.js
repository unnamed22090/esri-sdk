// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/lang","./LayerInfo","./LayerMapSource","./LayerDataSource"],function(c,d,e,b,f){return c(e,{declaredClass:"esri.layers.support.DynamicLayerInfo",defaultVisibility:!0,parentLayerId:-1,maxScale:0,minScale:0,constructor:function(a){a&&(a.source?a="mapLayer"===a.source.type?new b(a.source):new f(a.source):(a=new b,a.mapLayerId=this.id),this.source=a)},toJSON:function(){var a=this.inherited(arguments);a.source=this.source&&this.source.toJSON();return d.fixJson(a)}})});