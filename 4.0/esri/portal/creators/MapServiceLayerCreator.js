// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/accessoireSupport/typescript ./LayerCreator ../../layers/MapImageLayer".split(" "),function(h,k,e,b,c,f,g){return function(d){function a(){d.apply(this,arguments)}e(a,d);a.prototype.layerProperties=function(a){return this.inherited(arguments).then(function(b){a.visibleLayers&&(b.sublayers=a.visibleLayers.map(function(a){return{id:a,visible:!0}}));return b})};b([c.shared("esri.portal.creators.MapServiceLayerCreator")],
a.prototype,"declaredClass",void 0);b([c.shared(g)],a.prototype,"type",void 0);return a=b([c.subclass()],a)}(f)});