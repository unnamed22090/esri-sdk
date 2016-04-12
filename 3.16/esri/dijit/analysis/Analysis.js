// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/Analysis.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n   \x3cdiv data-dojo-type\x3d"dojox/widget/TitleGroup" class\x3d"analysisCategoryCtr" doLayout\x3d"false" style\x3d"height:600px;width:100%" data-dojo-attach-point\x3d"_leftAccordion"\x3e\r\n      \x3c!--\x3cdiv data-dojo-type\x3d"dijit/TitlePane"  title\x3d"dummy" style\x3d"height:240px;display:none;" data-dojo-attach-point\x3d"_dummyPane"\x3e\r\n      \x3c/div\x3e--\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane"  data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.summarizeData}"  data-esriHelpTopic\x3d"SummarizeDataCategory" data-dojo-attach-point\x3d"_summarizeTools"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.findLocations}"  data-esriHelpTopic\x3d"FindLocationsCategory" data-dojo-attach-point\x3d"_locationTools"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.dataEnrichment}" data-esriHelpTopic\x3d"EnrichLocationsCategory" data-dojo-attach-point\x3d"_geoenrichTools" \x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.analyzePatterns}" data-esriHelpTopic\x3d"AnalyzePatternsCategory" data-dojo-attach-point\x3d"_analyzePatTools"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.useProximity}" data-esriHelpTopic\x3d"UseProximityCategory" data-dojo-attach-point\x3d"_proximityTools"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.manageData}"  data-esriHelpTopic\x3d"ManageDataCategory" data-dojo-attach-point\x3d"_managedataTools" \x3e\r\n      \x3c/div\x3e\r\n  \x3c/div\x3e\x3c!-- end AccordionContainer --\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/analysis/Analysis","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/layout/AccordionContainer dijit/TitlePane dojox/widget/TitleGroup ../../kernel ./AnalysisToolItem ./utils dojo/i18n!../../nls/jsapi dojo/text!./templates/Analysis.html".split(" "),
function(l,p,d,f,n,B,q,C,D,g,r,c,h,E,s,t,u,v,w,x,k,F,G,H,y,e,z,m,A){l=p([t,u,v,w,x,s],{declaredClass:"esri.dijit.analysis.Analysis",templateString:A,widgetsInTemplate:!0,i18n:null,helpFileName:"Analysis",constructor:function(b,a){this._pbConnects=[]},postMixInProperties:function(){this.inherited(arguments);this.i18n={};d.mixin(this.i18n,m.common);d.mixin(this.i18n,m.tocPanel);d.mixin(this.i18n,m.analysisTools)},startup:function(){this.inherited(arguments);this._titlePanes=[this._summarizeTools,this._locationTools,
this._geoenrichTools,this._analyzePatTools,this._proximityTools,this._managedataTools];f.forEach(this._titlePanes,function(b){r.set(b.titleNode,"innerHTML","\x3cspan class\x3d'esriFloatTrailing helpIcon' esriHelpTopic\x3d'"+(b.get("data-esrihelptopic")?b.get("data-esrihelptopic"):b.get("data-esriHelpTopic"))+"' data-dojo-attach-point\x3d'_helpIconNode'\x3e\x3c/span\x3e"+b.titleNode.innerHTML)},this);this.set("summarizeTools");this.set("locationTools");this.set("geoenrichTools");this.set("analyzePatterns");
this.set("proximityTools");this.set("manageDataTools");this._leftAccordion.startup();f.forEach(this._titlePanes,function(b){b.startup()});z.initHelpLinks(this.domNode)},destroy:function(){this.inherited(arguments);f.forEach(this._pbConnects,n.disconnect);delete this._pbConnects},_connect:function(b,a,c){this.own(b.on(a,c))},_setSummarizeToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.aggregatePoints,helpTopic:"AggregatePointsTool",toolIcon:"aggregateIcon"},c.create("div",null,b));
a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.summarizeNearby,helpTopic:"SummarizeNearbyTool",toolIcon:"sumNearbyIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.summarizeWithin,helpTopic:"SummarizeWithinTool",toolIcon:"sumWithinIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,
"onToolSelect"));this._summarizeTools.set("content",b)},_setLocationToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.findExistingLocations,helpTopic:"FindExistingLocationsTool",toolIcon:"findLocationsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.deriveNewLocations,helpTopic:"DeriveNewLocationsTool",toolIcon:"findNewLocationsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",
!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.findSimilarLocations,helpTopic:"FindSimilarLocationsTool",toolIcon:"findSimilarLocationsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.chooseBestFacilities,helpTopic:"ChooseBestFacilitiesTool",toolIcon:"chooseBestFacilitiesIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",
d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.createViewshed,helpTopic:"CreateViewshedTool",toolIcon:"createViewshedIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.createWatershed,helpTopic:"CreateWatershedsTool",toolIcon:"createWatershedIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.traceDownstream,
helpTopic:"TraceDownstreamTool",toolIcon:"traceDownstreamIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._locationTools.set("content",b)},_setGeoenrichToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.enrichLayer,helpTopic:"EnrichLayerTool",toolIcon:"geoenrichLayerIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._geoenrichTools.set("content",
b)},_setProximityToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.createBuffers,helpTopic:"CreateBuffersTool",toolIcon:"buffersIcon"},c.create("div",null,b));this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a.set("showComingSoonLabel",!1);a=new e({name:this.i18n.createDriveTimeAreas,helpTopic:"CreateDriveTimeAreasTool",toolIcon:"driveIcon"},c.create("div",null,b));g.set(a.optionsDiv,"margin-top","0");a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,
"onToolSelect"));a=new e({name:this.i18n.findNearest,helpTopic:"FindNearestTool",toolIcon:"findClosestFacilityIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.planRoutes,helpTopic:"PlanRoutesTool",toolIcon:"planRoutesIcon"},c.create("div",null,b));g.set(a.optionsDiv,"margin-top","0");a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.connectOriginsToDestinations,
helpTopic:"ConnectOriginsToDestinationsTool",toolIcon:"connectODIcon"},c.create("div",null,b));g.set(a.optionsDiv,"margin-top","0");a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._proximityTools.set("content",b)},_setAnalyzePatternsAttr:function(){var b,a;b=c.create("div");a=new e({name:this.i18n.calculateDensity,helpTopic:"CalculateDensityTool",toolIcon:"createDensitySurfaceIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,
"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.findHotSpots,helpTopic:"FindHotSpotsTool",toolIcon:"findHotSpotsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.interpolatePoints,helpTopic:"InterpolatePointsTool",toolIcon:"createInterpolatedSurfaceIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._analyzePatTools.set("content",
b)},_setInterpolateToolsAttr:function(){var b;b=c.create("div");new e({name:this.i18n.createInterpolatedSurface,helpTopic:"SummarizeWithinTool",toolIcon:"createInterpolatedSurfaceIcon"},c.create("div",null,b));this._interpolateTools.set("content",b)},_setManageDataToolsAttr:function(){var b,a;b=c.create("div");a=new e({name:this.i18n.dissolveBoundaries,helpTopic:"DissolveBoundariesTool",toolIcon:"dissolveBoundariesIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",
d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.extractData,helpTopic:"ExtractDataTool",toolIcon:"extractDataIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.mergeLayers,helpTopic:"MergeLayersTool",toolIcon:"mergeLayersIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.overlayLayers,helpTopic:"OverlayLayersTool",
toolIcon:"overlayLayersIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._managedataTools.set("content",b)},_getSelectedCategoryAttr:function(){return f.filter(this._titlePanes,function(b,a){return b.open})[0].get("data-esrihelptopic")},_getSelectedPaneAttr:function(){return f.filter(this._titlePanes,function(b,a){return b.open})[0]},_setSelectedCategoryAttr:function(b){console.log("setting",b);var a;f.forEach(this._titlePanes,
function(c){a=c.get("data-esrihelptopic");a===b&&c.set("open",!0)},this)},hide:function(b){var a=h("div[data-esrihelptopic \x3d'"+b+"']");0===a.length&&(a=h("a[esrihelptopic \x3d'"+b+"']"));0<a.length&&a.forEach(function(a){a&&k.getEnclosingWidget(a)&&g.set(k.getEnclosingWidget(a).domNode,"display","none")})},disable:function(b,a){var c=h("div[data-esrihelptopic \x3d'"+b+"']");0===c.length&&(c=h("a[esrihelptopic \x3d'"+b+"']"));0<c.length&&c.forEach(function(b){if(b&&k.getEnclosingWidget(b)){var c=
k.getEnclosingWidget(b);c.set("showComingSoonLabel",a);g.set(c.optionsDiv,"display","none");a&&f.forEach(this._pbConnects,function(a){a._nodeId===c.id&&n.disconnect(a)},this)}},this)},onToolSelect:function(b){}});q("extend-esri")&&d.setObject("dijit.analysis.Analysis",l,y);return l});