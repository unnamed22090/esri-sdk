// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
require({cache:{"esri/portal/support/geometryServiceUtils":function(){define("require exports ../Portal ../PortalItem ../../config ../../tasks/GeometryService ../../core/promiseUtils ../../core/Error".split(" "),function(s,t,q,h,r,n,f,d){t.create=function(m){void 0===m&&(m=null);if(r.geometryServiceUrl)return f.resolve(new n({url:r.geometryServiceUrl}));if(!m)return f.reject(new d("internal:geometry-service-url-not-configured"));var l;m.isInstanceOf(h)?l=m.portal||q.getDefault():m.isInstanceOf(q)&&
(l=m);return l.load().then(function(e){if(e.helperServices&&e.helperServices.geometry&&e.helperServices.geometry.url)return f.resolve(new n({url:e.helperServices.geometry.url}));throw new d("internal:geometry-service-url-not-configured");})}})},"esri/tasks/GeometryService":function(){define("../core/declare ../core/jsonDictionary ../geometry/Extent ../geometry/Multipoint ../geometry/Polyline ../geometry/Polygon ../geometry/support/jsonUtils ../request ./Task dojo/_base/array dojo/_base/lang".split(" "),
function(s,t,q,h,r,n,f,d,m,l,e){var v=t({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});s=s(m,{declaredClass:"esri.tasks.GeometryService",_encodeGeometries:function(a){var b=[],c,e=a.length;for(c=0;c<e;c++)b.push(a[c].toJSON());return{geometryType:f.getJsonType(a[0]),geometries:b}},_decodeGeometries:function(a,b,c){var k=f.getGeometryType(b);a=a.geometries;var d=[],h={spatialReference:c.toJSON()},m=e.mixin;l.forEach(a,function(a,b){d[b]=new k(m(a,h))});
return d},_toProjectGeometry:function(a){var b=a.spatialReference.toJSON();return a instanceof q?new n({rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]],spatialReference:b}):new r({paths:[[].concat(a.points)],spatialReference:b})},_fromProjectedGeometry:function(a,b,c){return"extent"===b?(a=a.rings[0],new q(a[0][0],a[0][1],a[2][0],a[2][1],c)):new h({points:a.paths[0],spatialReference:c.toJSON()})},project:function(a,b){var c=e.mixin({},this.parsedUrl.query,
{f:"json"}),k;a.geometries?(b=a.outSR,k=a.geometries[0],c=e.mixin(c,a.toJSON())):(k=a[0],c=e.mixin(c,{outSR:b.wkid||JSON.stringify(b.toJSON()),inSR:k.spatialReference.wkid||JSON.stringify(k.spatialReference.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a))}));var u=f.getJsonType(k),h=this._decodeGeometries;return d(this.parsedUrl.path+"/project",{query:c,callbackParamName:"callback"}).then(function(a){return h(a.data,u,b)})},simplify:function(a){var b=a[0].spatialReference,c=e.mixin({},
this.parsedUrl.query,{f:"json",sr:b.wkid?b.wkid:JSON.stringify(b.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a))}),k=f.getJsonType(a[0]),u=this._decodeGeometries;return d(this.parsedUrl.path+"/simplify",{query:c,callbackParamName:"callback"}).then(function(a){return u(a.data,k,b)})},convexHull:function(a){var b=a[0].spatialReference;a=e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(b.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a))});return d(this.parsedUrl.path+
"/convexHull",{query:a,callbackParamName:"callback"}).then(function(a){return f.fromJSON(a.data.geometry).set("spatialReference",b)})},union:function(a){var b=a[0].spatialReference;a=e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(b.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a))});return d(this.parsedUrl.path+"/union",{query:a,callbackParamName:"callback"}).then(function(a){return f.fromJSON(a.data.geometry).set("spatialReference",b)})},autoComplete:function(a,b){var c=
a[0].spatialReference,k=e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(c.toJSON()),polygons:JSON.stringify(this._encodeGeometries(a).geometries),polylines:JSON.stringify(this._encodeGeometries(b).geometries)});return d(this.parsedUrl.path+"/autoComplete",{query:k,callbackParamName:"callback"}).then(function(a){return(a.data.geometries||[]).map(function(a){return new n({spatialReference:c,rings:a.rings})})})},reshape:function(a,b){var c=a.spatialReference,k=e.mixin({},this.parsedUrl.query,
{f:"json",sr:JSON.stringify(c.toJSON()),target:JSON.stringify({geometryType:f.getJsonType(a),geometry:a.toJSON()}),reshaper:JSON.stringify(b.toJSON())});return d(this.parsedUrl.path+"/reshape",{query:k,callbackParamName:"callback"}).then(function(a){return f.fromJSON(a.data.geometry).set("spatialReference",c)})},cut:function(a,b){var c=a[0].spatialReference,k=l.map(a,function(a){return a.toJSON()}),k=e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(c.toJSON()),target:JSON.stringify({geometryType:f.getJsonType(a[0]),
geometries:k}),cutter:JSON.stringify(b.toJSON())});return d(this.parsedUrl.path+"/cut",{query:k,callbackParamName:"callback"}).then(function(a){a=a.data;return{cutIndexes:a.cutIndexes,geometries:(a.geometries||[]).map(function(a){return f.fromJSON(a).set("spatialReference",c)})}})},intersect:function(a,b){var c=a[0].spatialReference,k=e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(c.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a)),geometry:JSON.stringify({geometryType:f.getJsonType(b),
geometry:b.toJSON()})});return d(this.parsedUrl.path+"/intersect",{query:k,callbackParamName:"callback"}).then(function(a){return(a.data.geometries||[]).map(function(a){return f.fromJSON(a).set("spatialReference",c)})})},difference:function(a,b){var c=a[0].spatialReference,k=e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(c.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a)),geometry:JSON.stringify({geometryType:f.getJsonType(b),geometry:b.toJSON()})});return d(this.parsedUrl.path+
"/difference",{query:k,callbackParamName:"callback"}).then(function(a){return(a.data.geometries||[]).map(function(a){return f.fromJSON(a).set("spatialReference",c)})})},buffer:function(a){var b=e.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),c=a.outSpatialReference||a.geometries[0].spatialReference;return d(this.parsedUrl.path+"/buffer",{query:b,callbackParamName:"callback"}).then(function(a){return(a.data.geometries||[]).map(function(a){return new n({spatialReference:c,rings:a.rings})})})},
areasAndLengths:function(a){a=e.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON());return d(this.parsedUrl.path+"/areasAndLengths",{query:a,callbackParamName:"callback"}).then(function(a){return a.data})},lengths:function(a){a=e.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON());return d(this.parsedUrl.path+"/lengths",{query:a,callbackParamName:"callback"}).then(function(a){return a.data})},labelPoints:function(a){var b=l.map(a,function(a){return a.toJSON()}),c=a[0].spatialReference;a=e.mixin({},
this.parsedUrl.query,{f:"json",sr:c.wkid?c.wkid:JSON.stringify(c.toJSON()),polygons:JSON.stringify(b)});return d(this.parsedUrl.path+"/labelPoints",{query:a,callbackParamName:"callback"}).then(function(a){return(a.data.labelPoints||[]).map(function(a){return f.fromJSON(a).set("spatialReference",c)})})},relation:function(a){a=e.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON());return d(this.parsedUrl.path+"/relation",{query:a,callbackParamName:"callback"}).then(this._handleRelationResponse)},trimExtend:function(a){var b=
e.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),c=a.sr;return d(this.parsedUrl.path+"/trimExtend",{query:b,callbackParamName:"callback"}).then(function(a){return(a.data.geometries||[]).map(function(a){return new r({spatialReference:c,paths:a.paths})})})},densify:function(a){var b=e.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),c=a.geometries[0].spatialReference;return d(this.parsedUrl.path+"/densify",{query:b,callbackParamName:"callback"}).then(function(a){return(a.data.geometries||
[]).map(function(a){return f.fromJSON(a).set("spatialReference",c)})})},generalize:function(a){var b=e.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),c=a.geometries[0].spatialReference;return d(this.parsedUrl.path+"/generalize",{query:b,callbackParamName:"callback"}).then(function(a){return(a.data.geometries||[]).map(function(a){return f.fromJSON(a).set("spatialReference",c)})})},offset:function(a){var b=e.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),c=a.geometries[0].spatialReference;
return d(this.parsedUrl.path+"/offset",{query:b,callbackParamName:"callback"}).then(function(a){return(a.data.geometries||[]).map(function(a){return f.fromJSON(a).set("spatialReference",c)})})},distance:function(a){a=e.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON());return d(this.parsedUrl.path+"/distance",{query:a,callbackParamName:"callback"}).then(this._handleDistanceResponse)},toGeoCoordinateString:function(a){var b={};e.isObject(a.sr)?b.sr=a.sr.wkid||JSON.stringify(a.sr.toJSON()):b.sr=a.sr;
b.coordinates=JSON.stringify(a.coordinates);b.conversionType=v.toJSON(a.conversionType||"mgrs");b.conversionMode=a.conversionMode;b.numOfDigits=a.numOfDigits;b.rounding=a.rounding;b.addSpaces=a.addSpaces;a=e.mixin({},this.parsedUrl.query,{f:"json"},b);return d(this.parsedUrl.path+"/toGeoCoordinateString",{query:a,callbackParamName:"callback"}).then(this._handleToGeoCoordinateResponse)},fromGeoCoordinateString:function(a){var b={};e.isObject(a.sr)?b.sr=a.sr.wkid||JSON.stringify(a.sr.toJSON()):b.sr=
a.sr;b.strings=JSON.stringify(a.strings);b.conversionType=v.toJSON(a.conversionType||"mgrs");b.conversionMode=a.conversionMode;a=e.mixin({},this.parsedUrl.query,{f:"json"},b);return d(this.parsedUrl.path+"/fromGeoCoordinateString",{query:a,callbackParamName:"callback"}).then(this._handleFromGeoCoordinateResponse)},_handleRelationResponse:function(a){return a.data.relations},_handleDistanceResponse:function(a){return(a=a.data)&&a.distance},_handleToGeoCoordinateResponse:function(a){return a.data.strings},
_handleFromGeoCoordinateResponse:function(a){return a.data.coordinates}});e.mixin(s,{UNIT_METER:9001,UNIT_GERMAN_METER:9031,UNIT_FOOT:9002,UNIT_SURVEY_FOOT:9003,UNIT_CLARKE_FOOT:9005,UNIT_FATHOM:9014,UNIT_NAUTICAL_MILE:9030,UNIT_SURVEY_CHAIN:9033,UNIT_SURVEY_LINK:9034,UNIT_SURVEY_MILE:9035,UNIT_KILOMETER:9036,UNIT_CLARKE_YARD:9037,UNIT_CLARKE_CHAIN:9038,UNIT_CLARKE_LINK:9039,UNIT_SEARS_YARD:9040,UNIT_SEARS_FOOT:9041,UNIT_SEARS_CHAIN:9042,UNIT_SEARS_LINK:9043,UNIT_BENOIT_1895A_YARD:9050,UNIT_BENOIT_1895A_FOOT:9051,
UNIT_BENOIT_1895A_CHAIN:9052,UNIT_BENOIT_1895A_LINK:9053,UNIT_BENOIT_1895B_YARD:9060,UNIT_BENOIT_1895B_FOOT:9061,UNIT_BENOIT_1895B_CHAIN:9062,UNIT_BENOIT_1895B_LINK:9063,UNIT_INDIAN_FOOT:9080,UNIT_INDIAN_1937_FOOT:9081,UNIT_INDIAN_1962_FOOT:9082,UNIT_INDIAN_1975_FOOT:9083,UNIT_INDIAN_YARD:9084,UNIT_INDIAN_1937_YARD:9085,UNIT_INDIAN_1962_YARD:9086,UNIT_INDIAN_1975_YARD:9087,UNIT_FOOT_1865:9070,UNIT_RADIAN:9101,UNIT_DEGREE:9102,UNIT_ARCMINUTE:9103,UNIT_ARCSECOND:9104,UNIT_GRAD:9105,UNIT_GON:9106,UNIT_MICRORADIAN:9109,
UNIT_ARCMINUTE_CENTESIMAL:9112,UNIT_ARCSECOND_CENTESIMAL:9113,UNIT_MIL6400:9114,UNIT_BRITISH_1936_FOOT:9095,UNIT_GOLDCOAST_FOOT:9094,UNIT_INTERNATIONAL_CHAIN:109003,UNIT_INTERNATIONAL_LINK:109004,UNIT_INTERNATIONAL_YARD:109001,UNIT_STATUTE_MILE:9093,UNIT_SURVEY_YARD:109002,UNIT_50KILOMETER_LENGTH:109030,UNIT_150KILOMETER_LENGTH:109031,UNIT_DECIMETER:109005,UNIT_CENTIMETER:109006,UNIT_MILLIMETER:109007,UNIT_INTERNATIONAL_INCH:109008,UNIT_US_SURVEY_INCH:109009,UNIT_INTERNATIONAL_ROD:109010,UNIT_US_SURVEY_ROD:109011,
UNIT_US_NAUTICAL_MILE:109012,UNIT_UK_NAUTICAL_MILE:109013,UNIT_SQUARE_INCHES:"esriSquareInches",UNIT_SQUARE_FEET:"esriSquareFeet",UNIT_SQUARE_YARDS:"esriSquareYards",UNIT_ACRES:"esriAcres",UNIT_SQUARE_MILES:"esriSquareMiles",UNIT_SQUARE_MILLIMETERS:"esriSquareMillimeters",UNIT_SQUARE_CENTIMETERS:"esriSquareCentimeters",UNIT_SQUARE_DECIMETERS:"esriSquareDecimeters",UNIT_SQUARE_METERS:"esriSquareMeters",UNIT_ARES:"esriAres",UNIT_HECTARES:"esriHectares",UNIT_SQUARE_KILOMETERS:"esriSquareKilometers"});
return s})},"esri/tasks/support/ProjectParameters":function(){define(["../../core/declare","dojo/_base/array","../../core/Accessoire","../../core/lang","../../geometry/support/jsonUtils"],function(s,t,q,h,r){return s(q,{declaredClass:"esri.tasks.support.ProjectParameters",geometries:null,outSR:null,transformation:null,transformForward:null,toJSON:function(){var n=t.map(this.geometries,function(d){return d.toJSON()}),f={};f.outSR=this.outSR.wkid||JSON.stringify(this.outSR.toJSON());f.inSR=this.geometries[0].spatialReference.wkid||
JSON.stringify(this.geometries[0].spatialReference.toJSON());f.geometries=JSON.stringify({geometryType:r.getJsonType(this.geometries[0]),geometries:n});this.transformation&&(f.transformation=this.transformation.wkid||JSON.stringify(this.transformation));h.isDefined(this.transformForward)&&(f.transformForward=this.transformForward);return f}})})},"esri/webmap/InitialViewProperties":function(){define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper ../Viewpoint ../core/Accessoire ../geometry/SpatialReference ../core/accessoireSupport/typescript".split(" "),
function(s,t,q,h,r,n,f,d){return function(m){function l(e){m.call(this,e);this.viewpoint=this.spatialReference=null}q(l,m);l.prototype.clone=function(){return new l({spatialReference:this.spatialReference?this.spatialReference.clone():null,viewpoint:this.viewpoint?this.viewpoint.clone():null})};h([d.shared("esri.webmap.InitialViewProperties")],l.prototype,"declaredClass",void 0);h([d.property({value:null,type:f})],l.prototype,"spatialReference",void 0);h([d.property({value:null,type:r})],l.prototype,
"viewpoint",void 0);return l=h([d.subclass()],l)}(n)})},"*noref":1}});
define("require exports ./core/tsSupport/extendsHelper ./core/tsSupport/decorateHelper ./Basemap ./Map ./Viewpoint ./core/Error ./core/JSONSupporter ./core/LoadableAccessoire ./core/promiseUtils ./core/requireUtils ./geometry/SpatialReference ./geometry/support/webMercatorUtils ./portal/Portal ./portal/PortalItem ./portal/support/geometryServiceUtils ./tasks/support/ProjectParameters ./webmap/InitialViewProperties dojo/_base/lang ./core/accessoireSupport/typescript".split(" "),function(s,t,q,h,r,
n,f,d,m,l,e,v,a,b,c,k,u,z,w,y,p){var x={major:2,minor:3};t=function(n){function g(a){n.call(this);this.widgets=this.version=this.tables=this.presentation=this.portalItem=this.initialViewProperties=this.bookmarks=this.basemap=this.authoringAppVersion=this.authoringApp=this.applicationProperties=null}q(g,n);g.prototype.getDefaults=function(a){return y.mixin(this.inherited(arguments),{version:y.clone(x)})};g.prototype.initialize=function(){if(this.resourceInfo){var a=void 0;try{a=this._validateJSON(this.resourceInfo)}catch(b){this.addResolvingPromise(e.reject(b));
return}this.read(a)}};g.prototype.load=function(){this.addResolvingPromise(this._loadFromSource());return this};g.prototype.toJSON=function(){throw new d("internal:not-yet-implemented","WebMap.toJSON is not yet implemented");};g.fromJSON=function(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");return new g({resourceInfo:a})};g.prototype._loadFromSource=function(){return this.resourceInfo?this._loadFromJSON(this.resourceInfo):this.portalItem&&this.portalItem.id?
this._loadFromItem(this.portalItem):e.resolve(null)};g.prototype._loadFromItem=function(a){var b=this;return a.load().then(function(a){return a.fetchData()}).then(function(a){b.resourceInfo=a;return b._readAndLoadFromJSON(a)}).then(function(){return b._getInitialExtent()}).then(function(a){if(a){var c=b.initialViewProperties?b.initialViewProperties.clone():new w;c.viewpoint=new f;c.viewpoint.targetGeometry=a;b.initialViewProperties=c}})};g.prototype._readAndLoadFromJSON=function(a){a=this._validateJSON(a);
this.read(a);return this._loadFromJSON(a)};g.prototype._validateJSON=function(a){a=this._sanitizeJSON(a);var b=this._validateVersion(a.version);a.version=b.major+"."+b.minor;return a};g.prototype._sanitizeJSON=function(a){return{authoringApp:a.authoringApp||"",authoringAppVersion:a.authoringAppVersion||"",applicationProperties:a.applicationProperties,baseMap:a.baseMap,bookmarks:a.bookmarks,operationalLayers:a.operationalLayers,presentation:a.presentation,spatialReference:a.spatialReference,tables:a.tables,
version:a.version||"0.0",widgets:a.widgets}};g.prototype._validateVersion=function(a){var b=a.split("."),c=b[0],b=b[1],e=/^\s*\d+\s*$/;if(!e.test(c))throw new d("webmap:invalid-version","Expected major version to be a number, but got '"+a+"'",{version:a});if(!e.test(b))throw new d("webmap:invalid-version","Expected minor version to be a number, but got '"+a+"'",{version:a});c=parseInt(c,10);b=parseInt(b,10);if(c!==x.major)throw new d("webmap:unsupported-version","Required major version is '"+x.major+
"', but got '"+c+"'",{version:a});return{major:c,minor:b}};g.prototype._loadFromJSON=function(a){var b=this,d=A.layerCreatorParams();this.portalItem&&(d.portal=this.portalItem.portal||c.getDefault());return v.when(s,"./portal/creators/layersCreator").then(function(c){var g=[],f=a.operationalLayers;f&&f.length&&g.push.apply(g,c.populateOperationalLayers(b.layers,f,d));return e.eachAlways(g).then(function(){})})};g.prototype._getInitialExtent=function(){var a=null,c=this.initialViewProperties&&this.initialViewProperties.spatialReference,
d=this.portalItem&&this.portalItem.extent;if(c&&d)if(c.isWGS84)a=d.clone();else if(c.isWebMercator)a=b.geographicToWebMercator(d);else return u.create(this.portalItem).then(function(a){var b=new z;b.geometries=[d];b.outSR=c;return a.project(b)}).then(function(a){return a[0]}).otherwise(function(a){console.log("Error projecting item's extent:",a)});return e.resolve(a)};h([p.shared("esri.WebMap")],g.prototype,"declaredClass",void 0);h([p.shared({reader:{exclude:["baseMap","operationalLayers","spatialReference"],
add:["basemap","initialViewProperties"]}})],g.prototype,"classMetadata",void 0);h([p.property()],g.prototype,"applicationProperties",void 0);h([p.property()],g.prototype,"authoringApp",void 0);h([p.property()],g.prototype,"authoringAppVersion",void 0);h([p.property({reader:function(a,b){return!b.baseMap||!Array.isArray(b.baseMap.baseMapLayers)||!b.baseMap.baseMapLayers.length?null:r.fromJSON(b.baseMap)}})],g.prototype,"basemap",void 0);h([p.property()],g.prototype,"bookmarks",void 0);h([p.property({type:w,
reader:function(b,c){var d={};c.spatialReference&&(d.spatialReference=a.fromJSON(c.spatialReference));return new w(d)}})],g.prototype,"initialViewProperties",void 0);h([p.property({type:k})],g.prototype,"portalItem",void 0);h([p.property()],g.prototype,"presentation",void 0);h([p.property()],g.prototype,"resourceInfo",void 0);h([p.property()],g.prototype,"tables",void 0);h([p.property({readOnly:!0,reader:function(a){a=a.split(".");var b=a[1];return{major:parseInt(a[0],10),minor:parseInt(b,10)}}})],
g.prototype,"version",void 0);h([p.property()],g.prototype,"widgets",void 0);return g=h([p.subclass([l,m])],g)}(n);var A=function(){function a(){}a.propertyFilter=function(b,c){var d=c;switch(b.layerType){case "ArcGISFeatureLayer":d=a._featureLayerPropertyFilter(b,c)}return d};a.layerCreatorParams=function(){return{propertyFilter:a.propertyFilter}};a._featureLayerPropertyFilter=function(a,b){b.outFields=["*"];return b};return a}();return t});