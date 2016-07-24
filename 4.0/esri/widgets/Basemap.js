// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../request ./BasemapLayer".split(" "),function(b,c,h,k,d,e,f){return b(null,{declaredClass:"esri.widgets.Basemap",id:null,title:"",thumbnailUrl:null,layers:null,itemId:null,basemapGallery:null,constructor:function(a,g){a=a||{};!a.layers&&!a.itemId&&console.error("esri.widgets.Basemap: unable to find the 'layers' property in parameters");this.id=a.id;this.itemId=a.itemId;this.layers=a.layers;this.title=a.title||"";this.thumbnailUrl=
a.thumbnailUrl;this.basemapGallery=g},getLayers:function(a){if(this.layers)return this.layers;if(this.itemId)return a=e((a||d.dijit._arcgisUrl)+"/content/items/"+this.itemId+"/data",{query:{f:"json"},callbackParamName:"callback",error:function(a,l){this.basemapGallery?this.basemapGallery.emitError("esri.widgets.Basemap: could not access basemap item."):console.error("esri.widgets.Basemap: could not access basemap item.")}.bind(this)}),a.then(function(a){a=a.data;if(a.baseMap)return this.layers=[],
c.forEach(a.baseMap.baseMapLayers,function(a){this.layers.push(new f(a))},this),this.layers;this.basemapGallery?this.basemapGallery.emitError("esri.widgets.Basemap: could not access basemap item."):console.error("esri.widgets.Basemap: could not access basemap item.");return[]}.bind(this)),a}})});