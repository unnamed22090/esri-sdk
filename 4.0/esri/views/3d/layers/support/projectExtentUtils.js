// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../portal/support/geometryServiceUtils","../../../../core/promiseUtils"],function(h,e,f,g){e.toView=function(a){var c=a.view.spatialReference,d=a.layer.fullExtent&&a.layer.fullExtent.spatialReference;return!d||d.equals(c)||"local"!==a.view.viewingMode?g.resolve(null):f.create(a.layer.portalItem).then(function(b){return b.project([a.layer.fullExtent],c)}).then(function(b){if(!a._destroyed&&b&&Array.isArray(b)&&1===b.length)return b[0]}).otherwise(function(){return null})}});