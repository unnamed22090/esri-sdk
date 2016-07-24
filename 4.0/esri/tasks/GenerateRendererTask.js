// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require dojo/_base/array ../core/declare dojo/_base/lang dojo/Deferred dojo/number ../request ../renderers/support/jsonUtils ./QueryTask ./Task ./support/StatisticDefinition ./support/Query".split(" "),function(p,m,q,e,r,l,s,t,u,v,n,w){return q(v,{declaredClass:"esri.tasks.GenerateRendererTask",constructor:function(){this._handler=e.hitch(this,this._handler);this._handleExecuteResponse=this._handleExecuteResponse.bind(this)},normalizeCtorArgs:function(a,d){if(e.isObject(a)&&("esri.layers.FeatureLayer"===
a.declaredClass||"esri.layers.CSVLayer"===a.declaredClass)){var c=a,g=e.mixin({featureLayer:c},d);"string"===typeof c.url&&"esri.layers.CSVLayer"!==c.declaredClass&&(g.url=c.url);return g}return this.inherited(arguments)},_parsedUrlGetter:function(a){var d=this.inherited(arguments);d.path+="/generateRenderer";return d},source:null,gdbVersion:null,checkValueRange:null,_handleExecuteResponse:function(a){a=a.data;var d;d="esri.renderer.ClassBreaksRenderer"===a.declaredClass||"esri.renderer.UniqueValueRenderer"===
a.declaredClass?a:t.fromJSON(a);if(!this.checkValueRange)return this._processRenderer(d,this._prefix,this._unitLabel,this._formatLabel,this._precision);a=new u(this.url);var c=new n({statisticType:"min",onStatisticField:this._field}),g=new n({statisticType:"max",onStatisticField:this._field}),c=new w({outStatistics:[c,g]});return a.execute(c).then(e.hitch(this,function(a){a=a.features[0].attributes;for(var c in a)if(0===c.toLowerCase().indexOf("min"))var f=a[c];else var b=a[c];return this._processRenderer(d,
this._prefix,this._unitLabel,this._formatLabel,this._precision,f,b)}))},_processRenderer:function(a,d,c,g,h,k,f){"esri.renderer.ClassBreaksRenderer"===a.declaredClass?m.forEach(a.infos,function(b,e){0===e&&(void 0!==k&&null!==k)&&(b.minValue=k);e===a.infos.length-1&&(void 0!==f&&null!==f)&&(b.classMaxValue=b.maxValue=f);h&&(b.classMaxValue=b.maxValue=Math.round(b.maxValue/h)*h,b.minValue=Math.round(b.minValue/h)*h);g&&(b.label=l.format(b.minValue)+" - "+l.format(b.maxValue));d&&(b.label=d+" "+b.label);
c&&(b.label=b.label+" "+c)}):m.forEach(a.infos,function(b,e){0===e&&(void 0!==k&&null!==k)&&(b.value=k);e===a.infos.length-1&&(void 0!==f&&null!==f)&&(b.value=f);g&&(b.label=l.format(b.value));d&&(b.label=d+" "+b.label);c&&(b.label=b.label+" "+c)});return a},execute:function(a){var d;this._precision=a.precision;this._prefix=a.prefix;this._unitLabel=a.unitLabel;this._formatLabel=a.formatLabel;if(this._features=a.features||this._getCollectionFeatures()){d=new r;var c=this._features;p(["./support/generateRenderer"],
function(e){var f;"esri.tasks.support.ClassBreaksDefinition"===a.classificationDefinition.declaredClass?f=e.createClassBreaksRenderer({features:c,definition:a.classificationDefinition}):"esri.tasks.support.UniqueValueDefinition"===a.classificationDefinition.declaredClass&&(f=e.createUniqueValueRenderer({features:c,definition:a.classificationDefinition}));f?d.resolve(this._handleExecuteResponse(f)):d.reject()});return d.promise}var g=e.mixin(a.toJSON(),{f:"json"});this._field="esri.tasks.support.ClassBreaksDefinition"===
a.classificationDefinition.declaredClass?a.classificationDefinition.classificationField:a.classificationDefinition.attributeField;if(this.source){var h={source:this.source.toJSON()};g.layer=JSON.stringify(h)}this.gdbVersion&&(g.gdbVersion=this.gdbVersion);return s(this.parsedUrl.path,{query:g,callbackParamName:"callback"}).then(this._handleExecuteResponse)},_getCollectionFeatures:function(){var a=this.featureLayer;return a&&a.hasMemorySource&&a.graphics}})});