// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/declare ../../../core/Accessor".split(" "),function(b,e,f,d,c,g){b=function(b){function a(){b.apply(this,arguments);this.rotationEnabled=this.enabled=!0}f(a,b);a.prototype.constrain=function(a,b,c){if(!this.enabled)return a;this.rotationEnabled||(a.rotation=0);return a};a.prototype.clone=function(){return new a({enabled:this.enabled,rotationEnabled:this.rotationEnabled})};
d([c.shared("esri.views.2d.constraints.RotationConstraint")],a.prototype,"declaredClass",void 0);d([c.property()],a.prototype,"enabled",void 0);d([c.property()],a.prototype,"rotationEnabled",void 0);return a=d([c.subclass()],a)}(c.declared(g));Object.defineProperty(e,"__esModule",{value:!0});e.default=b});