// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/INSPIRE_UseLimitation","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional ../../../../base/etc/docUtil".split(" "),function(d,h,g,e,k,l,m,n,p){d=d(n,{key:"INSPIRE_UseLimitation",postCreate:function(){this.inherited(arguments);var b=this;this.own(e.subscribe("gxe/interaction-occurred",function(a){try{if(b.parentXNode&&a&&a.inputWidget&&
a.inputWidget.parentXNode){var c=a.inputWidget.parentXNode.gxePath;"/metadata/dataIdInfo/resConst/Consts/useLimit"===c?b.emitInteractionOccurred():"/metadata/dataIdInfo/resConst/LegConsts/useLimit"===c?b.emitInteractionOccurred():"/metadata/dataIdInfo/resConst/SecConsts/useLimit"===c&&b.emitInteractionOccurred()}}catch(f){console.error(f)}}));this.own(e.subscribe("gxe/tab-activated",function(a){try{b.parentXNode&&a&&a.tabs&&a.tabs.isResConstElementChoice&&b.emitInteractionOccurred()}catch(c){console.error(c)}}));
this.own(e.subscribe("gxe/after-xnode-destroyed",function(a){try{if(b.parentXNode&&a&&a.xnode){var c=a.xnode.target;("resConst"===c||"useLimit"===c)&&b.emitInteractionOccurred()}}catch(f){console.error(f)}}))},ensureFocus:function(){p.ensureVisibility(this.parentXNode);g.some(this.parentXNode.getChildren(),function(b){if(b._isGxeTabs)return g.some(b.getChildren(),function(a){if(a.isConstraintsSection)return b.ensureActiveTab(a),!0}),!0})},validateConditionals:function(b){var a=this.newStatus({message:m.conditionals[this.key]}),
c=!1;this.forActiveXNodes("/metadata/dataIdInfo/resConst/Consts/useLimit,/metadata/dataIdInfo/resConst/LegConsts/useLimit,/metadata/dataIdInfo/resConst/SecConsts/useLimit",this.parentXNode.domNode,function(a){if(!this.isXNodeInputEmpty(a))return c=!0},this);a.isValid=c;this.track(a,b);return a}});k("extend-esri")&&h.setObject("dijit.metadata.types.arcgis.base.conditionals.INSPIRE_UseLimitation",d,l);return d});