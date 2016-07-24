// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/MultiOriginJSONSupport","../support/arcgisLayerURL"],function(b,c){return b.createSubclass({declaredClass:"esri.layers.mixins.ArcGISService",properties:{title:{get:function(){var a=c.parse(this.url);if(a&&a.title)return a.title}}}})});