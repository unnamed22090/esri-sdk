// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/_base/lang ../request ../geometry/support/normalizeUtils ./Task ./support/ImageServiceIdentifyResult".split(" "),function(a,d,e,f,g,h){a=a(g,{declaredClass:"esri.tasks.ImageServiceIdentifyTask",url:null,_parsedUrlGetter:function(a){var b=this.inherited(arguments);b.path+="/identify";return b},__msigns:[{n:"execute",c:1,a:[{i:0,p:["geometry"]}],e:2}],execute:function(a,b){var c=b.assembly,c=this._encode(d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON(c&&c[0])));return e(this.parsedUrl.path,
{query:c,callbackParamName:"callback"}).then(this._handleExecuteResponse)},_handleExecuteResponse:function(a){return h.fromJSON(a.data)}});f._createWrappers(a);return a});