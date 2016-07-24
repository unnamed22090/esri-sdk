// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/accessoireSupport/typescript ./LayerCreator ../../layers/VectorTileLayer".split(" "),function(h,k,e,b,c,f,g){return function(d){function a(){d.apply(this,arguments)}e(a,d);a.prototype.layerProperties=function(a){return this.inherited(arguments).then(function(b){void 0!==a.styleUrl&&(b.url=a.styleUrl);return b})};b([c.shared("esri.portal.creators.VectorTileLayerCreator")],a.prototype,"declaredClass",
void 0);b([c.shared(g)],a.prototype,"type",void 0);return a=b([c.subclass()],a)}(f)});