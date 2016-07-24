// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/JSONSupporter","../../core/jsonDictionary"],function(c,d,e){var b=e({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return c(d,{declaredClass:"esri.tasks.support.LinearUnit",distance:0,units:null,_unitsReader:b.fromJSON,toJSON:function(){var a={};this.distance&&(a.distance=this.distance);this.units&&(a.units=b.toJSON(this.units));return a}})});