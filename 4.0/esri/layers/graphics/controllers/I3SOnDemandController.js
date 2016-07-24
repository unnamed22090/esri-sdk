// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessoireSupport/typescript dojo/promise/all ../../../views/3d/support/ResourceController ../../../geometry/SpatialReference ../../../views/3d/layers/i3s/I3SNodeLoader ../../../views/3d/layers/i3s/I3SIndexTraversal ../../../views/3d/layers/i3s/I3SUtil ../../../views/3d/layers/i3s/I3SLodHandling ../../../views/3d/layers/i3s/I3SViewportQueries ../../../core/Accessoire ../../../core/Evented ../../../core/AccessoirePromise ../../../views/3d/support/PromiseLightweight ../../../views/3d/support/projectionUtils ../../../views/3d/lib/glMatrix".split(" "),
function(D,E,q,l,m,r,s,g,t,u,h,v,w,x,y,z,A,B,C){function n(f,c){for(var a=0;a<f.length;a++)if(f[a].name===c)return[a,f[a]];return[-1,void 0]}var f=C.vec3d;return function(p){function c(a){p.call(this)}q(c,p);c.prototype.initialize=function(){var a=this;this.screenSizeFactor=0;this._animFrameFunctionQueue=[[],[]];this._numNodesLoading=0;this._progressMaxNumNodes=1;this._layerViewHandles=[];this._requiredAttributesChangedHandles=[];this._qualityChangedHandles=[];this._restartNodeLoading=this._updatesDisabled=
!1;this.updateEventListener={needsUpdate:function(){return a._needsAnimationFrameHandler()},idleFrame:function(b){return a._animationFrameHandler(b)},idleBegin:function(){return a._startNodeLoading()},idleEnd:function(){return a.cancelNodeLoading()}};this.updateEventListenerWhileSuspended={idleBegin:function(){return a._startNodeLoadingWhileSuspended()}};this._lodHandling=new v(this.layerViewRequiredFunctions,this.layerViewOptionalFunctions);this.layerView._controller=this;var b=this.layer;this._defaultGeometrySchema=
b.store.defaultGeometrySchema;this._fields=b.fields;this._attributeStorageInfo=b.attributeStorageInfo;this._rootNodeUrl=b.store.rootNode;null==b.store.indexCRS&&null==b.store.geographicCRS&&this.warningEvent("Input data invalid: layer.store.indexCRS is undefined.",1);null==b.store.vertexCRS&&null==b.store.projectedCRS&&this.warningEvent("Input data invalid: layer.store.vertexCRS is undefined.",1);b=r([this.layer,this.layerView]).then(function(){a.setClippingArea(a.layerView.view.clippingArea);a._layerViewHandles=
[a.layerView.on("suspend",function(b){b.target.view.resourceController.deregisterIdleFrameWorker(a);a.updateEventListener.idleEnd();b.target.view.resourceController.registerIdleFrameWorker(a,a.updateEventListenerWhileSuspended);null!=b.target.setVisibility&&b.target.setVisibility(!1)}),a.layerView.on("resume",function(b){null!=b.target.setVisibility&&b.target.setVisibility(!0);b.target.view.resourceController.deregisterIdleFrameWorker(a);b.target.view.resourceController.registerIdleFrameWorker(a,
a.updateEventListener);a.updateEventListener.idleBegin()})];a.layerView.suspended?a.layerView.view.resourceController.registerIdleFrameWorker(a,a.updateEventListenerWhileSuspended):(null!=a.layerView.setVisibility&&a.layerView.setVisibility(!0),a.layerView.view.resourceController.registerIdleFrameWorker(a,a.updateEventListener));a._qualityChangedHandles=[a.layerView.watch("view.qualitySettings.sceneLayer.lodFactor",function(){return a._qualityChanged()})]});this.addResolvingPromise(b)};c.prototype.destroy=
function(){this.layerView.view.resourceController.deregisterIdleFrameWorker(this);this.layerView.view.resourceController.deregisterClient(this.layerView);this._removeHandles(this._layerViewHandles);this._removeHandles(this._requiredAttributesChangedHandles);this._removeHandles(this._qualityChangedHandles);this._nodeLoader=null};c.prototype._removeHandles=function(a){a&&(a.forEach(function(a){a.remove()}),a.length=0)};c.prototype._modifyNumNodesLoading=function(a){this._numNodesLoading+=a};c.prototype._getRequiredAttributes=
function(){if(null==this._attributeStorageInfo||!this._fields)return[];var a=Object.create(null);this.layer.renderer&&this.layer.renderer.collectRequiredFields(a);this.layer.labelsVisible&&this.layer.labelingInfo&&this.layer.labelingInfo.forEach(function(b){b._collectRequiredFields(a)});var b=this._attributeStorageInfo,c=this._fields;return Object.keys(a).map(function(a){var d=n(b,a)[0],f=n(c,a)[1];return{index:d,name:a,field:f,attributeStorageInfo:b[d]}}).filter(function(a){return-1!==a.index&&null!=
a.field})};c.prototype._rendererChanged=function(){var a=this._getRequiredAttributes();this.cancelNodeLoading();this._requiredAttributes=a;this._startNodeLoading()};c.prototype._labelsVisibleChanged=function(){var a=this._getRequiredAttributes(),b=!0;a.length===this._requiredAttributes.length&&(b=this._requiredAttributes.every(function(b){return-1!==n(a,b.name)[0]}));b&&(this.cancelNodeLoading(),this._requiredAttributes=a,this._startNodeLoading())};c.prototype._labelingInfoChanged=function(){};c.prototype.setClippingArea=
function(a){var b=[];B.extentToBoundingBox(a,b,this.layerView.view.renderSpatialReference)?this._clippingArea=b:this._clippingArea=null};c.prototype._qualityChanged=function(){this.cancelNodeLoading();this._startNodeLoading()};c.prototype.updateClippingArea=function(a){this.setClippingArea(a);this.cancelNodeLoading();this._startNodeLoading()};c.prototype.queueAnimationFrameFunctionCall=function(a,b,c,e,d){null!=this._nodeLoader&&this._animFrameFunctionQueue[d||0].push({fct:a,that:b,args:c,cancelFunc:e})};
c.prototype.getBaseUrl=function(){return h.addTrailingSlash(this.layer.parsedUrl.path)};c.prototype.updateElevationChanged=function(a,b,c){h.findIntersectingNodes(a,b,this.nodeIndex.root,this.crsIndex,this.nodeIndex,c);for(a=0;a<c.length;a++)b=c.data[a],b.computedMbs&&(b.computedMbs[3]=-1);c.length&&(this._restartNodeLoading=!0)};c.prototype._needsAnimationFrameHandler=function(){return!0};c.prototype._animationFrameHandler=function(a){this._restartNodeLoading&&(this.cancelNodeLoading(),this._startNodeLoading());
if(null!=this._nodeLoader){for(var b;0<this._animFrameFunctionQueue[0].length&&!a.done();)b=this._animFrameFunctionQueue[0].shift(),b.fct.apply(b.that,b.args);b=5-this._numNodesLoading;for(null!=this._indexLoader&&0<b&&this._indexLoader.continueTraversal(b);0<this._animFrameFunctionQueue[1].length&&!a.done();)b=this._animFrameFunctionQueue[1].shift(),b.fct.apply(b.that,b.args);this._evaluateUpdating();this._lodHandling.lodGlobalHandling()}};c.prototype._evaluateUpdating=function(){var a=null!=this._indexLoader?
this._indexLoader.getQueueSize()+3*this._numNodesLoading:0,b=0<a;0===a&&(this._progressMaxNumNodes=1);this._progressMaxNumNodes=Math.max(a,this._progressMaxNumNodes);this.layerView.updating!==b&&(this.layerView.updating=b);a=100*a/this._progressMaxNumNodes;this.layerView.updatingPercentage!==a&&(this.layerView.updatingPercentage=a)};c.prototype._initViewData=function(){var a=this.layerView.view,b=a.navigation.targetCamera,c=a.renderCoordsHelper;this.camPos=b.eye;this.screenSizeFactor=1/b.perPixelRatio;
this._poi=f.create();var e=f.create(),d=f.create();f.subtract(b.center,b.eye,e);f.normalize(e);c.worldUpAtPosition(b.center,d);e=Math.acos(f.dot(d,e))-0.5*Math.PI;f.lerp(b.eye,b.center,Math.max(0,Math.min(1,e/(0.5*Math.PI))),this._poi);e=a.qualitySettings.sceneLayer.lodFactor;d=this.layerViewOptionalFunctions.traversalOptions.elevationInfo;this._viewportQueries=new w(this.crsIndex,c,b,this._clippingArea,null!=this.layerViewOptionalFunctions.traversalOptions?this.layerViewOptionalFunctions.traversalOptions.errorMetricToUse:
null,d?a.basemapTerrain:null,d,{screenspaceErrorBias:e,maxDistance:25E7,angleDependentLoD:1>e})};c.prototype._startNodeLoadingWhileSuspended=function(){this._initViewData();this._removeInvisibleNodes()};c.prototype.warningEvent=function(a,b){this.emit("i3s-load-log",{type:1===b?"fatal":"warning",msg:a});console.warn("i3s-load-log warningEvent severity "+b," message "+a)};c.prototype._startNodeLoading=function(){var a=this;this._restartNodeLoading=!1;if(!this._updatesDisabled&&null!=this.streamDataSupplier){this._initViewData();
var b=null!=this.layerViewOptionalFunctions.getTexturePrefetchFunctions?this.layerViewOptionalFunctions.getTexturePrefetchFunctions():void 0,c=this.isMeshPyramid&&null!=this._defaultGeometrySchema&&null!=this._defaultGeometrySchema.ordering;null!=this.layerViewOptionalFunctions.getLoadedAttributes&&null==this._requiredAttributes&&(this._requiredAttributes=this._getRequiredAttributes(),this._requiredAttributesChangedHandles=[this.layer.watch("renderer",function(){return a._rendererChanged()}),this.layer.watch("labelsVisible",
function(){return a._labelsVisibleChanged()}),this.layer.watch("labelingInfo",function(){return a._labelingInfoChanged()})]);this._nodeLoader=new t(this.streamDataSupplier,this._bundleLoadedCallback.bind(this),this.queueAnimationFrameFunctionCall.bind(this),void 0,this.layerView.view.renderCoordsHelper,this.crsIndex,b?b._calcDesiredTextureLOD:void 0,b?b._imageIsPartOfTextureBundle:void 0,b?b._matId2Meta:void 0,b?b._texId2Meta:void 0,b?b.useCompressedTextures:void 0,this.warningEvent,this._defaultGeometrySchema,
this._requiredAttributes,c);b=this._rootNodeUrl.split("/");b=b[b.length-1];this._indexLoader=new u(this.getBaseUrl(),this._rootNodeUrl,b,this._poi,this.nodeIndex,this.streamDataSupplier,this._viewportQueries,this._processNodeIndexDocument.bind(this),this._lodHandling.finishedLevel.bind(this._lodHandling),this.layerViewOptionalFunctions._nodeDebugVisualizer,this.warningEvent,this.layer._addTrailingSlash,this.layerViewOptionalFunctions.traversalOptions);this._indexLoader.start();var c=this._removeInvisibleNodes(),
e=null!=this.layerViewOptionalFunctions.traversalOptions&&!0===this.layerViewOptionalFunctions.traversalOptions.perLevelTraversal?"perLevel":this.isMeshPyramid?"global":"swap";this._lodHandling.startNodeLoading(this._indexLoader.nodeIsVisible.bind(this._indexLoader),this._indexLoader.nodeTraversalState.bind(this._indexLoader),e,this.nodeIndex,c,b);this.layerViewOptionalFunctions.additionalStartNodeLoadingHandler&&this.layerViewOptionalFunctions.additionalStartNodeLoadingHandler();this._evaluateUpdating()}};
c.prototype.isNodeLoading=function(){return null!=this._nodeLoader&&null!=this._indexLoader};c.prototype.cancelNodeLoading=function(){if(this.isNodeLoading()){this._indexLoader.cancel();this._nodeLoader.cancel();this.streamDataSupplier.cancelRequestsBulk(this.streamDataSupplier.getRequestedURLs());for(var a=0;a<this._animFrameFunctionQueue.length;a++)for(var b=0;b<this._animFrameFunctionQueue[a].length;b++)void 0!==this._animFrameFunctionQueue[a][b].cancelFunc&&this._animFrameFunctionQueue[a][b].cancelFunc();
this._numNodesLoading=0;this._animFrameFunctionQueue=[[],[]];this._indexLoader=this._nodeLoader=void 0;this._lodHandling.cancelNodeLoading();this.layerViewOptionalFunctions.additionalCancelNodeLoadingHandler&&this.layerViewOptionalFunctions.additionalCancelNodeLoadingHandler();this._evaluateUpdating()}};c.prototype._removeInvisibleNodes=function(){var a={},b;for(b in this.nodeIndex)if(this.nodeIndex.hasOwnProperty(b)){var c=this.nodeIndex[b];null!=this.layerViewRequiredFunctions.getAddedFeatures(c.id)&&
(!1===this._viewportQueries.isNodeVisible(c)?this._removeNodeData(c):a[b]=c)}return a};c.prototype._removeNodeData=function(a){this._lodHandling.setLodGlobalDirty();this.layerViewRequiredFunctions.removeNodeData(a);delete this.nodeIndex[a.id]};c.prototype._processNodeIndexDocument=function(a,b){var c=this,e=new A.Promise;if(null!=a.featureData&&0<a.featureData.length)if(this.layerViewRequiredFunctions.areAllBundlesLoaded(a,!0)){var d=this.layerViewOptionalFunctions.getLoadedAttributes,d=null!=d?d(a):
void 0;null!=d&&d!==this._requiredAttributes&&this._nodeLoader.loadAttributes(a,a.baseUrl,this._requiredAttributes).then(function(b){c.layerViewOptionalFunctions.setAttributeData(a,c._requiredAttributes,b)}).catch(function(b){c.layerViewOptionalFunctions.setAttributeData(a,c._requiredAttributes,{})});this._lodHandling.shouldLoadNode(a,b)&&(d=this._lodHandling.lodSwapBuildInfoForNode(a))&&null==d.swapPairs&&this._lodHandling.lodSwapBundleLoaded(a,null,d)}else if(this._lodHandling.shouldLoadNode(a,
b)){d=this._lodHandling.lodSwapBuildInfoForNode(a);if(this.layerViewRequiredFunctions.isOverMemory())return e.done(),e;this._modifyNumNodesLoading(1);for(var f=[],k=0;k<a.featureData.length;k++){var g=this.layerViewRequiredFunctions.isBundleAlreadyAddedToStage(a,k),h=g.wasPartiallyHidden;(!g.alreadyLoaded||h)&&f.push(k)}this.queueAnimationFrameFunctionCall(this._nodeLoader.loadNodeData,this._nodeLoader,[a,f,e,null!=this.layerViewOptionalFunctions.getTexturePrefetchFunctions,d],void 0,1);e.then(function(){return c._modifyNumNodesLoading(-1)},
function(){return c._modifyNumNodesLoading(-1)});return e}e.done();return e};c.prototype._bundleLoadedCallback=function(a,b,c,e,d,f,g,h){this._lodHandling.lodSwapBundleLoaded(a,b,h);this.layerViewRequiredFunctions.addBundle(a,b,c,e,d,f,g);null!=this.layerViewOptionalFunctions.setPolygonOffset&&(b=this._lodHandling.shouldSetPolygonOffset(a))&&this.layerViewOptionalFunctions.setPolygonOffset(a,b)};l([m.shared("esri.layers.graphics.controllers.I3SOnDemandController")],c.prototype,"declaredClass",void 0);
l([m.shared({properties:{isMeshPyramid:{readOnly:!0,getter:function(){return"meshpyramids"===this.layer.store.profile||"MeshPyramid"===this.layer.store.lodType}},streamDataSupplier:{readOnly:!0,getter:function(){return this.layerView.view.resourceController.registerClient(this.layerView,s.ClientType.SCENE,this.addUrlTokenFunction)}},crsVertex:{readOnly:!0,type:g,getter:function(){var a=new g(h.extractWkid(this.layer.store.indexCRS||this.layer.store.geographicCRS));return a.equals(this.layer.spatialReference)?
this.layer.spatialReference:a}},crsIndex:{readOnly:!0,type:g,getter:function(){var a=new g(h.extractWkid(this.layer.store.vertexCRS||this.layer.store.projectedCRS));return a.equals(this.layer.spatialReference)?this.layer.spatialReference:a}},nodeIndex:{readOnly:!0,getter:function(){return{}}},camPos:{},screenSizeFactor:{},layerView:{},layerViewRequiredFunctions:{},layerViewOptionalFunctions:{},layer:{},addUrlTokenFunction:{},warningEvent:{}}})],c.prototype,"classMetadata",void 0);return c=l([m.subclass([y,
z])],c)}(x)});