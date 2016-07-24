// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang","./Symbol3DLayer"],function(b,c,d,e){var a=b(e,{type:"Extrude",size:0,material:null,toJSON:function(){var a={size:this.size};c.mixin(a,this.inherited(arguments));return d.fixJson(a,!0)},clone:function(){return new a({enable:this.enable,material:this.material&&this.material.clone(),size:this.size})}});return a});