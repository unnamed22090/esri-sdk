// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/extendsHelper ./tsSupport/decorateHelper ./typescript dojo/string".split(" "),function(g,h,k,d,e,f){return function(){function a(a,b,c){}a.prototype.dojoConstructor=function(a,b,c){this.name=a;this.message=b&&f.substitute(b,c,function(a){return null==a?"":a})||"";this.details=c};a.prototype.toString=function(){return"["+this.name+"]: "+this.message};return a=d([e.subclass()],a)}()});