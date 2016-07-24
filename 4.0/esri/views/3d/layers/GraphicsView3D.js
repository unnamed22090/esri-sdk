// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessoireSupport/typescript ../../layers/GraphicsView ./graphics/Graphics3DCore ./graphics/Graphics3DSpatialIndex ./graphics/Graphics3DSharedResources ./graphics/Graphics3DElevationAlignment ../support/PromiseLightweight".split(" "),function(r,s,h,c,b,k,l,m,n,p,q){return function(g){function a(d){g.call(this);this.elevation=this.sharedResources=this.spatialIndex=this.graphicsCore=null;
this.supportsDraping=!0;this._overlayUpdating=!1;this._progressMaxNumNodes=0;this._eventHandles=null}h(a,g);a.prototype.initialize=function(){var d=this;this.loadedGraphics=this.graphics;this.graphicsCore=new l;this.spatialIndex=new m;this.sharedResources=new n;this.elevation=new p;this.supportsDraping=!0;this._overlayUpdating=!1;this._progressMaxNumNodes=0;this._eventHandles=[];this.mockLayerId="__sceneView.graphics-"+Date.now().toString(16);var a={id:this.mockLayerId};this.sharedResources.initialize(this.view._stage,
this.view.resourceController,null);this.spatialIndex.initialize(this,a,this.view.spatialReference,this.graphicsCore);this.elevation.initialize(this,function(a,c,b){d.spatialIndex.intersects(a,c,b)},this.graphicsCore,this.view.basemapTerrain);this.graphicsCore.initialize(this,a,this.elevation,this.sharedResources,null,this.spatialIndex,null,null,null,this.view.basemapTerrain);this._eventHandles.push(this.view.watch("clippingArea",function(){return d.updateClippingExtent()}));this.updateClippingExtent();
this.view.resourceController.registerIdleFrameWorker(this,{needsUpdate:this._needsIdleUpdate,idleFrame:this._idleUpdate})};a.prototype.destroy=function(){this._eventHandles.forEach(function(a){return a.remove()});this._eventHandles=null;this.view.resourceController.deregisterIdleFrameWorker(this);this.spatialIndex&&(this.spatialIndex.destroy(),this.spatialIndex=null);this.elevation&&(this.elevation.destroy(),this.elevation=null);this.graphicsCore&&(this.graphicsCore.destroy(),this.graphicsCore=null);
this.sharedResources&&(this.sharedResources.destroy(),this.sharedResources=null);this.loadedGraphics=null};a.prototype.getGraphicsFromStageObject=function(a,c){var b=a.getMetadata().graphicId,e=null;this.loadedGraphics&&this.loadedGraphics.some(function(a){return a.id===b?(e=a,!0):!1});var f=new q.Promise;null!==e?f.done(e):f.reject();return f};a.prototype.whenGraphicBounds=function(a){return this.graphicsCore.whenGraphicBounds(a)};a.prototype._needsIdleUpdate=function(){return this.elevation.needsIdleUpdate()};
a.prototype._idleUpdate=function(a){this.elevation.idleUpdate(a)};a.prototype._notifySuspendedChange=function(){};a.prototype._notifyDrapedDataChange=function(){this.view.basemapTerrain&&this.view.basemapTerrain.overlayManager.setOverlayDirty()};a.prototype._evaluateUpdatingState=function(){if(this.elevation){var a;a=0+this.elevation.numNodesUpdating();a+=this.graphicsCore.numNodesUpdating();this.updating=a=(a=0<a||this._overlayUpdating)||this.spatialIndex.isUpdating()}else this.updating=!1};a.prototype.updateClippingExtent=
function(){this.graphicsCore.setClippingExtent(this.view.clippingArea,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()};c([b.shared("esri.views.3d.layers.GraphicsView3D")],a.prototype,"declaredClass",void 0);c([b.property({setter:function(a){a!==this.loadedGraphics&&(this.loadedGraphics=a);return a}})],a.prototype,"graphics",void 0);c([b.property()],a.prototype,"loadedGraphics",void 0);c([b.property({value:!0})],a.prototype,"updating",void 0);c([b.property({value:!1})],a.prototype,
"suspended",void 0);return a=c([b.subclass([])],a)}(k)});