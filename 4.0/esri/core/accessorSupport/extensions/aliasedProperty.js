// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports dojo/has ../whenMayChange ../utils ../get ../set".split(" "),function(m,b,n,f,g,h,k){function l(c,a,d){var b=g.getProperties(c);return f.whenMayChange(c,d.aliasOf,function(){b.propertyInvalidated(a)})}b.AliasedPropertyExtension={processClassPropertyMetadata:function(c,a,b,f){var e=a.aliasOf;e&&(c=e.split(".")[0],null!=b[c]&&(!a.set&&!a.get)&&(a.get=function(){return h.default(this,e)},a.readOnly||(a.set=function(a){return k.default(this,e,a)})))},defineProperty:function(b,
a,d,f){d.aliasOf&&l(b,a,d)}};Object.defineProperty(b,"__esModule",{value:!0});b.default=b.AliasedPropertyExtension});