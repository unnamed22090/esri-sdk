// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","../../core/Collection","./LayerView"],function(a,b,c){return c.createSubclass({classMetadata:{properties:{layerViews:{type:b}}},declaredClass:"esri.views.layers.GroupLayerView",getDefaults:function(){return a.mixin(this.inherited(arguments),{layerViews:[]})},layerViews:null})});