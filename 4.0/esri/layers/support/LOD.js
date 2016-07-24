// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/lang","../../core/JSONSupporter"],function(b,c){var a=c.createSubclass({declaredClass:"esri.layers.support.LOD",level:null,resolution:null,scale:null,clone:function(){return new a({level:this.level,resolution:this.resolution,scale:this.scale})},toJSON:function(){return b.fixJson({level:this.level,resolution:this.resolution,scale:this.scale})}});return a});