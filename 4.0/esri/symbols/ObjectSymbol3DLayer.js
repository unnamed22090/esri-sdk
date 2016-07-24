// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang","./Symbol3DLayer"],function(d,b,c,e){var a=d(e,{type:"Object",material:void 0,resource:void 0,width:void 0,height:void 0,depth:void 0,anchor:void 0,toJSON:function(){var a={width:this.width,height:this.height,depth:this.depth,anchor:this.anchor,resource:b.clone(this.resource)};b.mixin(a,this.inherited(arguments));return c.fixJson(a,!0)},clone:function(){return new a({anchor:this.anchor,depth:this.depth,enable:this.enable,height:this.height,
material:this.material&&this.material.clone(),resource:c.clone(this.resource),width:this.width})}});return a});