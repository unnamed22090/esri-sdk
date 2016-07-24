// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("../../core/declare dojo/_base/lang dojox/gfx dojox/gfx/matrix ./math/common ./math/mat2d ./math/vec2 ./Projector ../../geometry/Polygon ../../symbols/SimpleMarkerSymbol ../../symbols/support/gfxUtils ../../core/screenUtils ../../core/Accessoire".split(" "),function(y,w,z,t,A,r,v,B,C,s,u,q,D){var E=0,x=-1!==z.renderer.toLowerCase().indexOf("svg"),F={"picture-marker-symbol":"image","picture-fill-symbol":"path","simple-fill-symbol":"path","simple-line-symbol":"path","cartographic-line-symbol":"path",
"text-symbol":"text"},G={square:1,cross:1,x:1,diamond:1,target:1};return y(D,{declaredClass:"esri.views.2d.VectorGroup",constructor:function(a){this.id="vecgp"+E++;this._transform=r.create();this._projector=new B;this.vectors=[];this.adding=[];this.removing=[];this.updating=[]},applyState:function(a){if(this.transform){var c=r.invert(this._transform,this.transform);r.multiply(c,a.transformNoRotation,c);this.surface.setTransform({xx:c[0],yx:c[1],xy:c[2],yy:c[3],dx:c[4],dy:c[5]})}},requestVectorDraw:function(a){},
addVector:function(a){return this.addVectorAt(a,this.vectors.length)},addVectorAt:function(a,c){c=Math.min(this.vectors.length,c);this.vectors.splice(c,0,a);a.set({parent:this,view:this.view});return a},removeVector:function(a){if(!this.vectors)return a;var c=this.vectors.indexOf(a);-1<c&&(a=this.vectors.splice(c,1)[0],a.set({parent:null,view:null}),this._removeShape(a));return a},draw:function(){this.transform||this._updateTransform();this.surface.openBatch();var a,c,b;c=0;for(b=this.vectors.length;c<
b;c++)(a=this.vectors[c])&&this.drawVector(a);this.surface.closeBatch()},drawVector:function(a,c){var b=a.extent,d=a.shape,f,h,g,e=a.geometry,k=a.projectedGeometry;if(a.graphic.visible&&b&&(f=this._intersects(this._map,b,e._originOnly))&&(h=a.symbol)){if(a.resolution!==this.resolution||a.rotation!==this.rotation||!a.offsets||a.offsets.join(",")!==f.join(",")?a.offsets=f:g=!0,!d||c||!g)b=e.type,a.resolution=this.resolution,a.rotation=this.rotation,"point"===b?(this._isInvalidShape(h,d)&&this._removeShape(a),
d=a.shape=this._drawPoint(this.surface,k||e,h,a,f),this._stylePoint(a,h)):"multipoint"===b?(d=a.shape=this._drawMarkers(this.surface,k||e,h,a,f),this._styleMarkers(a,h)):h&&(this._isInvalidShape(h,d)&&this._removeShape(a,!1),d=a.shape=this._drawShape(this.surface,k||e,a,f),this._styleShape(a,h)),d.getNode().vector=a}else d&&this._removeShape(a)},_intersects:function(a,c,b){return[0]},_isInvalidShape:function(a,c){var b=c&&c.shape&&c.shape.type,d=a&&a.type,f=a&&a.style;d&&(f=F[d]||f);G[f]&&(f="path");
return!(!b||!(f&&b!==f))},_removeShape:function(a,c){var b=a.shape,d=b&&b.getNode();b&&(b.removeShape(),b.destroy());a.shape=a.offsets=null;!1!==c&&this._removeBgShape(a);d&&(d.e_graphic=null)},_removeBgShape:function(a){var c=a.bgShape,b=c&&c.getNode();c&&(c.removeShape(),c.destroy());a.bgShape=null;b&&(b.e_graphic=null)},_drawPoint:function(a,c,b,d,f,h){var g=b.type;c=v.fromValues(c.x,c.y);var e=v.transformMat2d(c,c,this.transform);c=Math.round(e[0]);var k=Math.round(e[1]),n=null!=h?d.shape&&d.shape.children[h]:
d.shape,m;h=[];var p=d.rotationAngle,l;if(d=d.size)d=isFinite(d[0])&&d[0],l=!!d;d=l?q.pt2px(d):null;e={x:e[0],y:e[1]};if(null==p){var r=A.toRadian(360-this.view.rotation);h.push(t.rotateAt(r,e))}p&&h.push(t.rotategAt(p,e));p=q.pt2px(b.xoffset);r=q.pt2px(b.yoffset);(0!==p||0!==r)&&h.push(t.translate(p,-r));0!==b.angle&&h.push(t.rotategAt(b.angle,e));if("simple-marker-symbol"===g)switch(m=b.style,g=Math.round,d=l?d:q.pt2px(b.size),m){case s.STYLE_SQUARE:case s.STYLE_CROSS:case s.STYLE_X:case s.STYLE_DIAMOND:b=
isNaN(d)?16:d/2;m=this._drawPath(a,n,this._smsToPath(s,m,c,k,g(c-b),g(c+b),g(k-b),g(k+b)));break;case s.STYLE_TARGET:l=q.pt2px(b._targetWidth)/2;e=q.pt2px(b._targetHeight)/2;m=this._drawPath(a,n,this._smsToPath(s,m,c,k,g(c-l),g(c+l),g(k-e),g(k+e),q.pt2px(b._spikeSize)));break;case s.STYLE_PATH:m=this._drawPath(a,n,b.path,!0);b=m.getBoundingBox();a=this._getScaleMatrix(b,d);(1!==a.xx||1!==a.yy)&&h.push(t.scaleAt(a.xx,a.yy,e));h.push(t.translate(-(b.x+b.width/2)+c,-(b.y+b.height/2)+k));break;default:b=
isNaN(d)?16:d/2,m=this._drawCircle(a,n,{cx:c,cy:k,r:b})}else if("shield-label-symbol"===g)e=q.pt2px(b.width),l=q.pt2px(b.height),m=a.createGroup(),n=a.createImage({x:c-e/2,y:k-l/2,width:e,height:l,src:b.url}),m.add(n),null!=b.font&&(k+=0.2*q.pt2px(b.getHeight()),a=a.createText({type:"text",text:b.text,x:c,y:k,align:"middle",decoration:b.decoration,rotated:b.rotated,kerning:b.kerning}),l=b.font.clone(),l.size=q.pt2px(l.size),a.setFont(l),a.setFill(b.color),m.add(a));else if("picture-marker-symbol"===
g)e=l?d:q.pt2px(b.width),l=l?d:q.pt2px(b.height),m=this._drawImage(a,n,{x:c-e/2,y:k-l/2,width:e,height:l,src:b.url});else if("text-symbol"===g){if(l=b.font)l=l.clone(),l.size=null!=d?d:q.pt2px(l.size);m=this._drawText(a,n,{type:"text",text:b.text,x:c,y:k,align:u.getSVGAlign(b),decoration:b.decoration||l&&l.decoration,rotated:b.rotated,kerning:b.kerning});l&&m.setFont(l);x&&(a=m.getNode(),c=u.getSVGBaseline(b),b=u.getSVGBaselineShift(b),a&&(a.setAttribute("dominant-baseline",c),b&&a.setAttribute("baseline-shift",
b)))}m.setTransform(t.multiply(h));m._wrapOffsets=f;return m},_getScaleMatrix:function(a,c){var b=a.width/a.height,d=1,f=1;isNaN(c)||(1<b?(d=c/a.width,f=c/b/a.height):(f=c/a.height,d=c*b/a.width));return{xx:d,yy:f}},_drawMarkers:function(a,c,b,d,f){var h=c.points;a=d.shape||a.createGroup();var g,e,k=h.length,n=[],m=0,p,l=f?f.length:0;a.children[0]&&this._isInvalidShape(b,a.children[0])&&a.clear();for(e=0;e<k;e++){g=h[e];for(p=0;p<l;p++)n[0]=f[p],a.add(this._drawPoint(a,{x:g[0],y:g[1],spatialReference:c.spatialReference},
b,d,n,m++))}c=a.children.length;if(k*f.length<c)for(e=c-1;e>=k*f.length;e--)a.children[e].removeShape();return a},_drawShape:function(a,c,b,d){var f=c.type;b=b.shape;var h=this._projector,g=[],e,k;"extent"===f&&(c=C.fromExtent(c),f=c.type);if("polyline"===f||"polygon"===f){e=0;for(k=d.length;e<k;e++)g=g.concat(h.toScreenPath(c,d[e]));b=this._drawPath(a,b,g);this._rendererLimits&&("polyline"===f?this._clipPolyline(b,c):this._clipPolygon(b,c))}return b},_drawRect:function(a,c,b){return c?c.setShape(b):
a.createRect(b)},_drawImage:function(a,c,b){return c?c.setShape(b):a.createImage(b)},_drawCircle:function(a,c,b){return c?c.setShape(b):a.createCircle(b)},_drawPath:function(a,c,b,d){b=d?b:b.join(" ");return c?c.setShape(b):a.createPath(b)},_drawText:function(a,c,b){return c?c.setShape(b):a.createText(b)},_smsToPath:function(a,c,b,d,f,h,g,e,k){switch(c){case a.STYLE_SQUARE:return["M",f+","+g,h+","+g,h+","+e,f+","+e,"Z"];case a.STYLE_CROSS:return["M",b+","+g,b+","+e,"M",f+","+d,h+","+d];case a.STYLE_X:return["M",
f+","+g,h+","+e,"M",f+","+e,h+","+g];case a.STYLE_DIAMOND:return["M",b+","+g,h+","+d,b+","+e,f+","+d,"Z"];case a.STYLE_TARGET:return["M",f+","+g,h+","+g,h+","+e,f+","+e,f+","+g,"M",f-k+","+d,f+","+d,"M",b+","+(g-k),b+","+g,"M",h+k+","+d,h+","+d,"M",b+","+(e+k),b+","+e]}},_stylePoint:function(a,c,b){var d=c.type,f=c.style;b=null!=b?a.shape&&a.shape.children[b]:a.shape;if(!("shield-label-symbol"===d||"picture-marker-symbol"===d)){var h=u.getStroke(c);c=u.getFill(c);var f=f===s.STYLE_X||f===s.STYLE_CROSS,
g=h&&h.color,e=a.color||(f?g:c);a=a.opacity;e&&null!=a&&(e=this._applyOpacity(e,a));e&&(f?e!==g&&(h=h?w.mixin({},h):{},h.color=e):e!==c&&(c=e));"text-symbol"===d?b.setFill(c):"simple-marker-symbol"===d&&b.setFill(c).setStroke(h)}},_styleMarkers:function(a,c){var b,d=a.shape.children.length;for(b=0;b<d;b++)this._stylePoint(a,c,b)},_styleShape:function(a,c){var b=u.getStroke(c),d=u.getFill(c),f=c.type,h=a.shape,g=a.outlineSize,e=-1!==f.indexOf("line-symbol"),k=e?"none"!==c.style:c.outline&&"none"!==
c.outline.style,n,m,p;g&&Array.isArray(g)&&(g=isFinite(g[0])&&g[0]);g=null!=g?q.pt2px(g):null;if((a.color||null!=a.opacity)&&"picture-fill-symbol"!==f)f=a.color,n=a.opacity,e?(m=f||b&&b.color)&&null!=n&&(m=this._applyOpacity(m,n)):d&&d.toCss&&(p=f||d)&&null!=n&&(p=this._applyOpacity(p,n));h.setStroke(!k||null==g&&!m?b:w.mixin({},b,null!=g?{width:g}:null,m&&{color:m})).setFill(p||d);x&&h.rawNode.setAttribute("vector-effect","non-scaling-stroke")},_applyOpacity:function(a,c){null!=c&&(a=a.clone(),a.a=
c);return a},_updateTransform:function(){var a=this.transform=this.transform||r.create(),c=this.resolution,b=v.fromValues(0.5*this.view.width,0.5*this.view.height),d=v.fromValues(1/c,-1/c),f=v.fromValues(-this.x,-this.y);r.identity(a);r.translate(a,a,b);r.scale(a,a,d);r.translate(a,a,f);a[4]=Math.round(a[4]);a[5]=Math.round(a[5]);this._projector.set({resolution:c,transform:a})}})});