// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/JSONSupporter"],function(b,c){return b(c,{declaredClass:"esri.tasks.support.DataFile",classMetadata:{reader:{add:["itemId"],exclude:["itemID"]}},itemId:null,_itemIdReader:function(a,b){return b.itemId},url:null,toJSON:function(){var a={};this.url&&(a.url=this.url);this.itemId&&(a.itemID=this.itemId);return a}})});