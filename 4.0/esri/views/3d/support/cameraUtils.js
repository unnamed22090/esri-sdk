// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang ../../../geometry/SpatialReference ../../../config ../../../geometry/Point ../../../geometry/support/webMercatorUtils ../../../Camera ../lib/glMatrix ./mathUtils ./earthUtils ./projectionUtils ./cameraUtilsPlanar ./cameraUtilsSpherical".split(" "),function(M,r,C,s,w,x,N,t,u,q,D,E){function v(b,a){return"global"===b.viewingMode?E[a]:D[a]}function F(b,a,c){var e=b.renderSpatialReference,d=a.computeDirection(O),d=G(b,a.eye,d,a.up,P);b=b.spatialReference||r.WGS84;q.vectorToVector(a.eye,
e,n,b)||(b=r.WGS84,q.vectorToVector(a.eye,e,n,b));return c?(c.position.x=n[0],c.position.y=n[1],c.position.z=n[2],c.position.spatialReference=b,c.heading=d.heading,c.tilt=d.tilt,c.fov=t.rad2deg(a.fov),c):new x(new s(n,b),d.heading,d.tilt,t.rad2deg(a.fov))}function H(b,a,c){var e=b.navigation.currentCamera,d=e.fovX,e=e.width/2;"global"===b.viewingMode&&null!=c&&(a*=Math.cos(t.deg2rad(c)));a/=b.renderCoordsHelper.unitInMeters;return e/(C.screenDPI*I/a)/Math.tan(d/2)}function J(b,a,c){var e=b.navigation.currentCamera;
a*=Math.tan(e.fovX/2);e=C.screenDPI*I/(e.width/2/a);"global"===b.viewingMode&&(e/=Math.cos(t.deg2rad(c)));return e*=b.renderCoordsHelper.unitInMeters}function K(b,a,c,e,d,f){var h=b.renderSpatialReference;a=y(b,e.heading,e.tilt,a,c,d);b=q.vectorToPoint(a.eye,h,b.spatialReference||r.WGS84);if(!b)return null;if(!f)return new x(b,a.heading,a.tilt,e.fov);f.position=b;f.heading=a.heading;f.tilt=a.tilt;f.fov=e.fov;return f}function G(b,a,c,e,d){return v(b,"directionToHeadingTilt")(a,c,e,d)}function y(b,
a,c,e,d,f){var h=l.create(),m=b.renderSpatialReference;if(e&&e instanceof s){var g=e;q.pointToVector(g,h,b.renderSpatialReference);null==g.z&&("global"===b.viewingMode?b._pickRay([0,0,0],h):b._pickRay([h[0],h[1]-1,h[2]],h),null!=b.basemapTerrain&&(g=b.basemapTerrain.getElevation(g),null!=g&&b.renderCoordsHelper.setAltitude(g,h)))}else e?l.set(e,h):l.set(b.navigation.currentCamera.center,h);if(!e||!(e instanceof s))e=q.vectorToPoint(h,m,b.spatialReference||r.WGS84);d=Math.max(d,b.navigation.minPoiDist);
m=c;c=d;if(g=!f||!f.noReset)var k=e,g=b.engineToScreen(b.navigation.currentCamera.center),L=b.toScreen(k),k=g.x-L.x,g=g.y-L.y,g=Math.sqrt(k*k+g*g),k=Math.max(b.width,b.height),g=g>Q*k;g?(a=0,m=b.navigation.constraints.tilt.min(c)):(m=v(b,"eyeTiltToLookAtTilt")(h,c,m),m=b.navigation.constraints.tilt.apply(m,c),m=v(b,"lookAtTiltToEyeTilt")(h,c,m));a=v(b,"eyeForCenterWithHeadingTilt")(h,d,a,m);a.center=h;if((!f||!f.noReset)&&"global"===b.viewingMode)if(h=b.renderCoordsHelper.fromRenderCoords(a.eye,A,
b.spatialReference)?b.basemapTerrain&&(b.basemapTerrain.getElevation(A)||0)>A.z-1:!1,h)return h=b.navigation.constraints.tilt.min(d),y(b,0,h,e,d,M.mixin({noReset:!0},f));return a}var l=N.vec3d,I=39.37,Q=5,n=l.create(),z=l.create(),O=l.create(),P={heading:0,tilt:0},A=new s,B=new t.Cyclical(-2.0037508342788905E7,2.0037508342788905E7);return{externalToInternal:function(b,a){var c=b.renderSpatialReference,e=v(b,"headingTiltToDirectionUp"),d=l.create();return q.pointToVector(a.position,d,c)?(c=e(d,a.heading,
a.tilt),l.add(c.direction,d),d=b.navigation.getCameraIntersectTerrain(d,c.direction,c.up),d.fov=t.deg2rad(a.fov),d):null},internalToExternal:F,scaleToDistance:H,distanceToScale:J,fromExtent:function(b,a,c,e,d){e instanceof x&&(d=e,e={});var f="global"===b.viewingMode,h=b.renderSpatialReference,m=b.spatialReference||r.WGS84,g=r.WebMercator,k=a.spatialReference||g,l,n=0;null!=a.zmax&&null!=a.zmin&&(l=(a.zmax+a.zmin)/2,n=a.zmax-a.zmin);if(f){var f=new s(a.xmin,a.ymin,k),p=new s(a.xmax,a.ymax,k),f=w.project(f,
g),p=w.project(p,g);if(null===f||null===p)return;a=new s(B.center(f.x,p.x),(p.y+f.y)/2,g);null!=l&&(a.z=l);k=u.getGreatCircleSpanAt(a,f,p);g=k.lon;k=k.lat;B.diff(f.x,p.x)>B.range/2&&(g+=u.halfEarthCircumference);g=Math.min(g,u.halfEarthCircumference);k=Math.min(k,u.halfEarthCircumference)}else w.canProject(a,m)&&(a=w.project(a,m)),g=a.xmax-a.xmin,k=a.ymax-a.ymin,a=new s({x:a.xmin+0.5*g,y:a.ymin+0.5*k,z:l,spatialReference:m});p=b.navigation.currentCamera;l=1/Math.tan(p.fovX/2);f=1/Math.tan(p.fovY/
2);p=1/Math.tan(p.fov/2);n=Math.max(0.5*g*l,0.5*k*f,0.5*n*p)/1;c=y(b,c.heading,c.tilt,a,n,e);h=q.vectorToPoint(c.eye,h,m);if(!h)return null;d||(d=new x);d.position=h;d.heading=c.heading;d.tilt=c.tilt;d.fov=b.camera.fov;return d},toExtent:function(b,a,c,e,d){var f=b.renderSpatialReference;a||(c||(c=b.navigation.currentCamera),a=F(b,c,d));if(c)d=q.vectorToPoint(c.center,f,b.spatialReference||r.WGS84),a=c.distance;else{d=b.toMap(b.screenCenter);if(!d)return null;a=u.computeCarthesianDistance(a.position,
d)}c||(c=b.navigation.currentCamera);f=Math.tan(c.fovX/2);c=Math.tan(c.fovY/2);f=1*2*a*f;c=1*2*a*c;return"global"===b.viewingMode?E.toExtent(b,d,f,c,e):D.toExtent(b,d,f,c,e)},fromCenterScale:function(b,a,c,e,d,f){c=H(b,c,a.latitude);return K(b,a,c,e,d,f)},fromCenterDistance:K,directionToHeadingTilt:G,eyeHeadingTiltForCenterPointAtDistance:y,scaleToZoom:function(b,a){var c=b.get("basemapTerrain.tilingScheme");return c?c.levelAtScale(a):void 0},zoomToScale:function(b,a){var c=b.get("basemapTerrain.tilingScheme");
return c?c.scaleAtLevel(a):void 0},computeScale:function(b,a,c){var e=b.renderSpatialReference;a||(a=b.navigation.currentCamera);var d;d=r.WGS84;a.center?(q.vectorToVector(a.center,e,z,d),d=z[1],a=a.distance):(d=a.position.latitude,q.pointToVector(a.position,n,e),q.pointToVector(c,z,e),a=l.dist(n,z));return J(b,a,d)}}});