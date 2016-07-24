// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessoireSupport/typescript ./graphics/Graphics3DLayerViewCore ./support/LayerViewUpdatingPercentage ../../layers/GraphicsLayerView ../../../Graphic ../../../geometry/Point ../../../geometry/Polygon ../../../geometry/Polyline ../../../core/Collection ../../../core/HandleRegistry ../../../core/promiseUtils ../lib/glMatrix ./i3s/I3SUtil ../support/PreallocArray ../support/projectionUtils ../support/aaBoundingBox".split(" "),
function(l,V,J,t,w,K,L,M,G,N,O,P,Q,R,z,S,H,I,T,u){l=function(l){function b(){l.apply(this,arguments)}J(b,l);b.prototype.dojoConstructor=function(){this._nodesAddedToStage={};this.loadedGraphics=new Q;this.supportsDraping=!0;this._overlayUpdating=null;this._handles=new R};b.prototype.initialize=function(){var a=this;this._handles.add([this.layer.watch("renderer",function(){return a._rendererChange()})]);this._layerViewCore=new K({owner:this,layer:this.layer,spatialIndex:null,labelingEnabled:!0,frustumVisibilityEnabled:!0,
elevationAlignmentEnabled:!0,verticalScaleEnabled:!0,updateSuspendResumeExtent:function(){return a._updateSuspendResumeExtent()},updateClippingExtent:function(e){return a._updateClippingExtent(e)},elevationChanged:function(e,c,d){return a._elevationChanged(e,c,d)}});this._layerViewCore.initialize();this.drawingOrder=this.view.getDrawingOrder(this.layer.uid);this._createController();this.addResolvingPromise(this._layerViewCore.labeling.initLabelingInfo())};b.prototype.destroy=function(){this._layerViewCore&&
(this._layerViewCore.destroy(),this._layerViewCore=null);this._controller&&(this._controller.destroy(),this._controller=null);this._nodesAddedToStage=this._intersectingGraphicIds=this._elevationUpdateNodes=null;this._nodeDebugVisualizer&&(this._nodeDebugVisualizer.dispose(),this._nodeDebugVisualizer=null);this._handles&&(this._handles.destroy(),this._handles=null)};b.prototype.whenGraphicAttributes=function(a,e){var c=this,d=a.attributes[this._getObjectIdField()];return H.whenGraphicAttributes(this.layer,
a,d,e,function(){return c._findGraphic(a.id)})};b.prototype.getGraphicsFromStageObject=function(a,e){if(!this.loadedGraphics)return z.reject();var c=a.getMetadata().graphicId,d=this.loadedGraphics.find(function(a){return a.id===c}),b=this._getObjectIdField();return!d||!d.attributes||!d.attributes[b]?z.reject():z.resolve(d)};b.prototype.whenGraphicBounds=function(a){return this._layerViewCore.graphicsCore.whenGraphicBounds(a)};b.prototype.canResume=function(){return this.inherited(arguments)&&this._layerViewCore&&
this._layerViewCore.canResume()};b.prototype.getRenderingInfo=function(a){var e=this.inherited(arguments);if(e&&e.color){var c=e.color;e.color=[c.r/255,c.g/255,c.b/255,c.a]}return e};b.prototype._findGraphic=function(a){for(var e=0,c=Object.keys(this._nodesAddedToStage);e<c.length;e++)for(var d=c[e],b=this._nodesAddedToStage[d].bundles,f=0;f<b.length;f++)for(var g=b[f],h=0;h<g.length;h++)if(g[h].graphics.some(function(e){return e.id===a}))return{node:this._controller.nodeIndex[d],nodeId:d,bundleNr:f,
index:h};return null};b.prototype._elevationChanged=function(a,e,c){u[2]=-Infinity;u[3]=Infinity;var d=u.fromRect(U,a);null==this._elevationUpdateNodes&&(this._elevationUpdateNodes=new I(10));a=this._elevationUpdateNodes;a.clear();this._controller&&this._controller.updateElevationChanged(d,e,a);e=a.length;this._intersectingGraphicIds||(this._intersectingGraphicIds=new I(10));d=this._intersectingGraphicIds;d.clear();for(var b=0;b<e;b++){var f=this._nodesAddedToStage[a.data[b].id];if(null!=f)for(var f=
f.bundles,g=0;g<f.length;g++)for(var h=f[g],E=0;E<h.length;E++)for(var q=h[E].graphics,r=0;r<q.length;r++)d.push(q[r].id)}c(this._intersectingGraphicIds.data,this._intersectingGraphicIds.length)};b.prototype._evaluateUpdatingState=function(){};b.prototype._notifySuspendedChange=function(){this.notifyChange("suspended")};b.prototype._notifyDrapedDataChange=function(){this.emit("draped-data-change")};b.prototype._createController=function(){var a=this,e={addBundle:this._addBundle.bind(this),isBundleAlreadyAddedToStage:this._isBundleAlreadyAddedToStage.bind(this),
isOverMemory:this._isOverMemory.bind(this),removeNodeData:this._removeNodeData.bind(this),removeFeatures:this._removeFeatures.bind(this),getAddedFeatures:this._getAddedFeatures.bind(this),areAllBundlesLoaded:this._areAllBundlesLoaded.bind(this),wholeNodeSwitchEnabled:!0},c={traversalOptions:{initDepthFirst:!1,neighborhood:!1,perLevelTraversal:!0,allowPartialOverlaps:!1,errorMetricToUse:"screenSpaceRelative",elevationInfo:this.layer.elevationInfo},getAllAddedFeatures:this._getAllAddedFeatures.bind(this),
_nodeDebugVisualizer:this._nodeDebugVisualizer,getLoadedAttributes:this._getLoadedAttributes.bind(this),setAttributeData:this._setAttributeData.bind(this)};this.layer.createGraphicsController({layerView:this,layerViewRequiredFunctions:e,layerViewOptionalFunctions:c}).then(function(e){a._controller=e})};b.prototype._getAllAddedFeatures=function(){var a={};this.loadedGraphics.forEach(function(e){a[e._nodeId]=e._features});return a};b.prototype._addBundle=function(a,e,c,d,b,f,g){f=this._controller.crsIndex;
var h=[],E=this._getObjectIdField();null==this._nodesAddedToStage[a.id]&&(this._nodesAddedToStage[a.id]={bundles:[],attributeData:c?c.attributeData:null,loadedAttributes:c?c.loadedAttributes:null});this._nodesAddedToStage[a.id].bundles[g]=h;if(null==e)null!=b&&b.done();else{for(c=0;c<e.length;c++)for(var q=e[c],r=q.featureDataPositions[0],l=0;l<q.geometries.length;l++){var A=[],n=q.features[l<q.features.length?l:0],x=n?{}:null;n&&(x[E]=n.id);var s=q.geometries[l],v=s.params.type,p=n=void 0;if("ArrayBufferView"===
s.type){p=s.params.vertexAttributes.position;if(null==p)continue;n=new H.valueType2TypedArrayClassMap[p.valueType](d[a.geometryData[g].hrefConcat],p.byteOffset,p.count*p.valuesPerElement);p=p.valuesPerElement}else"Embedded"===s.type&&(n=s.params.vertexAttributes.position,p=3);var B=void 0;if("lines"===v){for(var s=[],k=0;k<n.length;k+=p)s.push([n[k]+a.mbs[0],n[k+1]+a.mbs[1]]);v=new P(f);v.addPath(s);B=v;A.push(new G(B,null,x))}else if("points"===v)for(k=0;k<n.length;k+=p)B=new N({x:n[k]+r[0],y:n[k+
1]+r[1],z:2<p?n[k+2]+r[2]:void 0,spatialReference:f}),A.push(new G(B,null,x));else if("polygon"===v){B=v=new O(f);v._outlineSegments=[];for(var t=0;t<s.params.rings.length;t++){for(var C=s.params.rings[t],D=C.start,w=[],u=[],y=[-1,-1],F=0;F<C.segments.length;F+=2){var k=C.segments[F+0],z=C.segments[F+1];0===k||1===k?(-1===y[0]&&(y[0]=D-C.start),y[1]=D+z-C.start):-1!==y[0]&&(u.push(y),y=[-1,-1]);for(k=D*p;k<(D+z)*p;k+=p)w.push([n[k]+a.mbs[0],n[k+1]+a.mbs[1]]);D+=z}-1!==y[0]&&u.push(y);B._outlineSegments.push(u);
v.addRing(w);null!=C.inner&&console.warn("inner rings not yet supported")}A.push(new G(B,null,x))}for(x=0;x<A.length;x++)A[x].layer=this.layer;this.loadedGraphics.addMany(A);h.push({features:q.features,graphics:A})}a=this._nodesAddedToStage[a.id];this._setBundleAttributes(a.bundles[g],a.loadedAttributes,a.attributeData);b.done()}};b.prototype._areAllBundlesLoaded=function(a,e){var c=this._nodesAddedToStage[a.id];if(null==c)return!1;for(var b=0;b<a.featureData.length;b++){var m=c.bundles[b];if(null==
m)return!1;if(!e)for(var f=a.featureData[b].featureRange[1],g=a.featureData[b].featureRange[0];g<=f;g++)if(!(null==a.features||a.features.length<g)){var h=a.features[g].id;a:{for(var l=m.length;l--;)for(var q=m[l].features,r=q.length;r--;)if(q[r].id===h){h=!0;break a}h=!1}if(!h)return!1}}return!0};b.prototype._isBundleAlreadyAddedToStage=function(a,e){return null==this._nodesAddedToStage[a.id]?{alreadyLoaded:!1,wasPartiallyHidden:!1}:{alreadyLoaded:!!this._nodesAddedToStage[a.id].bundles[e],wasPartiallyHidden:!1}};
b.prototype._isOverMemory=function(){return!1};b.prototype._removeFeatures=function(a,e){var b=this._nodesAddedToStage[a.id];if(null!=b){var b=b.bundles,d;for(d in b)for(var m=0;m<b[d].length;m++){var f=b[d][m],g=!1;if(null!=f){for(var h in f.features)if(-1!==e.indexOf(f.features[h].id)){g=!0;break}g&&(this.loadedGraphics.removeMany(f.graphics),delete b[d][m])}}for(d=0;d<b.length;d++)for(m=0;m<b[d].length;m++)if(f=b[d][m],null!=f&&0<f.graphics.length)return;this._removeNodeData(a)}};b.prototype._removeNodeData=
function(a){var b=this._nodesAddedToStage[a.id];if(null!=b){var b=b.bundles,c;for(c in b)for(var d in b[c])this.loadedGraphics.removeMany(b[c][d].graphics);delete this._nodesAddedToStage[a.id]}};b.prototype._getAddedFeatures=function(a){a=this._nodesAddedToStage[a];if(null==a)return null;a=a.bundles;var b=[],c;for(c in a)for(var d=0;d<a[c].length;d++)b=b.concat(a[c][d].features);return b};b.prototype._getLoadedAttributes=function(a){if(a=this._nodesAddedToStage[a.id])return a.loadedAttributes};b.prototype._setAttributeData=
function(a,b,c){if(a=this._nodesAddedToStage[a.id])a.loadedAttributes=b,a.attributeData=c,this._setNodeAttributes(a,b,c),this._layerViewCore.labeling.layerLabelsEnabled()&&this._layerViewCore.labeling.showLabelsChange()};b.prototype._setNodeAttributes=function(a,b,c){a=a.bundles;for(var d in a)this._setBundleAttributes(a[d],b,c)};b.prototype._setBundleAttributes=function(a,b,c){for(var d=0;d<a.length;d++)for(var m=a[d],f=0;f<m.graphics.length;++f){var g=m.graphics[f];g.attributes||(g.attributes={});
if(b)for(var h=0;h<b.length;++h){var l=b[h].name;g.attributes[l]=c[l][d]}}};b.prototype._updateSuspendResumeExtent=function(){this.layer.fullExtent?(this._suspendResumeExtent||(this._suspendResumeExtent=S.vec4d.create()),T.extentToBoundingRect(this.layer.fullExtent,this._suspendResumeExtent,this.view.spatialReference)||(this._suspendResumeExtent=null)):this._suspendResumeExtent=null;return this._suspendResumeExtent};b.prototype._updateClippingExtent=function(a){this._controller&&this._controller.updateClippingArea(a);
return!1};b.prototype._getObjectIdField=function(){return this.layer.objectIdField||"OBJECTID"};b.prototype._rendererChange=function(){var a=this;Object.keys(this._nodesAddedToStage).forEach(function(b){a._removeNodeData({id:b})})};t([w.shared("esri.views.3d.layers.SceneLayerGraphicsView3D")],b.prototype,"declaredClass",void 0);t([w.property()],b.prototype,"loadedGraphics",void 0);t([w.property()],b.prototype,"layer",void 0);t([w.property()],b.prototype,"view",void 0);return b=t([w.subclass([L])],
b)}(M);var U=u.create(u.POSITIVE_INFINITY);return l});