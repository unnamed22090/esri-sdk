//>>built
define(["dojo/_base/lang","dojo/_base/xhr","dijit/layout/ContentPane","dojox/html/_base","dojo/_base/declare"],function(c,e,f,d,g){return g("dojox.layout.ContentPane",f,{adjustPaths:!1,cleanContent:!1,renderStyles:!1,executeScripts:!0,scriptHasHooks:!1,ioMethod:e.get,ioArgs:{},onExecError:function(a){},_setContent:function(a){var b=this._contentSetter;b&&b instanceof d._ContentSetter||(b=this._contentSetter=new d._ContentSetter({node:this.containerNode,_onError:c.hitch(this,this._onError),onContentError:c.hitch(this,
function(a){a=this.onContentError(a);try{this.containerNode.innerHTML=a}catch(b){console.error("Fatal "+this.id+" could not change content due to "+b.message,b)}})}));this._contentSetterParams={adjustPaths:Boolean(this.adjustPaths&&(this.href||this.referencePath)),referencePath:this.href||this.referencePath,renderStyles:this.renderStyles,executeScripts:this.executeScripts,scriptHasHooks:this.scriptHasHooks,scriptHookReplacement:"dijit.byId('"+this.id+"')"};return this.inherited("_setContent",arguments)},
destroy:function(){var a=this._contentSetter;a&&a.tearDown();this.inherited(arguments)}})});