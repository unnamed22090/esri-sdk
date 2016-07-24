// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/accessoireSupport/typescript ./LayerCreator ../../layers/GroupLayer ../../core/promiseUtils".split(" "),function(k,l,e,b,c,f,g,h){return function(d){function a(){d.apply(this,arguments)}e(a,d);a.prototype.create=function(){var a=this;return this.layerProperties(this.layer).then(function(b){void 0!==a.layer.visibilityMode&&(b.visibilityMode=a.layer.visibilityMode);return h.resolve(new g(b))})};
b([c.shared("esri.portal.creators.GroupLayerCreator")],a.prototype,"declaredClass",void 0);return a=b([c.subclass()],a)}(f)});