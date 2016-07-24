// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../SimpleRenderer","../UniqueValueRenderer","../ClassBreaksRenderer"],function(d,e,f){var c={fromJson:function(a){try{throw Error("fromJson is deprecated, use fromJSON instead");}catch(b){console.warn(b.stack)}return c.fromJSON(a)},fromJSON:function(a){var b;switch(a.type||""){case "simple":b=d.fromJSON(a);break;case "uniqueValue":b=e.fromJSON(a);break;case "classBreaks":b=f.fromJSON(a)}return b}};return c});