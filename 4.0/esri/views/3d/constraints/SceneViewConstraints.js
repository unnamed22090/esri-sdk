// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("../../../core/declare ../../../core/Accessoire ./SceneViewAltitudeConstraint ./SceneViewClipDistanceConstraint ./SceneViewTiltConstraint ./SceneViewCollisionConstraint".split(" "),function(c,d,e,f,g,h){return c([d],{declaredClass:"esri.views.3d.constraints.SceneViewConstraints",classMetadata:{properties:{tilt:{type:g},altitude:{type:e},clipDistance:{type:f},collision:{type:h}}},getDefaults:function(a){var b={};a.tilt||(b.tilt={});a.altitude||(b.altitude={});a.clipDistance||(b.clipDistance=
{});a.collision||(b.collision={});return b},scale:function(a){this.tilt.scale(a);this.altitude.scale(a);this.clipDistance.scale(a)}})});