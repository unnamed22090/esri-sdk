// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/Accessoire","../../core/declare","../../core/jsonDictionary","dojo/_base/array","dojo/_base/lang"],function(b,c,d,e,g){var f=d({"0":"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});return c(b,{declaredClass:"esri.tasks.support.TrimExtendParameters",extendHow:"default-curve-extension",polylines:null,trimExtendTo:null,toJSON:function(){var b=e.map(this.polylines,function(a){return a.toJSON()}),
a={};a.polylines=JSON.stringify(b);a.trimExtendTo=JSON.stringify(this.trimExtendTo.toJSON());a.sr=JSON.stringify(this.polylines[0].spatialReference.toJSON());a.extendHow=f.toJSON(this.extendHow);return a}})});