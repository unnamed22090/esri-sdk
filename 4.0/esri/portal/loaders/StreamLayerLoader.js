// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/accessoireSupport/typescript ./support/graphicsUtils ./LayerLoader".split(" "),function(h,k,e,b,c,f,g){return function(d){function a(){d.apply(this,arguments)}e(a,d);a.prototype.loadLayer=function(){var a=this;return this.fetchData().then(function(b){if(b)return f.readItemOverrides(a.portalItem,a.instance,b,a.sublayerId)})};b([c.shared("esri.portal.loaders.StreamLayerLoader")],a.prototype,"declaredClass",
void 0);b([c.shared(["Stream Service"])],a.prototype,"supportedItemTypes",void 0);return a=b([c.subclass()],a)}(g)});