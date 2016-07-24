// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/declare dojo/_base/lang ../../../core/Accessor ../../../core/arrayUtils ../../../core/HandleRegistry ../../../geometry/support/webMercatorUtils ../../../views/3d/support/aaBoundingRect ./terrainUtils ./TerrainConst".split(" "),function(b,k,g,d,c,p,h,l,q,m,e,r,n){b=function(e){function a(){e.apply(this,arguments)}g(a,e);Object.defineProperty(a.prototype,"layerViewsExtent",
{get:function(){return this._computeLayerViewsExtent()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"tiledLayersExtent",{get:function(){return this._computeTiledLayersExtent()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"spatialReference",{set:function(a){this.tilingScheme||this._set("spatialReference",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"tilingScheme",{set:function(a){this._set("tilingScheme",a);this._set("spatialReference",
a.spatialReference)},enumerable:!0,configurable:!0});a.prototype.normalizeCtorArgs=function(a){a=p.mixin({},a);this._layers=a.layers;delete a.layers;this._layerViews=a.layerViews;delete a.layerViews;return a};d([c.property({readOnly:!0})],a.prototype,"layerViewsExtent",null);d([c.property({readOnly:!0,dependsOn:["spatialReference","tilingScheme"]})],a.prototype,"tiledLayersExtent",null);d([c.property()],a.prototype,"spatialReference",null);d([c.property()],a.prototype,"tilingScheme",null);d([c.property()],
a.prototype,"defaultTiledLayersExtent",void 0);return a=d([c.subclass()],a)}(c.declared(h));h=function(e){function a(){e.apply(this,arguments)}g(a,e);a.prototype._computeLayerViewsExtent=function(){return this._getGlobalExtent()};a.prototype._computeTiledLayersExtent=function(){return this._getGlobalExtent()};a.prototype._getGlobalExtent=function(){return this.spatialReference.isWebMercator?n.WEBMERCATOR_WORLD_EXTENT:n.GEOGRAPHIC_WORLD_EXTENT};d([c.property({dependsOn:["spatialReference"]})],a.prototype,
"layerViewsExtent",void 0);return a=d([c.subclass()],a)}(c.declared(b));k.SurfaceExtentHelperGlobal=h;b=function(b){function a(){b.call(this);this._changeListeners=new q}g(a,b);a.prototype.initialize=function(){this._changeListeners.add(this._layers.on("change",this.notifyChange.bind(this,"tiledLayersExtent")));this._changeListeners.add(this._layerViews.on("change",this.notifyChange.bind(this,"layerViewsExtent")))};a.prototype.destroy=function(){this._changeListeners.destroy();this._changeListeners=
null};a.prototype._computeLayerViewsExtent=function(){var a=e.create(e.NEGATIVE_INFINITY),c=this.spatialReference;this._layerViews.forEach(function(f){f.isResolved()&&((f=f.fullExtentInViewSpatialReference||f.layer.fullExtent)&&!f.spatialReference.equals(c)&&(f=m.canProject(f.spatialReference,c)?m.project(f,c):null),f&&e.expand(a,f))});var d=e.allFinite(a)?a:null,b=this._get("layerViewsExtent");return l.equals(d,b)?b:d};a.prototype._computeTiledLayersExtent=function(){var a=this.tilingScheme;if(!a)return null;
var c=this.spatialReference,d=e.create(e.NEGATIVE_INFINITY);this._layers.forEach(function(b){r.isTiledLayer(b)&&a.compatibleWith(b.tileInfo)&&(b.fullExtent&&b.fullExtent.spatialReference.equals(c))&&e.expand(d,b.fullExtent)});this.defaultTiledLayersExtent&&e.expand(d,this.defaultTiledLayersExtent);var b=e.allFinite(d)?d:null,f=this._get("tiledLayersExtent");return l.equals(b,f)?f:b};return a=d([c.subclass()],a)}(c.declared(b));k.SurfaceExtentHelperLocal=b});