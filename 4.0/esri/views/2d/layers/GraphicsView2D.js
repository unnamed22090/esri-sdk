// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("dojox/gfx dojo/dom-style ../engine/Container ../../layers/GraphicsView ./LayerView2D ../../../geometry/support/webMercatorUtils ../VectorGroup ../Vector".split(" "),function(r,s,t,u,p,k,v,n){return u.createSubclass({declaredClass:"esri.views.2d.layers.GraphicsView2D",classMetadata:{properties:{needsRedraw:{dependsOn:["gfx","mapView.stationary"]},renderer:{},view:{}}},constructor:function(){this.mapView=null},initialize:function(){var a=this.view;if(!a||!this.graphics)throw Error("view and graphics are required parameter options");
a.then(function(){this.container=new t({visible:!1});this._vectors={};this._bgVectors={};this._prevScale=null;var c=this.container.render;this.container.render=function(a){c.call(this.container,a);this.render()}.bind(this);this.container.watch("surface",this._surfaceCreateHandler.bind(this));this.watch("needsRedraw, graphics, mapView.state.version, view.suspended",this.redraw.bind(this));this.watch("renderer",this._resymbolizeGraphics.bind(this));a.isInstanceOf(p)?(this.mapView=this.view.view,this.container.visible=
a.layer.visible,a.container.addChild(this.container)):(this.mapView=this.view,this.container.visible=!0,a.stage.addChild(this.container))}.bind(this))},destroy:function(){this._colChgHandle&&(this._colChgHandle.remove(),this._colChgHandle=null);this._vectors=this._bgVectors=this.container=this.group=this.bgGroup=null},_graphicsSetter:function(a){var c=this.graphics;if(a===c)return a;c&&(this._colChgHandle.remove(),this._colChgHandle=null,this.removeAll());a&&(this.addMany(a.toArray()),this._colChgHandle=
a.on("change",function(a){this.addMany(a.added);this.remove(a.removed)}.bind(this)));return a},_needsRedrawGetter:function(){return(this.group||this.bgGroup)&&this.mapView.stationary},hitTest:function(a,c){null!=a&&"object"===typeof a&&(c=a.y,a=a.x);var e=this.mapView,b=this.view.isInstanceOf(p)?this.view.container.surface:this.container.surface,d=null,f;f=[a,c];e.containerToPage(a,c,f);b&&(e=b.style.zIndex,b.style.zIndex="10000",s.getComputedStyle(b),d=(f=(d=(d=document.elementFromPoint(f[0],f[1]))&&
d.vector)&&(d.parent===this.group||d.parent===this.bgGroup))&&d.graphic||null,b.style.zIndex=e);return d},redraw:function(){if(this.needsRedraw&&!this.view.suspended&&this.mapView.stationary){var a=this.mapView.state,c={},e=!1;a.resolution!==this.group.resolution&&(c.x=a.x,c.y=a.y,c.resolution=a.resolution,e=!0,this._prevScale!==this.mapView.scale&&(this._prevScale=this.mapView.scale,this._resizeGraphics()));a.rotation!==this.group.rotation&&(c.rotation=a.rotation,e=!0);e&&(this.group.set(c),this.bgGroup.set(c),
this.group._updateTransform(),this.bgGroup._updateTransform(),this.group.draw(),this.bgGroup.draw(),this.render())}},render:function(){if(!this.view.suspended&&this.group){var a=this.mapView.state;this.gfx.setDimensions(a.width,a.height);this.group.applyState(a);this.bgGroup.applyState(a)}},add:function(a){this.addMany([a])},addMany:function(a){if(a&&this.group){a.hasOwnProperty("length")||(a=[a]);var c,e=a.length,b,d,f=this.mapView.extent.spatialReference;for(c=0;c<e;c++)if(b=a[c],d=this.getRenderingInfo(b)){var q=
d.renderer&&d.renderer.backgroundFillSymbol,g=b.id,h=b.geometry,l=this._projectGeometry(h,f),m=this._isPolygonMarkerSymbol(d.symbol.type,h),k=d.outlineSize;null==k&&(k=d.size);this._vectors[g]=new n({graphic:b,symbol:d.symbol,color:d.color,size:d.size,opacity:d.opacity,rotationAngle:d.rotationAngle,outlineSize:k,geometry:m?h&&h.centroid:h,projectedGeometry:l&&(m?l.centroid:l)});this.group.addVector(this._vectors[g]);m&&q&&(this._bgVectors[g]=new n({graphic:b,symbol:q,outlineSize:d.outlineSize,geometry:h,
projectedGeometry:l}),this.bgGroup.addVector(this._bgVectors[g]))}this.group.draw();this.bgGroup.draw();this.render()}},remove:function(a){if(a){a.hasOwnProperty("length")||(a=[a]);var c,e=a.length,b,d;for(c=0;c<e;c++)if(b=a[c],d=this._vectors[b.id],this.group.removeVector(d),delete this._vectors[b.id],d=this._bgVectors[b.id])this.bgGroup.removeVector(d),delete this._bgVectors[b.id]}},removeAll:function(){this._clear(this.group,this._vectors);this._vectors={};this._clear(this.bgGroup,this._bgVectors);
this._bgVectors={}},_isPolygonMarkerSymbol:function(a,c){return c&&"polygon"===c.type&&("simple-marker-symbol"===a||"picture-marker-symbol"===a||"text-symbol"===a)},_clear:function(a,c){Object.getOwnPropertyNames(c).forEach(function(e){a.removeVector(c[e])}.bind(this))},_projectGeometry:function(a,c){var e=a&&a.spatialReference,b;e&&(c&&!e.equals(c)&&k.canProject(e,c))&&(b=c.isWebMercator?k.geographicToWebMercator(a):k.webMercatorToGeographic(a,!0));return b},_resymbolizeGraphics:function(){if(this.group){var a=
this._vectors,c=this.mapView.extent.spatialReference;Object.getOwnPropertyNames(a).forEach(function(e){var b=a[e],d=b.graphic,f=this.getRenderingInfo(d);if(f){var k=f.renderer&&f.renderer.backgroundFillSymbol,g=d.geometry,h=this._projectGeometry(g,c),l=this._isPolygonMarkerSymbol(f.symbol.type,g),m=f.outlineSize;null==m&&(m=f.size);b.symbol=f.symbol;b.color=f.color;b.size=f.size;b.opacity=f.opacity;b.rotationAngle=f.rotationAngle;b.outlineSize=m;b.geometry=l?g&&g.centroid:g;b.projectedGeometry=h&&
(l?h.centroid:h);b.offsets=null;b=this._bgVectors[e];l&&k?b?(b.symbol=k,b.outlineSize=f.outlineSize,b.geometry=g,b.projectedGeometry=h,b.offsets=null):(this._bgVectors[e]=new n({graphic:d,symbol:k,outlineSize:f.outlineSize,geometry:g,projectedGeometry:h}),this.bgGroup.addVector(this._bgVectors[e])):b&&(this.bgGroup.removeVector(b),delete this._bgVectors[e])}}.bind(this));this.group.draw();this.bgGroup.draw();this.render()}},_resizeGraphics:function(){if(this.group){var a=this._vectors;Object.getOwnPropertyNames(a).forEach(function(c){var e=
a[c],b=this.getRenderingInfo(e.graphic);if(b){var d=b.outlineSize;null==d&&(d=b.size);e.size=b.size;e.outlineSize=d;e.offsets=null;if(e=this._bgVectors[c])e.outlineSize=b.outlineSize,e.offsets=null}}.bind(this))}},_createVectorGroup:function(){var a=this.mapView.state;return new v({view:this.mapView,x:a.x,y:a.y,resolution:a.resolution,rotation:a.rotation,surface:this.gfx.createGroup(),layer:this.view.layer})},_surfaceCreateHandler:function(a,c,e,b){a=this.mapView.state;this.gfx=r.createSurface(this.container.surface,
a.width,a.height);this.bgGroup=this._createVectorGroup();this.group=this._createVectorGroup();this.addMany(this.graphics.toArray())}})});