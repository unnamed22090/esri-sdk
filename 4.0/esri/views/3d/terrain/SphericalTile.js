// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("./TileBase ./TileGeometryFactory ./TerrainConst ../support/ObjectPool ../support/mathUtils ../support/earthUtils ../lib/glMatrix".split(" "),function(k,m,p,q,n,f,r){var g=r.vec3d,h=f.earthRadius;g.create();var l=function(a,d,c,b){c=h+c;var e=Math.cos(a);b[0]=Math.cos(d)*e*c;b[1]=Math.sin(d)*e*c;b[2]=Math.sin(a)*c};f=function(a,d,c,b){k.call(this);this.tileUp=g.create();this.obb=Array(8);this._isWebMercator=!1;for(var e=0;8>e;e++)this.obb[e]=g.create();void 0!==a&&this.init(a,d,c,b)};f.prototype=
new k;f.prototype.constructor=f;f.prototype.init=function(a,d,c,b){k.prototype.init.call(this,a,d,c,b);this._isWebMercator=b.spatialReference.isWebMercator;d=a[0];b.getExtent(d,a[1],a[2],this.extent,this.extentWGS84Rad);a=this.extentWGS84Rad[0];var e=this.extentWGS84Rad[1];b=this.extentWGS84Rad[2];var f=this.extentWGS84Rad[3];c=n.lerp(e,f,0.5);var m=n.lerp(a,b,0.5);d=0===d?0:Math.min(Math.abs(e),Math.abs(f));this.edgeLen=(b-a)*Math.cos(d)*h;l(c,m,0,this.centerAtSeaLevel);g.set(this.centerAtSeaLevel,
this.tileUp);g.normalize(this.tileUp);this._updateOBB();this.updateRadiusAndCenter()};f.prototype.isVisible=function(a,d){if(!this.intersectsClippingArea)return!1;if(9<this.lij[0])for(var c=this.obb,b=0;6>b;b++){for(var e=0;8>e&&!(0>a[b][0]*c[e][0]+a[b][1]*c[e][1]+a[b][2]*c[e][2]+a[b][3]);e++);if(8===e)return!1}else if(c=this.radius,b=this.center,a[0][0]*b[0]+a[0][1]*b[1]+a[0][2]*b[2]+a[0][3]>c||a[1][0]*b[0]+a[1][1]*b[1]+a[1][2]*b[2]+a[1][3]>c||a[2][0]*b[0]+a[2][1]*b[1]+a[2][2]*b[2]+a[2][3]>c||a[3][0]*
b[0]+a[3][1]*b[1]+a[3][2]*b[2]+a[3][3]>c||a[4][0]*b[0]+a[4][1]*b[1]+a[4][2]*b[2]+a[4][3]>c||a[5][0]*b[0]+a[5][1]*b[1]+a[5][2]*b[2]+a[5][3]>c)return!1;return!0};f.prototype.updateElevationBounds=function(){k.prototype.updateElevationBounds.call(this);this._updateOBB()};f.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])g.set3(0,0,0,this.center),this.radius=h+this.elevationBounds[1];else{k.prototype.updateRadiusAndCenter.call(this);var a=Math.max(g.dist2(this.center,this.obb[0]),g.dist2(this.center,
this.obb[1]));this.radius=Math.sqrt(a)}};f.prototype._numSubdivisionsAtLevel=[128,64,32,16,16,8,8,4];f.prototype.createGeometry=function(a,d,c){var b=this._isPole(this.lij[1],this.lij[0]);a.needsUpdate=!1;return m.createSphericalGlobeTile(a.numVertsPerRow,this.extent,this.extentWGS84Rad,this._isWebMercator,a.samplerData,d,b,c)};f.prototype._updateOBB=function(){var a=this.extentWGS84Rad,d=this.obb,c;for(c=0;2>c;c++){var b=this.elevationBounds[c],e=4*c;l(a[1],a[0],b,d[e++]);l(a[3],a[0],b,d[e++]);l(a[3],
a[2],b,d[e++]);l(a[1],a[2],b,d[e++])}this._isWebMercator&&(a=this._isPole(this.lij[1],this.lij[0]),2===a?(g.set3(0,0,h,d[1]),g.set3(0,0,h,d[2]),g.set3(0,0,h,d[5]),g.set3(0,0,h,d[6])):1===a&&(g.set3(0,0,-h,d[0]),g.set3(0,0,-h,d[3]),g.set3(0,0,-h,d[4]),g.set3(0,0,-h,d[7])))};f.prototype._isPole=function(a,d){var c=0;a===(1<<d)-1&&(c+=1);0===a&&(c+=2);return c};f.prototype.elevationStartsAtLevel=p.Spherical.ELEVATION_STARTS_AT_LEVEL;q.on(f,400);return f});