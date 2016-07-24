// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang ../core/urlUtils ../core/MultiOriginJSONSupport ../geometry/SpatialReference ./support/VectorTileLayerLoader ./TiledLayer ./mixins/PortalLayer ./support/TileInfo".split(" "),function(e,f,n,p,g,q,r,s){for(var l=[],d=0;20>d;d++){var m=78271.51696402048/Math.pow(2,d);l.push({level:d,scale:Math.floor(3779.527559055118*m),resolution:m})}var d={wkid:102100},t={spatialReference:d,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-2.0037508342787E7,y:2.0037508342787E7,spatialReference:d},
spatialReference:d,lods:l},fullExtent:{xmin:-2.003750834E7,ymin:-2.003750834E7,xmax:2.003750834E7,ymax:2.003750834E7,spatialReference:d},version:null},k=q.createSubclass([n,r],{declaredClass:"esri.layers.VectorTileLayer",portalLoaderModule:"portal/loaders/VectorTileLayerLoader",viewModulePaths:{"2d":"../views/2d/layers/VectorTileLayerView2D"},_mapsWithAttribution:["World_Basemap"],constructor:function(){this._serviceOverrides={}},normalizeCtorArgs:function(a,b){return"string"===typeof a||a.version?
e.mixin({url:a},b):a},getDefaults:function(a){var b=a.url,c=null;b&&"string"===typeof b&&(b=f.urlToObject(a.url).path.toLowerCase(),c=this._getDefaultAttribution(this._getMapName(b)));return e.mixin(this.inherited(arguments),{styles:[],attributionDataUrl:c})},load:function(){this.style||this.addResolvingPromise(this.loadFromPortal(this._loadStyle.bind(this)))},properties:{legendEnabled:{value:!0,json:{readFrom:["showLegend"],read:function(a,b){return!!b.showLegend}}},popupEnabled:{value:!0,json:{readFrom:["disablePopup"],
read:function(a,b){return!b.disablePopup}}},style:{readOnly:!0},spatialReference:{json:{readFrom:["fullExtent.spatialReference"],read:function(a,b){return(a=b.fullExtent.spatialReference)&&p.fromJSON(a)}}},tileInfo:{value:null,json:{read:function(a,b){if(a){var c=b.minScale?b.minScale:Infinity,h=b.maxScale?b.maxScale:-Infinity;a.lods=a.lods.filter(function(a){return a.scale<=c&&a.scale>=h});return s.fromJSON(a)}return null}}},styles:{cast:function(a){if(a){if("string"===typeof a)return[a];if(Array.isArray(a))return a}else return[]}},
url:{}},loadStyle:function(a){return this._loadStyle(a)},addStyle:function(a){var b=this.styles;-1===b.indexOf(a)&&(this.styles=b.concat([a]))},removeStyle:function(a){var b=this.styles;a=b.indexOf(a);-1!==a&&(b.splice(a,1),this.styles=b.concat())},hasStyle:function(a){return-1!==this.styles.indexOf(a)},_getMapName:function(a){return(a=a.match(/^https?\:\/\/(basemaps|basemapsbeta)\.arcgis\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i))&&a[2]},_getDefaultAttribution:function(a){if(a){var b;
a=a.toLowerCase();for(var c=0,h=this._mapsWithAttribution.length;c<h;c++)if(b=this._mapsWithAttribution[c],-1<b.toLowerCase().indexOf(a))return this._getProtocol()+"//static.arcgis.com/attribution/Vector/"+b}},_getProtocol:function(){var a=window.location.protocol;return"file:"===a?"http:":a},_loadStyle:function(a){if(!a){a=this.url;"string"===typeof a&&!g.isMapboxUrl(a)&&(this.url=a=f.getAbsoluteUrl(a));var b=this.tileServers;b&&b.length&&(this._serviceOverrides.tileServers=b.map(function(a){return g.isMapboxUrl(a)?
a:f.getAbsoluteUrl(a)},this))}var b=new g,c=g.getCredentialFromUrl(a);this._serviceOverrides.credential=c;return b.loadMetadata(a,k.ACCESS_TOKEN,this._serviceOverrides).then(function(a){a=a||{};var b=a.layerDefinition,c={style:a.style};this.layerDefinition=b||null;this.serviceUrl=a.serviceUrl||null;this.styleUrl=a.styleUrl||null;b?(a=f.urlToObject(a.serviceUrl).path.toLowerCase(),a=this._getDefaultAttribution(this._getMapName(a)),c=e.mixin(c,{attributionDataUrl:a},b)):c=e.mixin(c,t);this.read(c)}.bind(this),
function(a){this.emit("error",a)}.bind(this))}});k.ACCESS_TOKEN=null;return k});