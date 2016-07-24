// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../core/Accessoire","../core/Collection"],function(a,b){return a.createSubclass({declaredClass:"esri.views.GroundView",classMetadata:{properties:{view:{},layerViews:{type:b}}},getDefaults:function(){return{layerViews:[]}},destroy:function(){this.view=null},_suspendedGetter:function(){return this.view?this.view.suspended:!0}})});