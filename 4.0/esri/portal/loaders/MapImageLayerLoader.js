// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/accessoireSupport/typescript ./support/jsonUtils ./LayerLoader".split(" "),function(k,l,g,d,e,c,h){return function(f){function a(){f.apply(this,arguments)}g(a,f);a.prototype.loadLayer=function(){var a=this;return this.fetchData().then(function(b){b&&(c.readIfDefined(a.instance,"minScale",b.minScale,{minScale:b.minScale}),c.readIfDefined(a.instance,"maxScale",b.maxScale,{maxScale:b.maxScale}),
c.readIfDefined(a.instance,"opacity",b.opacity,{opacity:b.opacity}),c.readIfDefined(a.instance,"sublayers",b.visibleLayers||b.layers,{visibleLayers:b.visibleLayers,layers:b.layers}))})};d([e.shared("esri.portal.loaders.MapImageLayerLoader")],a.prototype,"declaredClass",void 0);d([e.shared(["Map Service"])],a.prototype,"supportedItemTypes",void 0);return a=d([e.subclass()],a)}(h)});