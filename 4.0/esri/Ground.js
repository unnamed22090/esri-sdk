// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/extendsHelper ./core/tsSupport/decorateHelper ./core/Accessoire ./core/Collection ./core/collectionUtils ./layers/Layer ./core/accessoireSupport/typescript".split(" "),function(l,m,e,b,f,g,h,k,c){return function(d){function a(a){d.call(this);this.layers=null}e(a,d);a.prototype.getDefaults=function(a){return{layers:[]}};b([c.shared("esri.Ground")],a.prototype,"declaredClass",void 0);b([c.property({type:g.ofType(k),setter:h.referenceSetter})],a.prototype,"layers",
void 0);return a=b([c.subclass()],a)}(f)});