// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["./ActionPlanar","../../mixins/ZoomMixin","../../../lib/glMatrix","../../../webgl-engine/lib/Util"],function(n,p,m,q){var r=m.vec2d,a=m.vec3d,g=a.create(),k=a.create(),f=a.create(),h=a.create(),l=a.create(),c=a.create();return n.createSubclass([p],{declaredClass:"esri.views.3d.navigation.planar.actions.ZoomPlanar",begin:function(b){this.inherited(arguments);this.pickPointInScreen(b,l)||this.pickFreePointInScreen(b,l);a.normalize(a.subtract(this.targetCamera.eye,this.targetCamera.center,h));
0>h[1]&&a.negate(h);this.updatePlane(l,h)},update:function(b){a.set(this.targetCamera.center,c);this.createPickRay(this._dragBeginPoint,this._dragBeginPoint,this.currentCamera.viewMatrix,g,k);a.subtract(k,g);q.rayPlane(g,k,this._plane,c);this.normalizeCoordinate(b,g);b=4*(this.normalizedAnchorPoint[1]-g[1]);r.set(g,this.normalizedAnchorPoint);this._applyZoom(c,b);b=this._toYDownCoord(this._dragLastPoint);this.emit("update",b[0],b[1])},_applyZoom:function(b,d){a.subtract(b,this.targetCamera.eye,f);
var e=a.length(f),c=e*(1-d);0<=d&&c<this.minPoiDist&&(c=this.minPoiDist);c=this.limitAltitude(c,b,f,e,0<=d?-1:1);1E-6>Math.abs(e-c)||(a.scale(f,d),a.add(this.targetCamera.eye,f),a.lerp(this.targetCamera.center,b,d),this.fixTargetUpVector(),this.targetAndCurrentChanged())},stepAtPoint:function(b,d,e,g){a.set(d,c);a.subtract(c,this.targetCamera.eye,f);d=a.length(f);e=d*b;if((b=1>=b)&&e<this.minPoiDist)e=this.minPoiDist;e=this.limitAltitude(e,c,f,d,b?-1:1);b=e/d;1E-6<=Math.abs(d-e)&&(a.scale(f,e/d),
a.subtract(c,f,this.targetCamera.eye),a.lerp(this.targetCamera.center,c,1-b),this.constrainTargetEyeByElevation(),this.fixTargetUpVector(),this.targetAnimatedChanged())}})});