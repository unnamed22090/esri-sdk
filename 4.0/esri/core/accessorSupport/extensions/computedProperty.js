// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/has","../utils","../whenMayChange"],function(e,a,g,c,f){a.ComputedPropertyExtension={processClassPropertyMetadata:function(a,d,b,c){},defineProperty:function(a,d,b,e){if(b.dependsOn)return f.whenMayChange(a,b.dependsOn,function(){return c.getProperties(a).propertyInvalidated(d)})}};Object.defineProperty(a,"__esModule",{value:!0});a.default=a.ComputedPropertyExtension});