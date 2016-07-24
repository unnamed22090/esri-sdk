// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./Symbol3DLayer"],function(c,b,d,e,f){var a=c(f,{type:"Text",material:void 0,size:void 0,_sizeSetter:e.toPt,text:void 0,font:void 0,toJSON:function(){var a={font:this.font?b.clone(this.font):void 0,size:null!=this.size?this.size:void 0};b.mixin(a,this.inherited(arguments));return d.fixJson(a,!0)},clone:function(){return new a({enable:this.enable,font:this.font&&this.font.clone(),material:this.material&&this.material.clone(),
size:this.size,text:this.text})}});return a});