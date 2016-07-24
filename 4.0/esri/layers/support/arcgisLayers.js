// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang dojo/when dojo/string dojo/io-query ../../core/promiseUtils ../../core/requireUtils ../../request ../../core/Error ../../core/urlUtils ./arcgisLayerURL".split(" "),function(l,t,g,u,m,n,h,p,v,w,x,y){function z(b,a){return b.sublayers.map(function(d){var e=b.ctor;d=m.substitute(b.sublayerTemplate,{path:b.url.path,id:d.id});b.url.query&&(d+="?"+n.objectToQuery(b.url.query));d=g.mixin({},a,{url:d,titleIncludesUrl:!1});return new e(q(b,d))})}function A(b){var a=
y.parse(b);if(!a)return h.reject(w("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:b}));var d=a.title,e=a.serverType,f=a.sublayer;switch(e){case "MapServer":a=null!=f?"FeatureLayer":B(b).then(function(a){return a?"TileLayer":"MapImageLayer"});break;case "ImageServer":a=k(b).then(function(a){var b=a.tileInfo&&a.tileInfo.format;return a.tileInfo?b&&"LERC"===b.toUpperCase()&&a.cacheType&&"elevation"===a.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});
break;default:a={FeatureServer:"FeatureLayer",SceneServer:"SceneLayer",StreamServer:"StreamLayer"}[e]}var r=x.urlToObject(b),c={ctor:null,url:{path:r.path,query:r.query},properties:{},sublayerTemplate:{FeatureServer:"${path}/${id}",SceneServer:"${path}/layers/${id}"}[e]};return u(a).then(function(a){return p.when(l,s+"/"+a)}).then(function(a){c.ctor=a}).then(function(){if(c.sublayerTemplate&&null==f)return k(b).then(function(a){a&&Array.isArray(a.layers)&&(1===a.layers.length?c.url.path=m.substitute(c.sublayerTemplate,
{path:c.url.path,id:a.layers[0].id}):(c.sublayers=a.layers.map(function(a){return{id:a.id}}),c.sublayers.reverse(),c.properties.title=d))})}).then(function(){return c})}function B(b){return k(b).then(function(a){return a.tileInfo})}function q(b,a){return"esri.layers.FeatureLayer"===b.ctor.prototype.declaredClass?g.mixin({returnZ:!0,outFields:["*"]},a):a}function k(b){return v(b,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(a){return a.data})}var s="..";t.fromURL=
function(b){return A(b.url).then(function(a){var d=a.ctor,e=a.url.path;a.url.query&&(e+="?"+n.objectToQuery(a.url.query));var f=g.mixin({url:e},a.properties,b.properties);return a.sublayers?p.when(l,s+"/GroupLayer").then(function(b){var c=new b(a.properties);delete f.title;z(a,f).forEach(function(a){return c.add(a)});return h.resolve(c)}):h.resolve(new d(q(a,f)))})}});