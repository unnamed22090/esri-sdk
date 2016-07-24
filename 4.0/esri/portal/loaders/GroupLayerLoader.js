// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/accessoireSupport/typescript ./LayerLoader ../../layers/FeatureLayer ../../layers/SceneLayer ./FeatureLayerLoader ./FeatureCollectionLoader ./SceneLayerLoader ../../request ../../core/urlUtils ../../core/promiseUtils".split(" "),function(u,v,l,d,e,m,h,n,p,q,r,s,k,t){return function(f){function b(){f.apply(this,arguments)}l(b,f);b.prototype.loadLayer=function(){var b=this;switch(this.portalItem.type){case "Feature Service":this.LayerClass=
h;this.LayerLoaderClass=p;break;case "Feature Collection":this.LayerClass=h;this.LayerLoaderClass=q;break;case "Scene Service":this.LayerClass=n,this.LayerLoaderClass=r}return this.portalItem.fetchData().then(function(a){return!a||!a.layers&&(!a.featureCollection||!a.featureCollection.layers)?b.loadAllLayers():b.loadLayers(a.featureCollection||a)})};b.prototype.loadAllLayers=function(){var b=this;return this.fetchServiceInfo().then(function(a){a=a.map(function(a){return{id:a.id}});a.reverse();return b.loadLayers({layers:a})})};
b.prototype.fetchServiceInfo=function(){return s(this.portalItem.url,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(b){return b.data.layers})};b.prototype.loadLayers=function(b){var a=this,d;d=b.layers;return t.eachAlways(d.map(function(b,e){var c={portalItem:a.portalItem},g;if(a.portalItem.url){var f=void 0;g=b.id;f="Scene Service"===a.portalItem.type?k.join(a.portalItem.url,"layers",g.toString()):k.join(a.portalItem.url,g.toString());c.url=f}else g=e;a.LayerClass===
h&&(c.returnZ=!0,c.outFields=["*"]);c.titleIncludesUrl=!1;c=new a.LayerClass(c);a.instance.add(c);return(new a.LayerLoaderClass({instance:c,itemData:{layers:d},sublayerId:g,portalItem:a.portalItem})).load()})).then(function(){})};d([e.shared("esri.portal.loaders.GroupLayerLoader")],b.prototype,"declaredClass",void 0);d([e.shared(["Feature Service","Feature Collection","Scene Service"])],b.prototype,"supportedItemTypes",void 0);return b=d([e.subclass()],b)}(m)});