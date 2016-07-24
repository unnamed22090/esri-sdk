// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessoireSupport/typescript dojo/promise/all ./graphics/Graphics3DSpatialIndex ./graphics/Graphics3DLayerViewCore ./graphics/graphicUtils ./support/LayerViewUpdatingPercentage ../../layers/GraphicsLayerView ../../../layers/FeatureLayer ../../../layers/graphics/controllers/SnapshotController ../support/PromiseLightweight ../../../core/watchUtils ./support/projectExtentUtils ../../../core/Error ../../../core/promiseUtils ../../../layers/graphics/QueryEngine".split(" "),
function(A,B,k,d,f,l,m,n,p,q,r,s,t,u,v,w,x,y,z){return function(h){function a(b){h.call(this)}k(a,h);a.prototype.dojoConstructor=function(){this.controller=null;this.supportsDraping=!0;this._overlayUpdating=null;this._progressMaxNumNodes=0;this._eventHandles=[];this._controllerClientSideFiltering=!1;this.fullExtentInViewSpatialReference=this._suspendResumeExtent=null;this._destroyed=!1};a.prototype.initialize=function(){var b=this;this.spatialIndex=new m;this.layerViewCore=new n({owner:this,layer:this.layer,
spatialIndex:this.spatialIndex,frustumVisibilityEnabled:!0,scaleVisibilityEnabled:!0,labelingEnabled:this.layer.isInstanceOf(s),elevationAlignmentEnabled:!0,verticalScaleEnabled:!0,updateSuspendResumeExtent:function(){return b.updateSuspendResumeExtent()},updateClippingExtent:function(a){return b.updateClippingExtent(a)}});this.layerViewCore.initialize();this.drawingOrder=this.view.getDrawingOrder(this.layer.uid);this.createController();this.layerViewCore.labeling&&this.addResolvingPromise(this.layerViewCore.labeling.initLabelingInfo());
var a=w.toView(this).then(function(a){b.fullExtentInViewSpatialReference=a});a&&this.addResolvingPromise(a);this._evaluateUpdatingState()};a.prototype.destroy=function(){this._destroyed=!0;this._eventHandles.forEach(function(b){return b.remove()});this._eventHandles=null;this.controller&&(this.controller.destroy(),this.controller=null);this.layerViewCore&&(this.layerViewCore.destroy(),this.layerViewCore=null);this.spatialIndex&&(this.spatialIndex.destroy(),this.spatialIndex=null);this.loadedGraphics=
null};a.prototype.getRenderingInfo=function(b){var a=this.inherited(arguments);if(a&&a.color){var c=a.color;a.color=[c.r/255,c.g/255,c.b/255,c.a]}return a};a.prototype.getGraphicsFromStageObject=function(b,a){var c=b.getMetadata().graphicId,e=null;this.loadedGraphics&&this.loadedGraphics.some(function(b){return b.id===c?(e=b,!0):!1});var g=new u.Promise;null!==e?g.done(e):g.reject();return g};a.prototype.getGraphics3DGraphics=function(){return this.layerViewCore.graphicsCore.getGraphics3DGraphics()};
a.prototype.getGraphics3DGraphicsKeys=function(){return this.layerViewCore.graphicsCore.getGraphics3DGraphicsKeys()};a.prototype.queryGraphics=function(){return this._queryEngine?this._queryEngine.queryFeatures():this._rejectQuery()};a.prototype.queryFeatures=function(b){return this._queryEngine?this._queryEngine.queryFeatures(b):this._rejectQuery()};a.prototype.queryObjectIds=function(b){return this._queryEngine?this._queryEngine.queryObjectIds(b):this._rejectQuery()};a.prototype.queryFeatureCount=
function(b){return this._queryEngine?this._queryEngine.queryFeatureCount(b):this._rejectQuery()};a.prototype.queryExtent=function(b){return this._queryEngine?this._queryEngine.queryExtent(b):this._rejectQuery()};a.prototype.whenGraphicBounds=function(b){return this.layerViewCore.graphicsCore.whenGraphicBounds(b)};a.prototype._rejectQuery=function(){return y.reject(new x("FeatureLayerView3D","Not ready to execute query"))};a.prototype._notifySuspendedChange=function(){this.notifyChange("suspended")};
a.prototype._notifyDrapedDataChange=function(){this.emit("draped-data-change")};a.prototype.canResume=function(){return this.inherited(arguments)&&this.layerViewCore&&this.layerViewCore.canResume()};a.prototype._evaluateUpdatingState=function(){if(this.layerViewCore.elevationAlignment){var b;b=0+this.layerViewCore.elevationAlignment.numNodesUpdating();b+=this.layerViewCore.graphicsCore.numNodesUpdating();var a;a=(a=(a=this.controller&&this.controller.isQueryInProgress)||this._overlayUpdating)||!(this.view.basemapTerrain&&
this.view.basemapTerrain.ready);var c;c=(c=0<b||a)||this.spatialIndex.isUpdating();this._progressMaxNumNodes=Math.max(b,this._progressMaxNumNodes);0===b&&(this._progressMaxNumNodes=1);this.updatingPercentage=a?100:100*b/this._progressMaxNumNodes;this.updating=c}else this.updating=!1,this.updatingPercentage=100};a.prototype.createController=function(){var a=this,d=this.layer.createGraphicsController({layerView:this,options:{maxPageSize:300,extent:this.view.clippingArea}});v.whenTrueOnce(this.view,
"basemapTerrain.ready",function(){l([a,d]).then(function(c){c=c[1];c instanceof t&&(a.controller=c,a._eventHandles.push(a.controller.watch("isQueryInProgress",function(){return a._evaluateUpdatingState()})));a.loadedGraphics=c.graphics;a._queryEngine=new z({features:a.loadedGraphics,objectIdField:a.layer.objectIdField});a._evaluateUpdatingState()})})};a.prototype.updateClippingExtent=function(a){if(this.controller){if(this._controllerClientSideFiltering)return!1;this.controller.extent?(this.controller.extent=
null,this._controllerClientSideFiltering=!0):this.controller.extent=a;return!0}return!1};a.prototype.updateSuspendResumeExtent=function(){return this._suspendResumeExtent=p.enlargeExtent(this.layerViewCore.graphicsCore.computedExtent,this._suspendResumeExtent,1.2)};a.prototype.getStats=function(){var a=this.layerViewCore.graphicsCore.getGraphics3DGraphics(),d="null",c=this._suspendResumeExtent;c&&(d=[c[0],c[1],c[2],c[3]].map(function(a){return a.toPrecision(4)}).join(", "));var c="null",e=this.layerViewCore.graphicsCore.computedExtent;
e&&(c=[e.xmin,e.ymin,e.xmax,e.ymax].map(function(a){return a.toPrecision(4)}).join(", "));return{numCollection:this.loadedGraphics.length,numGraphics:Object.keys(a).length,numElevationUpdating:this.layerViewCore.elevationAlignment.numNodesUpdating(),numSpatialIndexUpdating:this.spatialIndex.numNodesUpdating(),numGraphicsUpdating:this.layerViewCore.graphicsCore.numNodesUpdating(),visibilityFrustum:this.layerViewCore.frustumVisibility.canResume(),visibilityScale:this.layerViewCore.scaleVisibility.canResume(),
resumeExtent:d,computedExtent:c,updating:this.updating,suspended:this.suspended}};d([f.shared("esri.views.3d.layers.FeatureLayerView3D")],a.prototype,"declaredClass",void 0);d([f.property({setter:function(a){this.layerViewCore.graphicsCore.setDrawingOrder(a);return a}})],a.prototype,"drawingOrder",void 0);d([f.property()],a.prototype,"loadedGraphics",void 0);return a=d([f.subclass([q])],a)}(r)});