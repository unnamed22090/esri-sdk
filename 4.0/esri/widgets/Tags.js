// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("dojo/_base/array ../core/declare dojo/_base/lang dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-style dojo/html dojo/keys dojo/on dojo/query dojo/sniff dojo/string dstore/Memory dijit/focus dijit/form/TextBox dijit/registry dijit/Tooltip dijit/_OnDijitClickMixin dijit/_TemplatedMixin ./Widget dgrid/OnDemandGrid dgrid/Selection dgrid/Keyboard ../core/lang dojo/i18n!./Tags/nls/Tags dojo/NodeList-traverse dojo/NodeList-manipulate".split(" "),function(d,u,e,g,v,l,f,m,w,n,s,
h,x,t,y,p,B,C,z,D,E,F,G,H,I,A,J){return u([F,D,E],{_attachmentNode:"",_autocompleteList:"",_grid:"",_store:"",_matchParam:"",_idProperty:"",_gridId:"",_filterId:"",_placeHolder:"",_noDataMsg:"",_inputTextBox:"",_gridHasFocus:!1,_metaKeyPressed:!1,_shiftKeyPressed:!1,_CSS_STYLES:{CLASS_SELECTOR:".",ALL_SELECTOR:"\x3e",MULTI:"select2-container select2-container-multi",CHOICES:"select2-choices",CHOICE:"select2-search-choice",SEARCH_CHOICE_FOCUS:"select2-search-choice-focus",SEARCH_FIELD:"select2-search-field",
CLOSE_ICON:"select2-search-choice-close"},_selRows:[],_CHOICE_SELECTOR:"",_CHOICE_FOCUS:"",_CHOICE_FOCUS_ALL:"",declaredClass:"esri.dijit.Tags",templateString:'\x3cdiv class\x3d"${baseClass}"\x3e\x3c/div\x3e',baseClass:"esri-tags",required:!1,values:[],_setValueAttr:function(a){this._setTagsAttr(a)},_getValueAttr:function(){return this._getTagsAttr()},_setTagsAttr:function(a){a&&!Array.isArray(a)&&(a=a.split(","));this.clearTags();this.prepopulate(a?this._getUniqueTags(a):[])},_getTagsAttr:function(){return this.values?
this.values.join(","):""},maxWidth:"auto",minWidth:"auto",_setKnownTagsAttr:function(a){var b=[],c;for(c=0;c<a.length;c++)0>d.indexOf(this.values,a[c])&&b.push(a[c]);this._store=new y({idProperty:this._idProperty,data:b});this._grid.set("collection",this._store);this._grid.refresh()},constructor:function(a){this._idProperty=a.idProperty||"tag";this.maxWidth=a.maxWidth||"auto";this.minWidth=a.minWidth||"auto";this._matchParam=a.matchParam||"first";this.values=[];this._selRows=[];this._CHOICE_ALL_SELECTOR=
this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE+this._CSS_STYLES.ALL_SELECTOR;this._CHOICE_FOCUS=this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.SEARCH_CHOICE_FOCUS;this._CHOICE_FOCUS_ALL=this._CHOICE_FOCUS+this._CSS_STYLES.ALL_SELECTOR},postMixInProperties:function(){this.inherited(arguments);var a=(new Date).getTime();this._tagsId="userTags-"+a;this._gridId="grid-"+a;this._filterId="filter-"+a;this.i18n=J},postCreate:function(){this._attachmentNode=f.create("div",{id:this._tagsId,className:"grid_1"},
this.domNode);this._createContainerNode();this._createTagList();this._createDropDownList();this._createInput();var a=[{field:this._idProperty}],b=[{property:this._idProperty,ascending:!0}];this._store=new y({idProperty:this._idProperty,data:[]});this._grid=new (u([G,H,I]))({collection:this._store,showHeader:!1,noDataMessage:this.i18n.noTagsFound,selectionMode:"extended",allowSelectAll:!0,cellNavigation:!1,columns:a,sort:b,renderRow:this._renderItem},this._dropDownList);this._grid.startup();l.add(this._grid.domNode,
"grid-height-limiter");var c;this.own(this._inputTextBox.watch("value",e.hitch(this,function(a,b,d){c&&(clearTimeout(c),c=null);this._grid.refresh()})));this.own(this._grid.on(".dgrid-row:click",e.hitch(this,function(a){var b="";!this._shiftKeyPressed&&!this._metaKeyPressed?(b=this._grid.row(a).data.tag,this._createTags(b),this._store.remove(b),this._grid.refresh(),this._resetInputTextBox()):!a.shiftKey&&(!a.metaKey&&!a.ctrlKey)&&(b=this._selRows[0],this._createTags(b),this._store.remove(b),this._grid.refresh(),
this._resetInputTextBox())})));this.own(this._grid.on("dgrid-deselect",e.hitch(this,function(a){this._selRows=[];for(var b in this._grid.selection)this._grid.selection.hasOwnProperty(b)&&this._selRows.push(b)})));this.own(this._grid.on("dgrid-select",e.hitch(this,function(a){this._selRows=[];for(var b in this._grid.selection)this._grid.selection.hasOwnProperty(b)&&this._selRows.push(b)})));this.own(s(this.domNode,"keydown",e.hitch(this,this._keydownHandler)));this.own(s(this.domNode,"keyup",e.hitch(this,
this._keyupHandler)));window.onkeydown=e.hitch(this,function(a){if(a.shiftKey||a.ctrlKey||224===a.keyCode)this._metaKeyPressed=!0});this.own(s(document,"onkeydown",e.hitch(this,function(a){this._metaKeyPressed=this._shiftKeyPressed=!0})))},_keyupHandler:function(a){0<(this._inputTextBox?this._inputTextBox.get("value").length:0)?this._applyFilter():this._removeFilter()},_keydownHandler:function(a){this._clearMessage();var b=h(this._CHOICE_FOCUS,g.byId(this.id)),c=h(this._CSS_STYLES.CLASS_SELECTOR+
this._CSS_STYLES.CHOICE,g.byId(this.id)).last(),k,q;void 0!==p.curNode.value&&(q=p.curNode.value.length);switch(a.keyCode){case n.RIGHT_ARROW:this._navigate(b,q,c,"right");this._hideGrid();break;case n.LEFT_ARROW:this._navigate(b,q,c,"left");this._hideGrid();break;case n.DOWN_ARROW:a.preventDefault();this._unhighlightTag(b);"none"===m.get(this._gridId,"display")&&this._showGrid();this._gridHasFocus||(this._grid.focus(this._setFocusOnFirstRow(this._grid,0)),this._gridHasFocus=!0);break;case n.UP_ARROW:break;
case n.BACKSPACE:var r;if(0===q&&0===h(this._CHOICE_FOCUS_ALL).length&&void 0!==h(this._CHOICE_ALL_SELECTOR)[h(this._CHOICE_ALL_SELECTOR).length-1]&&(r=h(this._CHOICE_ALL_SELECTOR)[h(this._CHOICE_ALL_SELECTOR).length-1].title,0<h("li",this._attachmentNode).length&&(f.destroy(c[0]),void 0!==r)))try{this._store.add({tag:r})}catch(l){}if(0<h(this._CHOICE_FOCUS_ALL).length&&(r=h(this._CHOICE_FOCUS_ALL).text(),f.destroy(b[0]),void 0!==r))try{this._store.add({tag:r})}catch(s){}this._grid.refresh();0===
q&&this._hideGrid();this._removeTag(r);this._emitRemoved(r);this._emitChanged();this.validate();break;case n.CTRL:this._metaKeyPressed=!0;break;case n.META:this._metaKeyPressed=!0;break;case n.SHIFT:this._shiftKeyPressed=!0;break;case n.ENTER:if(0<q)b=this._stripHTML(p.curNode.value),b=b.split(","),k=[],d.forEach(b,function(a,b){-1===d.indexOf(k,a)&&k.push(t.trim(a))}),d.forEach(k,e.hitch(this,function(a,b){this._isEmpty(a)||this._contains(this.values,a)||this._createTags(a)}));else{for(b=0;b<this._selRows.length;b++)this._createTags(this._selRows[b]),
this._store.remove(this._selRows[b]);this._metaKeyPressed=this._shiftKeyPressed=!1}this._resetInputTextBox();a.preventDefault();p.focus(g.byId(this._filterId));break;case n.TAB:if(!(p.curNode.id===this._filterId&&0===q)){if(0<q)b=this._stripHTML(p.curNode.value),b=b.split(","),k=[],d.forEach(b,function(a,b){-1===d.indexOf(k,a)&&k.push(t.trim(a))}),d.forEach(k,e.hitch(this,function(a,b){this._isEmpty(a)||this._contains(this.values,a)||this._createTags(a)}));else{for(b=0;b<this._selRows.length;b++)this._createTags(this._selRows[b]),
this._store.remove(this._selRows[b]);this._metaKeyPressed=this._shiftKeyPressed=!1}this._resetInputTextBox();a.preventDefault();p.focus(g.byId(this._filterId))}break;case n.ESCAPE:this._hideGrid();break;default:-1<q&&("none"===m.get(g.byId(this._gridId),"display")&&this._showGrid(),this._unhighlightTag(b)),this._metaKeyPressed=!1}},_applyFilter:function(){var a=new this._store.Filter,b=this._inputTextBox?this._inputTextBox.get("value")+"":"",c=RegExp("^"+b.toLowerCase(),"i"),b=RegExp(b.toLowerCase(),
"i"),a="first"===this._matchParam?a.match(this._idProperty,c):a.match(this._idProperty,b);this._grid.set("collection",this._store.filter(a));this._grid.refresh()},_removeFilter:function(){this._grid.set("collection",this._store);this._grid.refresh()},_blurHandler:function(a,b,c){if(!this.focused){a=this._stripHTML(this._inputTextBox.value);if(0<a.length){var k=[];a=a.split(",");d.forEach(a,function(a,b){-1===d.indexOf(k,a)&&k.push(t.trim(a))});d.forEach(k,e.hitch(this,function(a,b){this._isEmpty(a)||
this._contains(this.values,a)||this._createTags(a)}));this._resetInputTextBox()}this._hideGrid()}this.validate()},_clearMessage:function(){this._displayMessage(null)},_displayMessage:function(a){var b=g.byId(this._tagsId);a&&this.focused?z.show(a,b):z.hide(b)},_resetInputTextBox:function(){this._inputTextBox.set("value","")},_isEmpty:function(a){return 0===a.trim().length},_navigate:function(a,b,c,k){0<a.length&&1>b?("right"===k?this._hightlightTag(a.next()):this._hightlightTag(a.prev()),this._unhighlightTag(a)):
1>b&&this._hightlightTag(c)},_contains:function(a,b){return 0<=d.indexOf(a,b)},_hightlightTag:function(a){a.addClass(this._CSS_STYLES.SEARCH_CHOICE_FOCUS)},_unhighlightTag:function(a){a.removeClass(this._CSS_STYLES.SEARCH_CHOICE_FOCUS)},_removeTag:function(a){a&&-1!==d.indexOf(this.values,a)&&this.values.splice(d.indexOf(this.values,a),1)},_hideGrid:function(){g.byId(this._gridId)&&m.set(g.byId(this._gridId),"display","none");this._gridHasFocus=!1},_showGrid:function(){m.set(g.byId(this._gridId),
"display","block");var a=m.get(g.byId(this._attachmentNode),"width");m.set(g.byId(this._gridId),"width",a+"px")},_setFocusOnFirstRow:function(a,b){return h(".dgrid-content .dgrid-cell",this._grid.domNode)[b]||h(".dgrid-content .dgrid-row",this._grid.domNode)[b]},_createTags:function(a){h(this._CHOICE_FOCUS,g.byId(this.id)).removeClass("select2-search-choice-focus");var b=f.create("li",null,this._autocompleteList);l.add(b,this._CSS_STYLES.CHOICE);b=f.create("div",{title:a},b);w.set(b,this._htmlEncode(a));
b=f.create("a",{href:"#"},b);l.add(b,this._CSS_STYLES.CLOSE_ICON);s(b,"click",e.hitch(this,function(a){var b=a.target.parentElement.innerText||a.target.parentElement.textContent;try{this._store.add({tag:b})}catch(d){}this._grid.refresh();this._removeTag(b);this._emitRemoved(b);this._emitChanged();f.destroy(a.target.parentNode.parentNode);a.preventDefault()}));b=C.byId(this._filterId);f.place(b.domNode,this._autocompleteList,"last");this._hideGrid();this.values.push(a);this._emitAdded(a);this._emitChanged()},
_emitAdded:function(a){this.emit("tags-add",{tag:a})},_emitRemoved:function(a){this.emit("tags-remove",{tag:a})},_emitChanged:function(){this.emit("tags-change",{tags:this.get("tags")})},_renderItem:function(a){return f.create("div",{innerHTML:a.tag})},_createContainerNode:function(){this._containerNode=f.create("div",null,this._attachmentNode);l.add(this._containerNode,this._CSS_STYLES.MULTI);m.set(this._containerNode,{maxWidth:this.maxWidth,minWidth:this.minWidth})},_createTagList:function(){this._autocompleteList=
f.create("ul",null,this._containerNode);l.add(this._autocompleteList,this._CSS_STYLES.CHOICES)},_createInput:function(){var a=f.create("li",null,this._autocompleteList,"last");l.add(a,this._CSS_STYLES.SEARCH_FIELD);this._inputTextBox=new B({id:this._filterId,placeHolder:this.i18n.addTags,intermediateChanges:!0,trim:!0,style:{border:"none"}},a);l.add(this._inputTextBox,"input-text-box");m.set(this._inputTextBox,"width",this.minWidth);(8<x("ie")||4<x("trident"))&&l.add(this._inputTextBox.domNode,"ie-style");
this.own(p.watch("curNode",e.hitch(this,this._blurHandler)))},_createDropDownList:function(){this._dropDownList=f.create("div",{id:this._gridId},this._containerNode);l.add(this._dropDownList,"drop-down-list");m.set(this._dropDownList,"width",this.minWidth)},_getUniqueTags:function(a){var b=[],c;d.forEach(a,e.hitch(this,function(a){c=this._stripHTML(a);A.isDefined(c)&&0<c.length&&b.push(c)}));return d.filter(b,e.hitch(this,function(a,c){return d.indexOf(b,a)===c}))},_stripHTML:function(a){return a&&
a.replace(/<(?:.|\s)*?>/g,"")},_htmlEncode:function(a){return!a?a:t.escape(a)},isValid:function(){var a=this.get("value");return!this.required||A.isDefined(a)&&0<a.length},validate:function(){this._created&&!this.isValid()?(v.set(this.domNode,"aria-invalid","true"),this._displayMessage(this.i18n.required)):(v.set(this.domNode,"aria-invalid","false"),this._clearMessage())},reset:function(){this.clearTags()},focus:function(){p.focus(this.domNode);this._inputTextBox.focus()},prepopulate:function(a){d.forEach(a,
e.hitch(this,function(a,c){this._createTags(a);this._store.remove(a)}))},clearTags:function(){var a=h(this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE,g.byId(this.id)),b=!1,c;0<a.length&&(b=!0,d.forEach(a,e.hitch(this,function(a,b){try{c=h(this._CHOICE_ALL_SELECTOR,g.byId(this.id))[0].title,this._store.add({tag:c})}catch(d){}f.destroy(a);this._emitRemoved(c)})),this.values=[],b&&this._emitChanged())},addStyledTags:function(a,b){l.add(g.byId(b),this._CSS_STYLES.MULTI);var c=f.create("ul",null,
g.byId(b));l.add(c,this._CSS_STYLES.CHOICES);m.set(c,"border","none");d.forEach(a,function(a,b){var d=f.create("li",null,c);m.set(d,"padding","3px 5px 3px 5px");l.add(d,"select2-search-resultSet");d=f.create("div",{title:a},d);w.set(d,a)})}})});