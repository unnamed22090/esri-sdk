// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("../../../../core/declare ../../../../core/screenUtils ./Graphics3DSymbolLayer ./Graphics3DGraphicLayer ./Graphics3DDrapedGraphicLayer ./ElevationAligners ./Graphics3DSymbolCommonCode ./lineUtils ../../../../geometry/Polygon ../../../../Color ../../lib/glMatrix ../../support/aaBoundingBox ../../webgl-engine/Stage ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/ColorMaterial ../../webgl-engine/lib/Util ./earcut/earcut".split(" "),
function(u,E,F,G,H,v,l,q,I,J,x,r,t,K,y,z,A,L,w,B){var s=w.VertexAttrConstants;w=x.vec3d;var p=x.mat4d;u=u([F],{_prepareResources:function(){this._prepareFillResources();this._prepareOutlineResources();this.resolve()},_prepareFillResources:function(){var a=this._getStageIdHint(),e=this._getMaterialOpacityAndColor(),e={color:e,transparent:1>e[3]||this._isPropertyDriven("opacity"),polygonOffset:!1,vertexColors:!0};this._material=new L(e,a+"_colormat");this._context.stage.add(t.ModelContentType.MATERIAL,
this._material)},_prepareOutlineResources:function(){var a=this.symbol.outline;if(this._hasOutline=!(!a||!a.size||!a.color))a={idHint:this._getStageIdHint()+"_outline",color:this._getOutlineColor(),width:E.pt2px(this.symbol.outline.size)},this._outlineMaterial=2<a.width?q.createRibbonMaterial(a):q.createNativeMaterial(a),this._context.stage.add(t.ModelContentType.MATERIAL,this._outlineMaterial)},destroy:function(){this.isFulfilled()||this.reject();this._material&&(this._context.stage.remove(t.ModelContentType.MATERIAL,
this._material.getId()),this._material=null);this._outlineMaterial&&(this._context.stage.remove(t.ModelContentType.MATERIAL,this._outlineMaterial.getId()),this._outlineMaterial=null)},createGraphics3DGraphic:function(a,e){var k=a.geometry;if("polyline"!==k.type&&"polygon"!==k.type&&"extent"!==k.type)return this._logWarning("unsupported geometry type for fill symbol: "+k.type),null;var k="graphic"+a.id,h=this._getVertexOpacityAndColor(e,Uint8Array,255),b=this._getGraphicElevationInfo(a);return b.mode===
l.ELEV_MODES.ON_THE_GROUND?this._createAsOverlay(a,h,b,k):this._createAs3DShape(a,h,b,k,a.id)},layerPropertyChanged:function(a,e,k){if("opacity"===a)return e=this._material.getColor(),e[3]=this._getMaterialOpacity(),this._material.setColor(e),this._material.setTransparent(1>e[3]),!0;if("elevationInfo"===a){a=this._elevationInfo.mode;this._updateElevationInfo();var h=this._elevationInfo.mode;if(null==a||null==h)return!1;var b=l.ELEV_MODES;if(a===b.ON_THE_GROUND&&h===b.ON_THE_GROUND)return!0;if(a!==
h&&(a===b.ON_THE_GROUND||h===b.ON_THE_GROUND))return!1;a=h===b.RELATIVE_TO_GROUND?v.perVertexElevationAligner:null;var h=this._context.elevationProvider,b=this._context.renderCoordsHelper,d;for(d in e){var f=e[d],g=f._graphics[k];g&&(f=f.graphic,g.elevationAligner=a,g.elevationInfo.set(this._getGraphicElevationInfo(f)),v.perVertexElevationAligner(g,h,b))}return!0}return!1},setDrawOrder:function(a,e,k){this._material&&(this._material.setRenderPriority(a+e/2),k[this._material.getId()]=!0);this._outlineMaterial&&
(this._outlineMaterial.setRenderPriority(a),k[this._outlineMaterial.getId()]=!0)},_createAs3DShape:function(a,e,k,h,b){var d=this._getPolyGeometry(a),f=d.hasZ;a=!1;var g;null!=d.rings?(a=!0,g=d.rings):g=d.paths;if(0===g.length)return this._logWarning("no paths found for line symbol"),null;g=this._getOutlineGeometry(d,g);d=l.getGeometryVertexData3D(g,f,d.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,k);c.idHint=h;c.color=e;c.isRings=a;c.data=d;var C;this._hasOutline&&
(C=new d.vertexData.constructor(d.vertexData));c.outNum=0;c.outGeometries=[];c.outTransforms=[];c.outMaterials=[];this._createAs3DShapeFill(c);c.data.vertexData=C;this._createAs3DShapeOutline(c);if(0===c.outNum)return null;e=new K({geometries:c.outGeometries,materials:c.outMaterials,transformations:c.outTransforms,castShadow:!1,metadata:{layerId:this._context.layer.id,graphicId:b},idHint:h});h=null;k.mode===l.ELEV_MODES.RELATIVE_TO_GROUND&&(h=v.perVertexElevationAligner);return new G(this,e,c.outGeometries,
null,null,h,k)},_createAs3DShapeFill:function(a){for(var e=a.data.geometryData.polygons,k=a.data.eleVertexData,h=a.data.vertexData,b=0;b<e.length;++b){var d=e[b],f=d.count,g=d.index;if(this._context.clippingExtent&&(l.computeBoundingBox(k,g,f,m),l.boundingBoxClipped(m,this._context.clippingExtent)))continue;var c=new Float64Array(k.buffer,3*g*k.BYTES_PER_ELEMENT,3*f),M=new Float64Array(h.buffer,3*g*h.BYTES_PER_ELEMENT,3*f),d=d.holeIndices.map(function(a){return a-g}),d=B(c,d,3);0!==d.length&&(l.chooseOrigin(h,
g,f,n),l.subtractCoordinates(h,g,f,n),f=this._createFillGeometry(d,0,M,c,a.color,!1),f=new y(f,a.idHint),f.singleUse=!0,c=p.identity(),p.translate(c,n,c),a.outGeometries.push(f),a.outMaterials.push([this._material]),a.outTransforms.push(c),a.outNum++)}},_createAs3DShapeOutline:function(a){if(this._hasOutline)for(var e=a.data.geometryData.outlines,k=a.data.eleVertexData,h=a.data.vertexData,b=0;b<e.length;++b){var d=e[b],f=d.index,g=d.count;if(this._context.clippingExtent&&(l.computeBoundingBox(k,f,
g,m),l.boundingBoxClipped(m,this._context.clippingExtent)))continue;l.chooseOrigin(h,f,g,n);l.subtractCoordinates(h,f,g,n);d=new Float64Array(k.buffer,3*f*k.BYTES_PER_ELEMENT,3*g);f=new Float64Array(h.buffer,3*f*h.BYTES_PER_ELEMENT,3*g);f=q.createPolylineGeometry(f,d,a.isRings,D,0,!1);f=new y(f,a.idHint+"outline"+b);f.singleUse=!0;d=p.identity();p.translate(d,n,d);a.outGeometries.push(f);a.outMaterials.push([this._outlineMaterial]);a.outTransforms.push(d);a.outNum++}},_createAsOverlay:function(a,
e,k,h){k=this._getPolyGeometry(a);a=!1;var b;null!=k.rings?(a=!0,b=k.rings):b=k.paths;b=this._getOutlineGeometry(k,b);if(0===b.length)return null;this._material.setRenderPriority(this._symbolLayerOrder+this._symbolLayerOrderDelta/2);this._hasOutline&&this._outlineMaterial.setRenderPriority(this._symbolLayerOrder);k=l.getGeometryVertexDataDraped(b,k.spatialReference,this._context.overlaySR);c.idHint=h;c.color=e;c.isRings=a;c.data=k;var d;this._hasOutline&&(d=new k.vertexData.constructor(k.vertexData));
c.outNum=0;c.outGeometries=[];c.outBoundingBox=r.create(r.NEGATIVE_INFINITY);this._createAsOverlayFill(c);c.data.vertexData=d;this._createAsOverlayOutline(c);return 0<c.outNum?new H(this,c.outGeometries,null,null,c.outBoundingBox):null},_createAsOverlayFill:function(a){for(var e=a.data.vertexData,k=a.data.geometryData.polygons,h=0;h<k.length;++h){var b=k[h],d=b.count,f=b.index,g=new Float64Array(e.buffer,3*f*e.BYTES_PER_ELEMENT,3*d),b=b.holeIndices.map(function(a){return a-f}),g=B(g,b,3);if(0!==g.length&&
(l.computeBoundingBox(e,f,d,m),!l.boundingBoxClipped(m,this._context.clippingExtent))){r.expand(a.outBoundingBox,m);l.chooseOrigin(e,f,d,n);l.subtractCoordinates(e,f,d,n);l.setZ(e,f,d,this._getDrapedZ());d=p.identity();p.translate(d,n,d);g=this._createFillGeometry(g,f,e,null,a.color,!0);b=new A(g);b.material=this._material;var c=m;b.center=[0.5*(c[0]+c[3]),0.5*(c[1]+c[4]),0];b.bsRadius=0.5*Math.sqrt((c[3]-c[0])*(c[3]-c[0])+(c[4]-c[1])*(c[4]-c[1]));b.transformation=d;b.name=a.idHint;b.uniqueName=a.idHint+
"#"+g.id;a.outGeometries.push(b);a.outNum++}}},_createAsOverlayOutline:function(a){if(this._hasOutline)for(var e=a.data.vertexData,c=a.data.geometryData.outlines,h=0;h<c.length;++h){var b=c[h],d=b.index,b=b.count;l.computeBoundingBox(e,d,b,m);if(!l.boundingBoxClipped(m,this._context.clippingExtent)){r.expand(a.outBoundingBox,m);l.chooseOrigin(e,d,b,n);l.subtractCoordinates(e,d,b,n);l.setZ(e,d,b,this._getDrapedZ());b=new Float64Array(e.buffer,3*d*e.BYTES_PER_ELEMENT,3*b);d=p.identity();p.translate(d,
n,d);var b=q.createPolylineGeometry(b,null,a.isRings,D,0,!0),f=new A(b);f.material=this._outlineMaterial;var g=m;f.center=[0.5*(g[0]+g[3]),0.5*(g[1]+g[4]),0];f.bsRadius=0.5*Math.sqrt((g[3]-g[0])*(g[3]-g[0])+(g[4]-g[1])*(g[4]-g[1]));f.transformation=d;f.name=a.idHint+"outline";f.uniqueName=a.idHint+"outline#"+b.id;a.outGeometries.push(f);a.outNum++}}},_getOutlineGeometry:function(a,e){return a._outlineSegments?q.createOutlineGeometryFromSegments(e,a._outlineSegments):e},_getOutlineColor:function(){var a=
this._getLayerOpacity(),e=this.symbol.outline.color,a=a*e.a;return this._mixinColorAndOpacity(J.toUnitRGB(e),a)},_getPolyGeometry:function(a){a=a.geometry;"extent"===a.type&&(a=I.fromExtent(a));return a},_createFillGeometry:function(a,e,c,h,b,d){for(var f=a.length,g=new Uint32Array(f),l=new Uint32Array(f),m=0;m<f;m++)g[m]=a[m]+e,l[m]=0;e={};a={};e[s.POSITION]=g;e[s.COLOR]=l;a[s.POSITION]={size:3,data:c};a[s.COLOR]={size:4,data:b};h&&(a.mapPos={size:3,data:h},e.mapPos=g);c=[{type:"triangle",indices:e,
positionKey:s.POSITION}];return d?{faces:c[0],vertexAttr:a,id:z.getNewId().toString()}:new z(c,a)}});var m=r.create(),n=w.create(),D=new Float32Array([255,255,255,255]),c={idHint:null,color:null,isRings:!1,data:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null};return u});