// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../core/declare"],function(c){return c(null,{declaredClass:"esri.renderer.SymbolAger",getAgedSymbol:function(a,b){},_setSymbolSize:function(a,b){switch(a.type){case "simple-marker-symbol":a.setSize(b);break;case "picture-marker-symbol":a.setWidth(b);a.setHeight(b);break;case "simple-line-symbol":case "cartographic-line-symbol":a.setWidth(b);break;case "simple-fill-symbol":case "picture-fill-symbol":a.outline&&a.outline.setWidth(b)}}})});