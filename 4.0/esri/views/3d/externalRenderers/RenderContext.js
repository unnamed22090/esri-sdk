// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","../webgl-engine/lib/Camera","../webgl-engine/lib/gl-matrix"],function(d,e,c,a){var b=a.vec3d;return function(){return function(a){this.view=a;this.camera=new c;this.sunLight={direction:b.create(),diffuse:{color:b.create(),intensity:1},ambient:{color:b.create(),intensity:1}}}}()});