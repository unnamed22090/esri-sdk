// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/GEN_ReportResult","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional ../../../../base/etc/docUtil".split(" "),function(c,k,g,h,l,m,n,p,q){c=c(p,{key:"GEN_ReportResult",postCreate:function(){this.inherited(arguments);var b=this;this.own(h.subscribe("gxe/interaction-occurred",function(a){try{b.parentXNode&&a&&a.inputWidget&&a.inputWidget.parentXNode&&
"/metadata/dqInfo/report/@type"===a.inputWidget.parentXNode.gxePath&&b.emitInteractionOccurred()}catch(d){console.error(d)}}));this.own(h.subscribe("gxe/optional-content-toggled",function(a){try{if(b.parentXNode&&a&&a.src&&a.src.target){var d=a.src.target;("ConResult"===d||"QuanResult"===d)&&b.emitInteractionOccurred()}}catch(e){console.error(e)}}))},ensureFocus:function(){q.ensureVisibility(this.parentXNode);g.some(this.parentXNode.getChildren(),function(b){if(b._isGxeTabs)return g.some(b.getChildren(),
function(a){if(a.isResultSection)return b.ensureActiveTab(a),!0}),!0})},validateConditionals:function(b){var a=this.newStatus({message:n.conditionals[this.key]}),d=!0,e=this.parentXNode.domNode,f,c=!1;if(!this.isXNodeOff(this.parentXNode)){c=!0;if(this.parentXNode.gxeDocument.isAgsFGDC&&(f=this.findInputValue("/metadata/dqInfo/report/@type",e),"DQCompOm"===f||"DQConcConsis"===f))c=!1;this.parentXNode.gxeDocument.isAgsINSPIRE&&(f=this.findInputValue("/metadata/dqInfo/report/@type",e),"DQDomConsis"===
f&&(c=!1))}c&&(d=!1,this.forActiveXNodes("/metadata/dqInfo/report/measResult/ConResult,/metadata/dqInfo/report/measResult/QuanResult",e,function(a){return d=!0}));a.isValid=d;this.track(a,b);return a}});l("extend-esri")&&k.setObject("dijit.metadata.types.arcgis.base.conditionals.GEN_ReportResult",c,m);return c});