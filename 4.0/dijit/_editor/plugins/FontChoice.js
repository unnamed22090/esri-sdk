//>>built
define("require dojo/_base/array dojo/_base/declare dojo/dom-construct dojo/i18n dojo/_base/lang dojo/store/Memory ../../registry ../../_Widget ../../_TemplatedMixin ../../_WidgetsInTemplateMixin ../../form/FilteringSelect ../_Plugin ../range dojo/i18n!../nls/FontChoice".split(" "),function(e,h,g,s,t,k,u,v,w,x,y,z,m,n){e=g("dijit._editor.plugins._FontDropDown",[w,x,y],{label:"",plainText:!1,templateString:"\x3cspan style\x3d'white-space: nowrap' class\x3d'dijit dijitReset dijitInline'\x3e\x3clabel class\x3d'dijitLeft dijitInline' for\x3d'${selectId}'\x3e${label}\x3c/label\x3e\x3cinput data-dojo-type\x3d'../../form/FilteringSelect' required\x3d'false' data-dojo-props\x3d'labelType:\"html\", labelAttr:\"label\", searchAttr:\"name\"' class\x3d'${comboClass}' tabIndex\x3d'-1' id\x3d'${selectId}' data-dojo-attach-point\x3d'select' value\x3d''/\x3e\x3c/span\x3e",
contextRequire:e,postMixInProperties:function(){this.inherited(arguments);this.strings=t.getLocalization("dijit._editor","FontChoice");this.label=this.strings[this.command];this.id=v.getUniqueId(this.declaredClass.replace(/\./g,"_"));this.selectId=this.id+"_select";this.inherited(arguments)},postCreate:function(){this.select.set("store",new u({idProperty:"value",data:h.map(this.values,function(b){var a=this.strings[b]||b;return{label:this.getLabel(b,a),name:a,value:b}},this)}));this.select.set("value",
"",!1);this.disabled=this.select.get("disabled")},_setValueAttr:function(b,a){a=!1!==a;this.select.set("value",0>h.indexOf(this.values,b)?"":b,a);a||(this.select._lastValueReported=null)},_getValueAttr:function(){return this.select.get("value")},focus:function(){this.select.focus()},_setDisabledAttr:function(b){this._set("disabled",b);this.select.set("disabled",b)}});var p=g("dijit._editor.plugins._FontNameDropDown",e,{generic:!1,command:"fontName",comboClass:"dijitFontNameCombo",postMixInProperties:function(){this.values||
(this.values=this.generic?["serif","sans-serif","monospace","cursive","fantasy"]:["Arial","Times New Roman","Comic Sans MS","Courier New"]);this.inherited(arguments)},getLabel:function(b,a){return this.plainText?a:"\x3cdiv style\x3d'font-family: "+b+"'\x3e"+a+"\x3c/div\x3e"},_setValueAttr:function(b,a){this.generic&&(b={Arial:"sans-serif",Helvetica:"sans-serif",Myriad:"sans-serif",Times:"serif","Times New Roman":"serif","Comic Sans MS":"cursive","Apple Chancery":"cursive",Courier:"monospace","Courier New":"monospace",
Papyrus:"fantasy","Estrangelo Edessa":"cursive",Gabriola:"fantasy"}[b]||b);this.inherited(arguments,[b,!1!==a])}}),q=g("dijit._editor.plugins._FontSizeDropDown",e,{command:"fontSize",comboClass:"dijitFontSizeCombo",values:[1,2,3,4,5,6,7],getLabel:function(b,a){return this.plainText?a:"\x3cfont size\x3d"+b+"'\x3e"+a+"\x3c/font\x3e"},_setValueAttr:function(b,a){a=!1!==a;b.indexOf&&-1!=b.indexOf("px")&&(b={10:1,13:2,16:3,18:4,24:5,32:6,48:7}[parseInt(b,10)]||b);this.inherited(arguments,[b,a])}}),r=g("dijit._editor.plugins._FormatBlockDropDown",
e,{command:"formatBlock",comboClass:"dijitFormatBlockCombo",values:"noFormat p h1 h2 h3 pre".split(" "),postCreate:function(){this.inherited(arguments);this.set("value","noFormat",!1)},getLabel:function(b,a){return this.plainText||"noFormat"==b?a:"\x3c"+b+"\x3e"+a+"\x3c/"+b+"\x3e"},_execCommand:function(b,a,d){if("noFormat"===d){var c;if((a=n.getSelection(b.window))&&0<a.rangeCount){d=a.getRangeAt(0);var e;if(d){a=d.startContainer;for(c=d.endContainer;a&&a!==b.editNode&&a!==b.document.body&&1!==a.nodeType;)a=
a.parentNode;for(;c&&c!==b.editNode&&c!==b.document.body&&1!==c.nodeType;)c=c.parentNode;var l=k.hitch(this,function(a,c){if(a.childNodes&&a.childNodes.length){var d;for(d=0;d<a.childNodes.length;d++){var f=a.childNodes[d];if(1==f.nodeType&&b.selection.inSelection(f)){var e=f.tagName?f.tagName.toLowerCase():"";-1!==h.indexOf(this.values,e)&&c.push(f);l(f,c)}}}});d=k.hitch(this,function(a){if(a&&a.length){for(b.beginEditing();a.length;)this._removeFormat(b,a.pop());b.endEditing()}});var f=[];if(a==
c){var g;for(c=a;c&&c!==b.editNode&&c!==b.document.body;){if(1==c.nodeType&&(e=c.tagName?c.tagName.toLowerCase():"",-1!==h.indexOf(this.values,e))){g=c;break}c=c.parentNode}l(a,f);g&&(f=[g].concat(f))}else for(c=a;b.selection.inSelection(c);)1==c.nodeType&&(e=c.tagName?c.tagName.toLowerCase():"",-1!==h.indexOf(this.values,e)&&f.push(c),l(c,f)),c=c.nextSibling;d(f);b.onDisplayChanged()}}}else b.execCommand(a,d)},_removeFormat:function(b,a){if(b.customUndo){for(;a.firstChild;)s.place(a.firstChild,a,
"before");a.parentNode.removeChild(a)}else{b.selection.selectElementChildren(a);var d=b.selection.getSelectedHtml();b.selection.selectElement(a);b.execCommand("inserthtml",d||"")}}}),f=g("dijit._editor.plugins.FontChoice",m,{useDefaultCommand:!1,_initButton:function(){var b={fontName:p,fontSize:q,formatBlock:r}[this.command],a=this.params;this.params.custom&&(a.values=this.params.custom);var d=this.editor;this.button=new b(k.delegate({dir:d.dir,lang:d.lang},a));this.own(this.button.select.on("change",
k.hitch(this,function(a){this.editor.focused&&this.editor.focus();"fontName"==this.command&&-1!=a.indexOf(" ")&&(a="'"+a+"'");this.button._execCommand?this.button._execCommand(this.editor,this.command,a):this.editor.execCommand(this.command,a)})))},updateState:function(){var b=this.editor,a=this.command;if(b&&(b.isLoaded&&a.length)&&this.button){var d=this.get("disabled");this.button.set("disabled",d);if(!d){var c;try{c=b.queryCommandValue(a)||""}catch(f){c=""}(d=k.isString(c)&&(c.match(/'([^']*)'/)||
c.match(/"([^"]*)"/)))&&(c=d[1]);if("formatBlock"===a)if(!c||"p"==c){c=null;var e;if((a=n.getSelection(this.editor.window))&&0<a.rangeCount)if(a=a.getRangeAt(0))e=a.endContainer;for(;e&&e!==b.editNode&&e!==b.document;){if((a=e.tagName?e.tagName.toLowerCase():"")&&-1<h.indexOf(this.button.values,a)){c=a;break}e=e.parentNode}c||(c="noFormat")}else 0>h.indexOf(this.button.values,c)&&(c="noFormat");c!==this.button.get("value")&&this.button.set("value",c,!1)}}}});h.forEach(["fontName","fontSize","formatBlock"],
function(b){m.registry[b]=function(a){return new f({command:b,plainText:a.plainText})}});f._FontDropDown=e;f._FontNameDropDown=p;f._FontSizeDropDown=q;f._FormatBlockDropDown=r;return f});