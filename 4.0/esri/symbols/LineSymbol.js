// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/screenUtils","./Symbol"],function(a,b,c,d){return a(d,{declaredClass:"esri.symbols.LineSymbol",type:null,width:0.75,_widthSetter:c.toPt,toJSON:function(){return b.mixin(this.inherited(arguments),{width:this.width})}})});