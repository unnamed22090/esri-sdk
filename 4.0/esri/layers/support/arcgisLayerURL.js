// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/urlUtils"],function(h,b,e){function d(a){a=a.replace(/\s*[/_]+\s*/g," ");return a[0].toUpperCase()+a.slice(1)}b.serverTypes=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer"];b.match=RegExp("^(https?:\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/("+b.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i");b.parse=function(a){a=e.urlToObject(a).path.match(b.match);if(!a)return null;var f=a[1],g=a[3],c=a[4];return{title:d(a[2]),serverType:g,
sublayer:null!=c&&""!==c?parseInt(c,10):null,url:{path:f}}};b.cleanTitle=d});