// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../Graphic","../../core/JSONSupporter"],function(c,d,e){return c(e,{declaredClass:"esri.tasks.support.IdentifyResult",classMetadata:{reader:{add:["feature"],exclude:["geometry","attributes"]}},displayFieldName:null,feature:null,_featureReader:function(c,a){var b={};a.attributes&&(b.attributes=a.attributes);a.geometry&&(b.geometry=a.geometry);return d.fromJSON(b)},layerId:null,layerName:null})});