// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","./gl-matrix"],function(q,r,a){var e=a.vec3d,c=a.mat4d;return function(){function a(f,b,c,d,g,h,k,l,m,n,p){this.data=f;this.boundingInfo=b;this.material=c;this.origin=null;this.center=e.create();this.bsRadius=0;this.transformation=null;d&&this.updateTransformation(d,g);this.castShadow=h;this.singleUse=k;this.name=l;this.uniqueName=m;this.idx=n;this.canBeMerged=!0;this.componentIdx=p;this.instanceParameters=this.displayedIndexRange=void 0}a.prototype.updateTransformation=
function(a,b){b=b||c.maxScale(a);this.transformation=a;c.multiplyVec3(a,this.boundingInfo.getCenter(),this.center);this.bsRadius=this.boundingInfo.getBSRadius()*b};return a}()});