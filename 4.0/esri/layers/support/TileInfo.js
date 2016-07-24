// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("../../core/jsonDictionary ../../core/JSONSupporter ../../core/lang ../../geometry/SpatialReference ../../geometry/Point ./LOD dojo/_base/lang".split(" "),function(l,m,n,g,p,q,r){var h=l({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc"}),k=m.createSubclass({declaredClass:"esri.layers.support.TileInfo",classMetadata:{properties:{origin:{dependsOn:["spatialReference"]},
spatialReference:{type:g}}},lods:null,_lodsReader:function(a){return a.map(function(a){return q.fromJSON(a)})},_lodsSetter:function(a){var b=0,c=0,d=[];a&&(b=-Infinity,c=Infinity,a.forEach(function(a){d.push(a.scale);b=a.scale>b?a.scale:b;c=a.scale<c?a.scale:c},this));this.scales=d;this.minScale=b;this.maxScale=c;return a},origin:null,_originReader:function(a,b){return p.fromJSON(r.mixin({spatialReference:b.spatialReference},a))},spatialReference:null,_spatialReferenceReader:function(a,b){return a&&
new g(a)},_spatialReferenceSetter:function(a){return a?a.clone():null},format:null,_formatReader:h.fromJSON,zoomToScale:function(a){var b=this.scales;if(0>=a)return b[0];if(a>=b.length)return b[b.length-1];var c=Math.round(a-0.5),d=Math.round(a);return b[d]+(d-a)*(b[c]-b[d])},scaleToZoom:function(a){var b=this.scales,c=0,d=b.length-1,f,e;for(c;c<d;c++){f=b[c];e=b[c+1];if(f<=a)break;if(e===a)return c+1;if(f>a&&e<a)return c+1-(a-e)/(f-e)}return c},snapScale:function(a,b){null==b&&(b=0.95);var c=this.scaleToZoom(a);
return c%Math.floor(c)>=b?this.zoomToScale(Math.ceil(c)):this.zoomToScale(Math.floor(c))},clone:function(){return k.fromJSON(this.toJSON())},toJSON:function(){return n.fixJson({rows:this.rows,cols:this.cols,dpi:this.dpi,format:h.toJSON(this.format),compressionQuality:this.compressionQuality,origin:this.origin&&this.origin.toJSON(),spatialReference:this.spatialReference&&this.spatialReference.toJSON(),lods:this.lods&&this.lods.map(function(a){return a.toJSON()})})}});return k});