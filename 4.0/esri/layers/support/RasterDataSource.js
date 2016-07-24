// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../core/lang","./DataSource"],function(a,b,c){return a(c,{declaredClass:"esri.layers.support.RasterDataSource",toJSON:function(){return b.fixJson({type:"raster",workspaceId:this.workspaceId,dataSourceName:this.dataSourceName})}})});