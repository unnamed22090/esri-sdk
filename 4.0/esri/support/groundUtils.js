// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","../core/accessorSupport/ensureType","../Ground","../layers/ElevationLayer"],function(h,e,f,c,g){var d={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"}};e.ensureType=function(a){var b;"string"===typeof a?a in d?(a=d[a],a=new g({id:a.id,url:a.url}),b=new c({layers:[a]})):console.warn("Unable to find ground definition for: "+a+'. Try "world-elevation"'):b=f.default(c,a);return b}});