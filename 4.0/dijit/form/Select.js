//>>built
require({cache:{"url:dijit/form/templates/Select.html":'\x3ctable class\x3d"dijit dijitReset dijitInline dijitLeft"\r\n\tdata-dojo-attach-point\x3d"_buttonNode,tableNode,focusNode,_popupStateNode" cellspacing\x3d\'0\' cellpadding\x3d\'0\'\r\n\trole\x3d"listbox" aria-haspopup\x3d"true"\r\n\t\x3e\x3ctbody role\x3d"presentation"\x3e\x3ctr role\x3d"presentation"\r\n\t\t\x3e\x3ctd class\x3d"dijitReset dijitStretch dijitButtonContents" role\x3d"presentation"\r\n\t\t\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitButtonText"  data-dojo-attach-point\x3d"containerNode,textDirNode" role\x3d"presentation"\x3e\x3c/div\r\n\t\t\t\x3e\x3cdiv class\x3d"dijitReset dijitValidationContainer"\r\n\t\t\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\r\n\t\t\t/\x3e\x3c/div\r\n\t\t\t\x3e\x3cinput type\x3d"hidden" ${!nameAttrSetting} data-dojo-attach-point\x3d"valueNode" value\x3d"${value}" aria-hidden\x3d"true"\r\n\t\t/\x3e\x3c/td\r\n\t\t\x3e\x3ctd class\x3d"dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer"\r\n\t\t\tdata-dojo-attach-point\x3d"titleNode" role\x3d"presentation"\r\n\t\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitArrowButtonInner" value\x3d"\x26#9660; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\r\n\t\t\t\t${_buttonInputDisabled}\r\n\t\t/\x3e\x3c/td\r\n\t\x3e\x3c/tr\x3e\x3c/tbody\r\n\x3e\x3c/table\x3e\r\n'}});
define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-geometry dojo/i18n dojo/keys dojo/_base/lang dojo/on dojo/sniff ./_FormSelectWidget ../_HasDropDown ../DropDownMenu ../MenuItem ../MenuSeparator ../Tooltip ../_KeyNavMixin ../registry dojo/text!./templates/Select.html dojo/i18n!./nls/validate".split(" "),function(h,e,r,k,c,s,l,f,m,g,t,u,v,n,w,d,x,y,z){function p(a){return function(b){this._isLoaded?this.inherited(a,arguments):this.loadDropDown(f.hitch(this,a,b))}}var q=
e("dijit.form._SelectMenu",v,{autoFocus:!0,buildRendering:function(){this.inherited(arguments);this.domNode.setAttribute("role","listbox")},postCreate:function(){this.inherited(arguments);this.own(m(this.domNode,"selectstart",function(a){a.preventDefault();a.stopPropagation()}))},focus:function(){var a=!1,b=this.parentWidget.value;f.isArray(b)&&(b=b[b.length-1]);b&&h.forEach(this.parentWidget._getChildren(),function(c){c.option&&b===c.option.value&&(a=!0,this.focusChild(c,!1))},this);a||this.inherited(arguments)}});
c=e("dijit.form.Select"+(g("dojo-bidi")?"_NoBidi":""),[t,u,x],{baseClass:"dijitSelect dijitValidationTextBox",templateString:z,_buttonInputDisabled:g("ie")?"disabled":"",required:!1,state:"",message:"",tooltipPosition:[],emptyLabel:"\x26#160;",_isLoaded:!1,_childrenLoaded:!1,labelType:"html",_fillContent:function(){this.inherited(arguments);if(this.options.length&&!this.value&&this.srcNodeRef){var a=this.srcNodeRef.selectedIndex||0;this._set("value",this.options[0<=a?a:0].value)}this.dropDown=new q({id:this.id+
"_menu",parentWidget:this});k.add(this.dropDown.domNode,this.baseClass.replace(/\s+|$/g,"Menu "))},_getMenuItemForOption:function(a){if(!a.value&&!a.label)return new w({ownerDocument:this.ownerDocument});var b=f.hitch(this,"_setValueAttr",a);a=new n({option:a,label:("text"===this.labelType?(a.label||"").toString().replace(/&/g,"\x26amp;").replace(/</g,"\x26lt;"):a.label)||this.emptyLabel,onClick:b,ownerDocument:this.ownerDocument,dir:this.dir,textDir:this.textDir,disabled:a.disabled||!1});a.focusNode.setAttribute("role",
"option");return a},_addOptionItem:function(a){this.dropDown&&this.dropDown.addChild(this._getMenuItemForOption(a))},_getChildren:function(){return!this.dropDown?[]:this.dropDown.getChildren()},focus:function(){if(!this.disabled&&this.focusNode.focus)try{this.focusNode.focus()}catch(a){}},focusChild:function(a){a&&this.set("value",a.option)},_getFirst:function(){var a=this._getChildren();return a.length?a[0]:null},_getLast:function(){var a=this._getChildren();return a.length?a[a.length-1]:null},childSelector:function(a){return(a=
y.byNode(a))&&a.getParent()==this.dropDown},onKeyboardSearch:function(a,b,c,d){a&&this.focusChild(a)},_loadChildren:function(a){if(!0===a)if(this.dropDown&&(delete this.dropDown.focusedChild,this.focusedChild=null),this.options.length)this.inherited(arguments);else{h.forEach(this._getChildren(),function(a){a.destroyRecursive()});var b=new n({ownerDocument:this.ownerDocument,label:this.emptyLabel});this.dropDown.addChild(b)}else this._updateSelection();this._isLoaded=!1;this._childrenLoaded=!0;this._loadingStore||
this._setValueAttr(this.value,!1)},_refreshState:function(){this._started&&this.validate(this.focused)},startup:function(){this.inherited(arguments);this._refreshState()},_setValueAttr:function(a){this.inherited(arguments);r.set(this.valueNode,"value",this.get("value"));this._refreshState()},_setNameAttr:"valueNode",_setDisabledAttr:function(a){this.inherited(arguments);this._refreshState()},_setRequiredAttr:function(a){this._set("required",a);this.focusNode.setAttribute("aria-required",a);this._refreshState()},
_setOptionsAttr:function(a){this._isLoaded=!1;this._set("options",a)},_setDisplay:function(a){a=("text"===this.labelType?(a||"").replace(/&/g,"\x26amp;").replace(/</g,"\x26lt;"):a)||this.emptyLabel;this.containerNode.innerHTML='\x3cspan role\x3d"option" class\x3d"dijitReset dijitInline '+this.baseClass.replace(/\s+|$/g,"Label ")+'"\x3e'+a+"\x3c/span\x3e"},validate:function(a){a=this.disabled||this.isValid(a);this._set("state",a?"":this._hasBeenBlurred?"Error":"Incomplete");this.focusNode.setAttribute("aria-invalid",
a?"false":"true");var b=a?"":this._missingMsg;b&&this.focused&&this._hasBeenBlurred?d.show(b,this.domNode,this.tooltipPosition,!this.isLeftToRight()):d.hide(this.domNode);this._set("message",b);return a},isValid:function(){return!this.required||0===this.value||!/^\s*$/.test(this.value||"")},reset:function(){this.inherited(arguments);d.hide(this.domNode);this._refreshState()},postMixInProperties:function(){this.inherited(arguments);this._missingMsg=s.getLocalization("dijit.form","validate",this.lang).missingMessage},
postCreate:function(){this.inherited(arguments);this.own(m(this.domNode,"selectstart",function(a){a.preventDefault();a.stopPropagation()}));this.domNode.setAttribute("aria-expanded","false");var a=this._keyNavCodes;delete a[l.LEFT_ARROW];delete a[l.RIGHT_ARROW]},_setStyleAttr:function(a){this.inherited(arguments);k.toggle(this.domNode,this.baseClass.replace(/\s+|$/g,"FixedWidth "),!!this.domNode.style.width)},isLoaded:function(){return this._isLoaded},loadDropDown:function(a){this._loadChildren(!0);
this._isLoaded=!0;a()},destroy:function(a){this.dropDown&&!this.dropDown._destroyed&&(this.dropDown.destroyRecursive(a),delete this.dropDown);d.hide(this.domNode);this.inherited(arguments)},_onFocus:function(){this.validate(!0)},_onBlur:function(){d.hide(this.domNode);this.inherited(arguments);this.validate(!1)}});g("dojo-bidi")&&(c=e("dijit.form.Select",c,{_setDisplay:function(a){this.inherited(arguments);this.applyTextDir(this.containerNode)}}));c._Menu=q;c.prototype._onContainerKeydown=p("_onContainerKeydown");
c.prototype._onContainerKeypress=p("_onContainerKeypress");return c});