// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../geometry/Extent","../../geometry/Polyline","./FeatureSet","dojo/_base/array"],function(l,m,n,c){return n.createSubclass({declaredClass:"esri.tasks.support.DirectionsFeatureSet",classMetadata:{properties:{mergedGeometry:{dependsOn:["features","extent.spatialReference"]},strings:{dependsOn:["features"]}},reader:{add:["extent","totalDriveTime","totalLength","totalTime"],exclude:["envelope","summary"]}},geometryType:"esriGeometryPolyline",extent:null,_extentReader:function(a,b){return l.fromJSON(b.summary.envelope)},
_featuresReader:function(a,b){a.forEach(this._decompressFeatureGeometry,this);return this.inherited(arguments)},mergedGeometry:null,_mergedGeometryGetter:function(){if(!this.features)return null;var a=c.map(this.features,function(a){return a.geometry}),b=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(a,b)},routeId:null,routeName:null,strings:null,_stringsGetter:function(){return c.map(this.features,function(a){return a.strings})},totalDriveTime:null,_totalDriveTimeReader:function(a,
b){return b.summary.totalDriveTime},totalLength:null,_totalLengthReader:function(a,b){return b.summary.totalLength},totalTime:null,_totalTimeReader:function(a,b){return b.summary.totalTime},_decompressFeatureGeometry:function(a){a.geometry=this._decompressGeometry(a.compressedGeometry);delete a.compressedGeometry},_decompressGeometry:function(a){var b=0,d=0,c=[],e,f,h;(f=a.match(/((\+|\-)[^\+\-]+)/g))||(f=[]);h=parseInt(f[0],32);for(var g=1;g<f.length;g+=2)b=a=parseInt(f[g],32)+b,d=e=parseInt(f[g+
1],32)+d,c.push([a/h,e/h]);return{paths:[c]}},_mergePolylinesToSinglePath:function(a,b){var d=[];c.forEach(a,function(a){c.forEach(a.paths,function(a){d=d.concat(a)})});var k=[],e=[0,0];c.forEach(d,function(a){if(a[0]!==e[0]||a[1]!==e[1])k.push(a),e=a});return new m({paths:[k]},b)}})});