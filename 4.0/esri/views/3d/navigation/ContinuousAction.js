// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../../core/Accessoire","../lib/glMatrix"],function(d,e){var c=e.vec3d;return d.createSubclass({classMetadata:{properties:{active:{getter:function(){return 0!==this.velocity},dependsOn:["velocity"],readOnly:!0}}},constructor:function(){this.direction=c.create();this.status=this.timer=this.velocity=0},stop:function(){this.status=this.velocity=this.timer=0;c.set3(0,0,0,this.direction)},step:function(a){var b;a*=0.0010;0<this.timer?(a=Math.min(a,this.timer),b=this.velocity*a*(1-a/(2*this.timer)),
this.velocity*=1-a/this.timer,this.timer-=a):b=this.velocity*a;return b}})});