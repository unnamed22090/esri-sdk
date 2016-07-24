// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/sniff"],function(f,g,d){var e={low:{sceneLayer:{lodFactor:0.2},tiledSurface:{lodBias:-1},antialiasingEnabled:!1},high:{sceneLayer:{lodFactor:1},tiledSurface:{lodBias:0},antialiasingEnabled:!0}};return function(){function a(){}a.isValidProfile=function(a){return a in e};a.getDefaultProfile=function(){return d("trident")||d("safari")?"low":"high"};a.apply=function(a,b){var c=e[a];b.qualitySettings.sceneLayer.lodFactor=c.sceneLayer.lodFactor;b.qualitySettings.tiledSurface.lodBias=
c.tiledSurface.lodBias;b.qualitySettings.antialiasingEnabled=c.antialiasingEnabled};return a}()});