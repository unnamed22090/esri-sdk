// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/_base/lang ./SpatialReference ./Geometry ./Point ./Extent ./support/zmUtils".split(" "),function(z,k,A,B,l,C,g){var y=z(B,{declaredClass:"esri.geometry.Multipoint",classMetadata:{properties:{cache:{dependsOn:["points","hasZ","hasM"]},extent:{dependsOn:["cache"]}}},getDefaults:function(a){return{points:[]}},normalizeCtorArgs:function(a,b){var c=null,e=void 0,f=void 0,d=null;a&&!Array.isArray(a)?(c=a.points?a.points:null,b=b||(c?a.spatialReference:a),e=a.hasZ,f=a.hasM):
c=a;c=c||[];b=b||A.WGS84;if(d=c[0])void 0===e&&void 0===f?(e=2<d.length,f=!1):void 0===e?e=3<d.length:void 0===f&&(f=3<d.length);return{points:c,spatialReference:b,hasZ:e,hasM:f}},type:"multipoint",_extentGetter:function(a){function b(a){return function(b,c){return null==b?c:null==c?b:a(b,c)}}if(!this.points.length)return null;a=a||new C;var c=this.points,e=this.hasZ,f=this.hasM,d=c[0],m=b(Math.min),n=b(Math.max),g=p=d[0],s=q=d[1],t,u,p,q,v,w,h,x,r,k,l=e?3:2;r=0;for(k=c.length;r<k;r++)d=c[r],h=d[0],
x=d[1],g=m(g,h),s=m(s,x),p=n(p,h),q=n(q,x),e&&2<d.length&&(h=d[2],t=m(t,h),v=n(v,h)),f&&d.length>l&&(d=d[l],u=m(u,d),w=n(w,d));a.xmin=g;a.ymin=s;a.xmax=p;a.ymax=q;a.spatialReference=this.spatialReference;e?(a.zmin=t,a.zmax=v):(a.zmin=null,a.zmax=null);f?(a.mmin=u,a.mmax=w):(a.mmin=null,a.mmax=null);return a},points:null,addPoint:function(a){this.clearCache();g.updateSupportFromPoint(this,a);Array.isArray(a)?this.points.push(a):this.points.push(a.toArray());return this},clone:function(){var a={points:k.clone(this.points),
spatialReference:this.spatialReference};this.hasZ&&(a.hasZ=!0);this.hasM&&(a.hasM=!0);return new y(a)},getPoint:function(a){if(this._validateInputs(a)){a=this.points[a];var b,c,e=2;this.hasZ&&(b=a[2],e=3);this.hasM&&(c=a[e]);return new l({x:a[0],y:a[1],z:b,m:c,spatialReference:this.spatialReference})}},removePoint:function(a){if(this._validateInputs(a))return this.clearCache(),new l(this.points.splice(a,1)[0],this.spatialReference)},setPoint:function(a,b){if(this._validateInputs(a))return this.clearCache(),
g.updateSupportFromPoint(b),this.points[a]=b.toArray(),this},toJSON:function(){var a=this.spatialReference,a={points:k.clone(this.points),spatialReference:a&&a.toJSON()};this.hasZ&&(a.hasZ=!0);this.hasM&&(a.hasM=!0);return a},_pointsToArrays:function(a){for(var b=0;b<a.points.length;b++){var c=a.points[b];g.updateSupportFromPoint(a,c,!0);Array.isArray(c)||(a.spatialReference||(a.spatialReference=c.spatialReference),a.points[b]=c.toArray())}return a},_validateInputs:function(a){return null!=a&&0<=
a&&a<this.points.length}});return y});