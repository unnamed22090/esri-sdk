// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","../../core/lang"],function(a,b,c){return a(null,{declaredClass:"esri.layers.support.LayerInfo",constructor:function(a){b.mixin(this,a)},toJSON:function(){return c.fixJson({defaultVisibility:this.defaultVisibility,id:this.id,maxScale:this.maxScale,minScale:this.minScale,name:this.name,parentLayerId:this.parentLayerId,subLayerIds:this.subLayerIds})}})});