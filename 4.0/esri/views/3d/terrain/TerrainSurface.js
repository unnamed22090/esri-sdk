// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("../../../core/declare ../../../core/Accessoire ../../../core/arrayUtils dojo/Evented dojo/on ../lib/glMatrix ../support/eventUtils ../support/projectionUtils ../support/ResourceController ../support/PromiseLightweight ../../../geometry/support/webMercatorUtils ./TerrainRenderer ./OverlayManager ./SurfaceExtentHelper ./SurfaceTilingSchemeLogic ./TilingScheme ./terrainUtils ./TileUtils ./TerrainConst ./TileGeometryFactory ./SphericalTile ./PlanarTile ./TilemapOnlyTile ./MapTileAgent ./ElevationTileAgent ../support/PreallocArray ../support/ObjectPool ../support/aaBoundingRect ../support/mathUtils".split(" "),
function(O,P,x,Q,u,B,R,C,S,D,H,T,U,I,V,J,r,s,l,W,X,Y,Z,$,aa,ba,ca,n,da){function K(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]}var L=B.vec3d,E=B.vec4d,M=B.mat4d,y=r.weakAssert,ea=80/180*Math.PI,k=l.TileUpdateTypes,h=E.create(),z=[0,0,0],v=Array(10),F={spatialReference:null,tile:null},t={spatialReference:null,extent:null},p={spatialReference:null,extent:null,scale:0},fa=[-Infinity,-Infinity,Infinity,Infinity],N=function(a){a.remove()},w=O([P,Q],{classMetadata:{properties:{ready:{readOnly:!0,
getter:function(){return!!this._rootTiles}},manifold:{readOnly:!0,getter:function(){return this._manifold}},tilingScheme:{readOnly:!0,getter:function(){return this._tilingScheme}},tilingSchemeLocked:{readOnly:!0,getter:function(){return this.tilingSchemeLogic.tilingSchemeLocked}},spatialReference:{readOnly:!0,dependsOn:["tilingScheme"],getter:function(){return this._tilingScheme?this._tilingScheme.spatialReference:null}},overlayManager:{value:null},wireframe:{value:!1},opacity:{value:1},cullBackFaces:{value:!1},
renderOrder:{value:1},skirts:{value:!0},frontMostTransparent:{value:!1},tileBackground:{value:"data:image/png;base64,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"},
extent:{}}},defaultTileBackground:"data:image/png;base64,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",
constructor:function(){this._rootTiles=null;this._iteratorPool=new ca(2,s.IteratorPreorder);this._postorderIterator=new s.IteratorPostorder;this._topLevelTilemapOnlyTiles=Array(l.TILEMAP_SIZE_EXP+1);for(a=0;a<this._topLevelTilemapOnlyTiles.length;a++)this._topLevelTilemapOnlyTiles[a]=new Z([a-l.TILEMAP_SIZE_EXP,0,0]);this._dataExtent=this._clippingExtent=this._tilingScheme=null;this._rootExtent=[0,0,0,0];this.notifyChange("extent");this._elevationBounds=[0,0];this.loaded=!1;this._frameUpdateLowerPrio=
new ba(500);this.maxTextureScale=1.2;this._stage=this._view._stage;this._updateNextFrame=this._lvPendingUpdates=this._pendingUpdates=this.suspended=this.visible=!1;this._curOverlayOpacity=1;this._curEyePos=L.create();this._curSplitLimits=[0,0,0,0,0];this._curFrustumPlanes=Array(6);this._viewProjectionMatrix=M.identity();for(var a=0;6>a;++a)this._curFrustumPlanes[a]=E.create();this.tilemapStats={tilemapRequestsSent:0,tilemapRequestsPending:0,tilemapRequestErrors:0,fullTilemaps:0,emptyTilemaps:0,tilesRequested:0,
tileRequestsSent:0,tileRequestErrors:0,tilesNotPresent:0};this._layerViews=[[],[]];this._layerIndexByLayerViewId=[{},{}];this._basemapLayerViewHandles={};this._groupLayerViewHandles={};this._layerViewChangesHandle=null;this.hideSkirtsDistanceFromExtentMargin=1.2;this.hideSkirtsMinimumCameraTilt=ea},normalizeCtorArgs:function(a,b){this._view=a;this._manifold=b;this.TileClass="planar"===b?Y:X;return{}},initialize:function(){this._renderer=new T(this.manifold);this._renderer.loaded=this._setLoaded.bind(this);
this._renderer.updateTileBackground(this.tileBackground);this._renderer.install(this._view._stage);this.overlayManager=new U(this,this._view);this.extentHelper=new ("spherical"===this.manifold?I.SurfaceExtentHelperGlobal:I.SurfaceExtentHelperLocal)({layers:this._view.map.allLayers,layerViews:this._view.allLayerViews,spatialReference:this._view.spatialReference});this.tilingSchemeLogic=new V({layers:this._view.map.allLayers,extentHelper:this.extentHelper,manifold:this.manifold,viewSpatialReference:this._view.spatialReference});
this.tilingSchemeLogic.changeCallback=this._updateTilingSchemeAndExtent.bind(this);this._updateTilingSchemeAndExtent();this._streamDataSupplier=this._view.resourceController.registerClient(this,S.ClientType.TERRAIN);this._idleWorkers={needsUpdate:this._needsIdleUpdate,idleFrame:this._idleUpdate};this._view.resourceController.registerFrameWorker(this._frameUpdate.bind(this));this._view.resourceController.registerIdleFrameWorker(this,this._idleWorkers);this._viewChangeListenerHandles=[];this._viewChangeUpdate=
this._viewChangeUpdate.bind(this);this._viewChangeListenerHandles.push(this._view.on("resize",this._viewChangeUpdate));this._viewChangeListenerHandles.push(R.on(this._view,"navigation.currentViewChanged",this._viewChangeUpdate));this._viewChangeListenerHandles.push(this._view.watch("qualitySettings.tiledSurface.lodBias",this._viewChangeUpdate));this._layerViewChangesHandle=this._view.allLayerViews.on("change",this._handleLayerViewChanges.bind(this));this._handleLayerViewChanges({added:this._view.allLayerViews.toArray(),
removed:[],moved:[]});this._clippingChangedHandle=this._view.watch("clippingArea",this._clippingChanged.bind(this));this._updateClippingExtent()},destroy:function(){this._removeAllTiles();this.tilingSchemeLogic.destroy();this.tilingSchemeLogic=null;this.extentHelper.destroy();this.extentHelper=null;for(var a in this._basemapLayerViewHandles)this._unregisterTiledLayerView(a);this._view.resourceController.deregisterFrameWorker(this);this._view.resourceController.deregisterIdleFrameWorker(this);this._view.resourceController.deregisterClient(this);
this._viewChangeListenerHandles.forEach(N);for(var b in this._groupLayerViewHandles)this._groupLayerViewHandles[b].forEach(N);this._layerViewChangesHandle.remove();this._clippingChangedHandle.remove();this.overlayManager&&(this.overlayManager.destroy(),this.overlayManager=null);this._renderer.uninstall(this._stage);this._streamDataSupplier=this._stage=this._view=this._renderer=null},setVisibility:function(a){a!==this.visible&&(this.visible=a,this._renderer.setVisibility(a),this.setUpdatesDisabled(!a),
a&&this._viewChangeUpdate())},isVisible:function(){return this.visible&&this.ready},setUpdatesDisabled:function(a){(this.suspended=a)||this._viewChangeUpdate()},getElevation:function(a){return!this.ready||0===this._rootTiles[0].layerInfo[l.LayerClass.ELEVATION].length?null:Array.isArray(a)?this._getElevation(a):!C.pointToVector(a,h,this.tilingScheme.spatialReference)?(console.error("TerrainSurface.getElevation(): could not project given point to tiling scheme coordinate system"),null):this._getElevation(h)},
_getElevation:function(a){var b=l.LayerClass.ELEVATION,c=this._rootTiles[0].layerInfo[b].length,d;v.length<c&&(v.length=c);for(var e=0;e<this._rootTiles.length;e++){var g=this._rootTiles[e];if(s.isPosWithinTile(g,a))for(;g;){var f=g.layerInfo[b];for(d=0;d<c;d++)f[d].data&&(v[d]=f[d].data.samplerData);if(!g.children[0])break;d=0;a[0]>g.children[0].extent[2]&&(d+=1);a[1]<g.children[0].extent[1]&&(d+=2);g=g.children[d]}}a=W.elevationSampler(a[0],a[1],v);for(d=0;d<c;d++)v[d]=void 0;return a},getElevationBounds:function(){return this._elevationBounds},
getScale:function(a){if(this.tilingScheme){if(!C.pointToVector(a,h,this.spatialReference))return console.error("TerrainSurface.getElevation(): could not project given point to tiling scheme coordinate system"),null;if(this._rootTiles)for(var b=0;b<this._rootTiles.length;b++)if(a=this._rootTiles[b],s.isPosWithinTile(a,h)){for(;a.children[0];)b=0,h[0]>a.children[0].extent[2]&&(b+=1),h[1]<a.children[0].extent[1]&&(b+=2),a=a.children[b];return this._getLodBiasCorrectedScale(a.lij[0])}}return 1E100},queryVisibleScaleRange:function(a,
b,c,d){b=b?this._tilingScheme.levelAtScale(b):0;c=c?this._tilingScheme.levelAtScale(c):Infinity;var e=this._getLodBias();this._renderer.queryVisibleLevelRange(a,b+e,c+e,d)},_setLoaded:function(){this.loaded||(this.loaded=!0,this.emit("load"))},_updateTilingSchemeAndExtent:function(){var a=this.tilingSchemeLogic.extent,b=this.tilingSchemeLogic.tilingScheme,c=!1;a&&!n.equals(a,this._dataExtent)&&(c=!0,this._dataExtent?n.set(this._dataExtent,a):this._dataExtent=n.create(a));b!=this._tilingScheme&&(y(b,
"tiling scheme cannot be reset to undefined"),c=!0,this._tilingScheme&&this._removeAllTiles(),this._tilingScheme=b,this.notifyChange("tilingScheme"),this._updateClippingExtent(),b&&(this._updateTiledLayers(),this._renderer.setTileSize(b.pixelSize[0]),this.overlayManager.setSpatialReference(b.spatialReference,"spherical"===this.manifold)));this.tilingSchemeLocked!==this.tilingSchemeLogic.tilingSchemeLocked&&this.notifyChange("tilingSchemeLocked");c&&this._updateRootTiles()},_acquireTile:function(a,
b,c,d){var e=this.TileClass.Pool.acquire();z[0]=a;z[1]=b;z[2]=c;e.init(z,d,this,this._tilingScheme);return e},_releaseTile:function(a){a.dispose();a.parent=null;a.parentSurface=null;this.TileClass.Pool.release(a)},_updateRootTiles:function(){var a=this._clippingExtent||this._dataExtent,b=this._tilingScheme;if(a&&b){var c=b.rootTilesInExtent(a,h,Infinity);if(this._rootTiles){if(64<c.length){console.warn("Could not extend surface to encompass all layers because it would have resulted in too many root tiles.");
return}var a=this._rootTiles.map(function(a){return a.lij}),d=x.difference(a,c,K);if(0<d.removed.length||0<d.added.length){var e=this._rootTiles.filter(function(a){return-1<x.findIndex(d.removed,K.bind(null,a.lij))?(this._purgeChildTiles(a),this._purgeTile(a),!1):!0}.bind(this));d.added.forEach(function(a){a=this._acquireTile(0,a[1],a[2],null);e.push(a);this._loadTile(a)}.bind(this));this._rootTiles=e;this._renderer.setRootTiles(this._rootTiles)}}else 64<c.length&&(console.warn("Maximum number of root tiles exceeded, only a part of the map will be visible."),
c=b.rootTilesInExtent(a,h,64)),this._rootTiles=c.map(function(a){a=this._acquireTile(0,a[1],a[2],null);this._loadTile(a);return a}.bind(this)),this._renderer.setRootTiles(this._rootTiles);x.equals(h,this._rootExtent)||(this._rootExtent=E.create(h),this._hasFixedExtent()||this.notifyChange("extent"));this.setVisibility(!0);this._viewChangeUpdate();this.notifyChange("ready")}},_viewChangeUpdate:function(){this._stage&&(!this.suspended&&this._tilingScheme&&this.visible)&&(this._updateViewDependentParameters(),
this._updateOverlayOpacity(this._curEyePos),this._updateTiles(this._rootTiles),this.overlayManager&&this.overlayManager.setOverlayDirty())},_updateTiles:function(a){var b=this._iteratorPool.acquire();b.reset(a);a=this._curSplitLimits;for(var c=this._curFrustumPlanes,d=this._curEyePos,e=Infinity,g=-Infinity;!b.done;){var f=b.next();f.updateClippingStatus(this._clippingExtent);var m=!0;if(f.updateVisibility(c,d)){f.updateScreenDepth(this._viewProjectionMatrix);f.renderData&&(e=Math.min(f.elevationBounds[0],
e),g=Math.max(f.elevationBounds[1],g));var h=f.shouldSplit(a,d);h===k.SPLIT?(f.pendingUpdates&=~k.MERGE,f.renderData?(m=!1,f.pendingUpdates|=k.SPLIT,b.skip()):m=!1):(f.pendingUpdates&=~k.SPLIT,h===k.VSPLITMERGE&&f.updateAgents(l.LayerClass.ELEVATION),b.skip())}else b.skip();if(m&&!f.renderData){f.pendingUpdates|=k.MERGE;f.pendingUpdates&=~k.SPLIT;m=this._iteratorPool.acquire();for(m.reset(f);!m.done;)h=m.next(),h.updateVisibility(c,d),h.visible&&h.updateScreenDepth(this._viewProjectionMatrix);this._iteratorPool.release(m)}0!==
f.pendingUpdates&&(this._pendingUpdates=!0)}this._iteratorPool.release(b);isFinite(e)&&isFinite(g)&&(this._elevationBounds[0]=e,this._elevationBounds[1]=g)},_viewParamSelector:{projectionMatrix:!0,fovX:!0,viewport:!0},_updateViewDependentParameters:function(){var a=this._view.navigation.currentCamera,b=Math.tan(0.5*a.fovX),c=Math.tan(0.5*a.fovY),d=this.tilingScheme.pixelSize,e=Math.pow(2,-this._getLodBias());this._curSplitLimits[0]=b;this._curSplitLimits[1]=d[0]/a.width*this.maxTextureScale*e;this._curSplitLimits[2]=
c;this._curSplitLimits[3]=d[1]/a.height*this.maxTextureScale*e;this._curSplitLimits[4]=this.tilingScheme.getMaxLod();a.copyFrustumPlanes(this._curFrustumPlanes);M.multiply(a.projectionMatrix,a.viewMatrix,this._viewProjectionMatrix);L.set(a.eye,this._curEyePos);r.autoUpdateSkirtsVisibility(this,this._curEyePos)},_setLayerViewsUpdating:function(){for(var a=0;a<l.LayerClass.LAYER_CLASS_COUNT;a++)for(var b=this._layerViews[a],c=0;c<b.length;c++){var d=b[c];d.suspended||(d.updating=this._pendingUpdates,
d.updatingPercentage=this._pendingUpdates?100:0)}},_frameUpdateTraversal:function(a){if(!this.suspended){this._frameUpdateLowerPrio.clear();var b=this._renderer.numTileTexturesComposited,c=this._iteratorPool.acquire();c.reset(this._rootTiles);for(var d=!1,e=!1;!c.done&&(1<a.remaining()||!d)&&12>this._renderer.numTileTexturesComposited-b;){var g=c.next();g.pendingUpdates&k.MERGE?(this._mergeTile(g),g.pendingUpdates&=~k.MERGE,d=!0,c.skip()):g.pendingUpdates&k.SPLIT?(this._splitTile(g),g.pendingUpdates&=
~k.SPLIT,d=!0,c.skip()):0<g.pendingUpdates&&this._frameUpdateLowerPrio.push(g);0!==g.pendingUpdates&&(e=!0)}this._pendingUpdates=e||!c.done;this._iteratorPool.release(c);return d}},_updateTileGeometry:function(a){this._renderer._updateTileGeometry(a);F.spatialReference=this.spatialReference;F.tile=a;u.emit(this,"elevation-change-tile",F)},_updateTileTexture:function(a){this._renderer.updateTileTexture(a)},_frameUpdate:function(a){if(this._rootTiles){for(var b=this._frameUpdateTraversal(a);(1<a.remaining()||
!b)&&0<this._frameUpdateLowerPrio.length;){var c=this._frameUpdateLowerPrio.pop();c.pendingUpdates&k.DECODE_LERC?(this._decodeLERC(c),c.pendingUpdates&=~k.DECODE_LERC,b=!0):c.pendingUpdates&k.UPDATE_GEOMETRY?(this._renderer.updateTileGeometryNeedsUpdate(c),this._updateTileGeometry(c),b=!0,c.pendingUpdates&=~k.UPDATE_GEOMETRY):c.pendingUpdates&k.UPDATE_TEXTURE&&(this._updateTileTexture(c),c.pendingUpdates&=~k.UPDATE_TEXTURE,b=!0);0!==c.pendingUpdates&&(this._pendingUpdates=!0)}0<this._frameUpdateLowerPrio.length&&
(this._pendingUpdates=!0);this._streamDataSupplier._loader.hasPendingDownloads()&&(this._pendingUpdates=!0);if(this._pendingUpdates!==this._lvPendingUpdates&&(this._pendingUpdates||20===++this._updateNextFrame))this._setLayerViewsUpdating(),this._lvPendingUpdates=this._pendingUpdates,this._updateNextFrame=0}},_needsIdleUpdate:function(){return this.isVisible()&&this.overlayManager&&this.overlayManager.overlaysNeedUpdate()},_idleUpdate:function(a){this.overlayManager.updateOverlay();this._updateOverlayOpacity(this._curEyePos)},
_updateClippingExtent:function(){if(!this.spatialReference)return!1;var a=[],b=null;C.extentToBoundingRect(this._view.clippingArea,a,this.spatialReference)&&(b=a);if(x.equals(b,this._clippingExtent))return!1;this._clippingExtent=b;this.notifyChange("extent");return!0},_clippingChanged:function(){this._updateClippingExtent()&&this._updateRootTiles()},_getLodBias:function(){return Math.round(this._view.qualitySettings.tiledSurface.lodBias)},_getLodBiasCorrectedScale:function(a){var b=this.tilingScheme.levels;
a=da.clamp(a-this._getLodBias(),0,b.length-1);return b[a].scale},_cancelTilemapRequests:function(a){for(var b=0;b<l.LayerClass.LAYER_CLASS_COUNT;b++){var c=a.layerInfo[b];if(c)for(var d=0;d<c.length;d++){var e=c[d];e.tilemapRequest&&(e.tilemapRequest.cancel(),e.tilemapRequest=null)}}},_removeAllTiles:function(){this._rootTiles&&(this._rootTiles.forEach(function(a){this._purgeChildTiles(a);this._purgeTile(a)}.bind(this)),this._rootTiles=null,this.notifyChange("ready"));for(var a=0;a<this._topLevelTilemapOnlyTiles.length;a++)this._cancelTilemapRequests(this._topLevelTilemapOnlyTiles[a]);
this.setVisibility(!1)},_purgeChildTiles:function(a){var b=this._postorderIterator;for(b.reset(a);!b.done;){for(var c=b.next(),d=0;4>d;d++)c.children[d]=null;c!==a&&this._purgeTile(c)}},_purgeTile:function(a){a.unload(this._renderer);this._cancelTilemapRequests(a);a.parent=null;this._renderer.releaseTileTextures(a);this._releaseTile(a)},_splitTile:function(a){var b=a.lij[0]+1,c=2*a.lij[1],d=2*a.lij[2];a.children[0]=this._createTile(b,c,d,a);a.children[1]=this._createTile(b,c,d+1,a);a.children[2]=
this._createTile(b,c+1,d,a);a.children[3]=this._createTile(b,c+1,d+1,a);a.unload(this._renderer);p.spatialReference=this.spatialReference;p.extent=a.extent;p.scale=this._getLodBiasCorrectedScale(b);u.emit(this,"scale-change",p)},_createTile:function(a,b,c,d){y(d,"_createTile sanity check");a=this._acquireTile(a,b,c,d);a.updateClippingStatus(this._clippingExtent);a.updateVisibility(this._curFrustumPlanes,this._curEyePos);a.visible&&(a.updateScreenDepth(this._viewProjectionMatrix),a.shouldSplit(this._curSplitLimits,
this._curEyePos)===k.SPLIT&&(a.pendingUpdates|=k.SPLIT,this._pendingUpdates=!0));this._loadTile(a);return a},_mergeTile:function(a){y(!a.renderData,"_mergeTile sanity check");this._loadTile(a);this._purgeChildTiles(a);p.spatialReference=this.spatialReference;p.extent=a.extent;p.scale=this._getLodBiasCorrectedScale(a.lij[0]);u.emit(this,"scale-change",p)},_loadTile:function(a){a.load(this._renderer);this.overlayManager&&this.overlayManager.hasOverlays()&&this.overlayManager.setOverlayParamsOfTile(a,
a.renderData,this._curOverlayOpacity)},_decodeLERC:function(a){var b=l.LayerClass.ELEVATION,c=a.layerInfo[b];if(c)for(var d=0;d<c.length;d++){var e=c[d];e.pendingUpdates&=~k.DECODE_LERC;if(e.rawData){var g=a.createElevationDataFromLERC(e.rawData);e.rawData=null;if(g){e.data=g;var e=[g.bounds[0],g.bounds[1],a.lij[0]],f=this._iteratorPool.acquire();for(f.reset(a);!f.done;)f.next().setLayerElevationBounds(d,e);this._iteratorPool.release(f);a.dataArrived(d,b,g);this._updateTiles(a);t.spatialReference=
this.spatialReference;t.extent=a.extent;u.emit(this,"elevation-change",t)}}}},_handleLayerViewChanges:function(a){var b=!1;a.added.forEach(function(a){var d=a.layer;r.isTiledLayerView(a)?(this._registerTiledLayer(d,a),d.get("loaded")&&(b=!0)):a.supportsDraping&&this.overlayManager&&this.overlayManager.registerLayerView(a)}.bind(this));a.removed.forEach(function(a){r.isTiledLayerView(a)?(b=!0,this._unregisterTiledLayerView(a.id)):a.supportsDraping&&this.overlayManager&&this.overlayManager.unregisterLayerView(a)}.bind(this));
(b=b||0<a.moved.filter(r.isTiledLayerView).length)&&this._updateTiledLayers()},_registerTiledLayer:function(a,b){var c=[];c.push(b.watch("suspended",function(){this._updateTiledLayers()}.bind(this)));c.push(b.layer.watch("opacity",this._updateTileTextures.bind(this)));this._basemapLayerViewHandles[b.id]=c},_unregisterTiledLayerView:function(a){var b=this._basemapLayerViewHandles[a];if(b){for(var c=0;c<b.length;c++)b[c].remove();delete this._basemapLayerViewHandles[a]}},_updateTiledLayers:function(){if(this._tilingScheme){var a=
this._view.allLayerViews,b=[[],[]],c=l.LayerClass,d=null,e=n.create(n.NEGATIVE_INFINITY),g=function(a){var g=a.layer;if(g&&a&&!a.suspended&&r.isTiledLayerView(a)){var f=g.fullExtent;if(f)if(this._tilingScheme.compatibleWith(g.tileInfo))if(n.expand(e,f),r.isElevationLayerView(a))b[c.ELEVATION].push(a);else{if(Infinity!==a.maxDataLevel&&(null===d||a.maxDataLevel>d))d=a.maxDataLevel;b[c.MAP].push(a)}else console.warn("Terrain: tiling scheme of layer "+g.id+" is incompatible with other tiled layers, will not be drawn");
else console.warn("Terrain: Map or elevation layer does not have fullExtent: "+g.id)}}.bind(this);a.forEach(g,this);for(var f=0;f<c.LAYER_CLASS_COUNT;f++){a=this._layerViews[f];g=b[f];g.reverse();var m=a.length!==g.length,k=g.length,h=Array(k),G=Array(a.length);this._layerIndexByLayerViewId[f]={};for(var q=0;q<k;q++){this._layerIndexByLayerViewId[f][g[q].id]=q;var A=a.indexOf(g[q]);h[q]=A;q!==A&&(m=!0);-1<A&&(G[A]=q)}if(m){this._layerViews[f]=g;this._topLevelTilemapOnlyTiles.forEach(function(a){a.modifyLayers(G,
h,f)});if(this._rootTiles){a=this._postorderIterator;for(a.reset(this._rootTiles);!a.done;)a.next().modifyLayers(G,h,f);for(a.reset(this._rootTiles);!a.done;)g=a.next(),g.restartAgents(f),f===c.ELEVATION&&g.updateElevationBounds();this._updateTiles(this._rootTiles)}f===c.ELEVATION&&this.tilingScheme&&(t.spatialReference=this.tilingScheme.spatialReference,t.extent=fa,u.emit(this,"elevation-change",t))}}this.tilingScheme.levels.length-1<d&&(this.tilingScheme.ensureMaxLod(d),this._viewChangeUpdate())}},
_getLayerExtentUnion:function(a){var b=this._view.allLayerViews,c=n.create(n.NEGATIVE_INFINITY);b.forEach(function(b){var e=b.layer;(b=b.fullExtentInViewSpatialReference||e.fullExtent)&&!b.spatialReference.equals(a)&&(b=H.canProject(b.spatialReference,a)?H.project(b,a):null);b&&n.expand(c,b)});return n.allFinite(c)?c:null},layerViewByIndex:function(a,b){return this._layerViews[b][a]},agentTypeByLayerIndex:function(a,b){return b===l.LayerClass.ELEVATION?aa:$},numLayers:function(a){return this._layerViews[a].length},
numTotalLayers:function(){return this._layerViews.reduce(function(a,b){return b.length+a},0)},_updateTileTextures:function(){var a=this._iteratorPool.acquire();for(a.reset(this._rootTiles);!a.done;)a.next().updateTexture();this._iteratorPool.release(a)},requestTileData:function(a,b,c){this.tilemapStats.tilesRequested++;var d=this.layerViewByIndex(b,c);if(d.layer.tileMap){var e=this.getTilemapTile(a),g=e.layerInfo[c][b];if(g.tilemapData){if(!e.tileDataAvailable(a,b,c))return this.tilemapStats.tilesNotPresent++,
this._dispatchDataEvent(a,"dataMissing",c,d,{notInTilemap:!0}),b=new D.Promise,b.reject(),b}else{var f=new D.Promise;f.actualTileRequestPromise=null;g.tilemapRequest||(g.tilemapRequest=this.requestTilemapData(e,b,c,d));g.tilemapRequest.then(function(){g.tilemapRequest=null;if(!f.isCancelled()){var b=this._layerIndexByLayerViewId[c][d.id];null!=b&&(e.tileDataAvailable(a,b,c)?(f.actualTileRequestPromise=this._requestTileData(a,b,c,d),f.actualTileRequestPromise.then(function(){f.resolve()})):(this.tilemapStats.tilesNotPresent++,
this._dispatchDataEvent(a,"dataMissing",c,d,{notInTilemap:!0}),f.reject()))}}.bind(this));return f}}return this._requestTileData(a,b,c,d)},_requestTileData:function(a,b,c,d){this.tilemapStats.tileRequestsSent++;b=d.getTileUrl(a.lij[0],a.lij[1],a.lij[2]);var e=this;c===l.LayerClass.ELEVATION?(b=this._streamDataSupplier.request(b,"binary"),b.then(function(b,f){var m=e._layerIndexByLayerViewId[c][d.id];null!=m?(m=a.layerInfo[c][m],f.url=b,m.rawData=f,a.pendingUpdates|=k.DECODE_LERC,m.pendingUpdates|=
k.DECODE_LERC,e._pendingUpdates=!0):console.warn("TerrainSurface: received data from unknown layer %d %s",c,a.lij.toString())},function(b){e.tilemapStats.tileRequestErrors++;e._dispatchDataEvent(a,"dataMissing",c,d,b)})):(b=this._streamDataSupplier.request(b,"image"),b.then(function(b,f){e._dispatchDataEvent(a,"dataArrived",c,d,f)},function(b){e.tilemapStats.tileRequestErrors++;e._dispatchDataEvent(a,"dataMissing",c,d,b)}));return b},requestTilemapData:function(a,b,c,d){var e,g=new D.Promise(function(){e.cancel()}),
f=a.lij[0]+l.TILEMAP_SIZE_EXP,m=a.lij[1]<<l.TILEMAP_SIZE_EXP,h=a.lij[2]<<l.TILEMAP_SIZE_EXP;this.tilemapStats.tilemapRequestsSent++;this.tilemapStats.tilemapRequestsPending++;var k=this,n=1<<Math.min(l.TILEMAP_SIZE_EXP,f);e=d.layer.tileMap.getTileMap(f,m,h,n,n);e.then(function(e){k.tilemapStats.tilemapRequestsPending--;var l=e.location;!0!==e.valid||!l||l.top!==m||l.left!==h||l.width!==n||l.height!==n?(console.warn("Unexpected tilemap response for %s/%d/%d/%d/%d/%d",d.id,f,m,h,n,n),k.tilemapStats.tilemapRequestErrors++):
(b=this._layerIndexByLayerViewId[c][d.id],null!=b&&(a.layerInfo[c][b].tilemapData=e));g.resolve()}.bind(this),function(){k.tilemapStats.tilemapRequestErrors++;g.resolve()});return g},getTilemapTile:function(a){var b=a.lij[0];return b>l.TILEMAP_SIZE_EXP?s.getTileNLevelsUp(a,l.TILEMAP_SIZE_EXP):this._topLevelTilemapOnlyTiles[b]},_dispatchDataEvent:function(a,b,c,d,e){d=this._layerIndexByLayerViewId[c][d.id];if(null!=d)a[b](d,c,e);else console.warn("TerrainSurface: received data from unknown layer")},
cancelRequest:function(a){var b=a.actualTileRequestPromise;void 0!==b?(null!==b&&this._streamDataSupplier.cancelRequest(b),a.cancel()):this._streamDataSupplier.cancelRequest(a)},_updateTileOverlayParams:function(){if(this._rootTiles){var a=this._iteratorPool.acquire();for(a.reset(this._rootTiles);!a.done;){var b=a.next();b.renderData&&this.overlayManager&&this.overlayManager.setOverlayParamsOfTile(b,b.renderData,this._curOverlayOpacity)}this._iteratorPool.release(a);this._renderer.setNeedsRender()}},
_updateOverlayOpacity:function(a){if(this.overlayManager&&(a=this.overlayManager.updateOpacity(a),!isNaN(a))){if(a!==this._curOverlayOpacity&&this._rootTiles){var b=this._iteratorPool.acquire();for(b.reset(this._rootTiles);!b.done;){var c=b.next();c.renderData&&c.renderData.overlayTexId&&(c.renderData.overlayOpacity=a)}this._iteratorPool.release(b)}this._curOverlayOpacity=a;this._renderer.setNeedsRender()}},getStats:function(){var a=0,b=0,c=0,d=this._iteratorPool.acquire();for(d.reset(this._rootTiles);!d.done;){var e=
d.next();a++;e.renderData&&(b++,e.visible&&c++)}this._iteratorPool.release(d);return{numNodes:a,numLeaves:b,numVisible:c}},getTile:function(a){var b=a.split("/").map(JSON.parse);if(0===b[0])return this._rootTiles.forEach(function(a){if(a.lij[1]===b[1]&&a.lij[2]===b[2])return a}),null;var c=b[1]>>b[0],d=b[2]>>b[0],e;this._rootTiles.some(function(a){return a.lij[1]===c&&a.lij[2]===d?(e=a,!0):!1});if(e){for(var g=1<<b[0]-1;e.lij[0]<b[0];){var f=b[1]&g?2:0;0<(b[2]&g)&&f++;if(!e.children[f])return console.log("Tile "+
a+" doesn't exist, smallest ancestor is "+s.tile2str(e)),null;e=e.children[f];g>>=1}y(e.lij[0]===b[0]&&e.lij[1]===b[1]&&e.lij[2]===b[2],"not the right tile?");return e}return null},setBorders:function(a){this._renderer.setBorders(a)},setDisableRendering:function(a){this._renderer.setDisableRendering(a)},_extentGetter:function(){return this._clippingExtent||this._rootExtent},_hasFixedExtent:function(){return!!this._clippingExtent},_wireframeSetter:function(a){this._renderer.setWireframe(a);return a},
_opacitySetter:function(a){this._renderer.setOpacity(a);return a},_skirtsSetter:function(a){this._renderer.setDrawSkirts(!!a);return a},_cullBackFacesSetter:function(a){this._renderer.setCullBackFaces(a);return a},_renderOrderSetter:function(a){this._renderer.setRenderOrder(a);return a},_frontMostTransparentSetter:function(a){this._renderer.setFrontMostTransparent(!!a);return a},_tileBackgroundSetter:function(a){a!==this.tileBackground&&this._renderer.updateTileBackground(a);return a}});w.checkUnsupported=
function(a,b){var c=J.checkUnsupported(a);return c?c:b?w._checkNumRootTiles(a,b):null};w._checkNumRootTiles=function(a,b){var c=a.lods,d=c[0].resolution*Math.pow(2,c[0].level),e=[d*a.rows,d*a.cols],g=[a.origin.x,a.origin.y];b=[b.xmin,b.ymin,b.xmax,b.ymax];J.computeRowColExtent(b,e,g,h);return 64<(h[2]-h[0])*(h[3]-h[1])?(c=c[0].scale*Math.pow(2,c[0].level),d=Math.max((b[3]-b[1])/a.rows,(b[2]-b[0])/a.cols)*c/d,e=Math.floor(Math.log(d)/Math.log(10)),d=Math.ceil(d/Math.pow(10,e))*Math.pow(10,e),d=Error("Scale of level 0 of the tiling scheme (1:"+
Math.floor(c).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+d.toLocaleString()+"."),d.name="terrainsurface:num-root-tiles",d):null};w.MAX_ROOT_TILES=64;return w});