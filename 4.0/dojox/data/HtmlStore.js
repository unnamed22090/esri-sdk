//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/dom dojo/_base/xhr dojo/_base/kernel dojo/data/util/simpleFetch dojo/data/util/filter dojox/xml/parser".split(" "),function(l,q,m,p,r,n,u,s,h){l=l("dojox.data.HtmlStore",null,{constructor:function(a){a&&"urlPreventCache"in a&&(this.urlPreventCache=a.urlPreventCache?!0:!1);a&&"trimWhitespace"in a&&(this.trimWhitespace=a.trimWhitespace?!0:!1);if(a.url){if(!a.dataId)throw Error("dojo.data.HtmlStore: Cannot instantiate using url without an id!");
this.url=a.url;this.dataId=a.dataId}else a.dataId&&(this.dataId=a.dataId);a&&"fetchOnCreate"in a&&(this.fetchOnCreate=a.fetchOnCreate?!0:!1);this.fetchOnCreate&&this.dataId&&this.fetch()},url:"",dataId:"",trimWhitespace:!1,urlPreventCache:!1,fetchOnCreate:!1,_indexItems:function(){this._getHeadings();if(this._rootNode.rows){this._rootNode.tBodies&&0<this._rootNode.tBodies.length&&(this._rootNode=this._rootNode.tBodies[0]);var a;for(a=0;a<this._rootNode.rows.length;a++)this._rootNode.rows[a]._ident=
a+1}else{var b=1;for(a=0;a<this._rootNode.childNodes.length;a++)1===this._rootNode.childNodes[a].nodeType&&(this._rootNode.childNodes[a]._ident=b,b++)}},_getHeadings:function(){this._headings=[];this._rootNode.tHead?q.forEach(this._rootNode.tHead.rows[0].cells,m.hitch(this,function(a){a=h.textContent(a);this._headings.push(this.trimWhitespace?m.trim(a):a)})):this._headings=["name"]},_getAllItems:function(){var a=[],b;if(this._rootNode.rows)for(b=0;b<this._rootNode.rows.length;b++)a.push(this._rootNode.rows[b]);
else for(b=0;b<this._rootNode.childNodes.length;b++)1===this._rootNode.childNodes[b].nodeType&&a.push(this._rootNode.childNodes[b]);return a},_assertIsItem:function(a){if(!this.isItem(a))throw Error("dojo.data.HtmlStore: a function was passed an item argument that was not an item");},_assertIsAttribute:function(a){if("string"!==typeof a)throw Error("dojo.data.HtmlStore: a function was passed an attribute argument that was not an attribute name string");return q.indexOf(this._headings,a)},getValue:function(a,
b,c){a=this.getValues(a,b);return 0<a.length?a[0]:c},getValues:function(a,b){this._assertIsItem(a);var c=this._assertIsAttribute(b);return-1<c?(c=a.cells?h.textContent(a.cells[c]):h.textContent(a),[this.trimWhitespace?m.trim(c):c]):[]},getAttributes:function(a){this._assertIsItem(a);for(var b=[],c=0;c<this._headings.length;c++)this.hasAttribute(a,this._headings[c])&&b.push(this._headings[c]);return b},hasAttribute:function(a,b){return 0<this.getValues(a,b).length},containsValue:function(a,b,c){var d=
void 0;"string"===typeof c&&(d=s.patternToRegExp(c,!1));return this._containsValue(a,b,c,d)},_containsValue:function(a,b,c,d){a=this.getValues(a,b);for(b=0;b<a.length;++b){var e=a[b];if("string"===typeof e&&d)return null!==e.match(d);if(c===e)return!0}return!1},isItem:function(a){return a&&p.isDescendant(a,this._rootNode)},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){this._assertIsItem(a.item)},_fetchItems:function(a,b,c){if(this._rootNode)this._finishFetchItems(a,b,c);else if(this.url){var d=
this,e=r.get({url:this.url,handleAs:"text",preventCache:this.urlPreventCache});e.addCallback(function(e){var f=function(a,c){if(a.id==c)return a;if(a.childNodes)for(var b=0;b<a.childNodes.length;b++){var d=f(a.childNodes[b],c);if(d)return d}return null},k=document.createElement("div");k.innerHTML=e;d._rootNode=f(k,d.dataId);d._indexItems();d._finishFetchItems(a,b,c)});e.addErrback(function(b){c(b,a)})}else this._rootNode=p.byId(this.dataId),this._indexItems(),this._finishFetchItems(a,b,c)},_finishFetchItems:function(a,
b,c){c=[];var d=this._getAllItems();if(a.query){var e=a.queryOptions?a.queryOptions.ignoreCase:!1;c=[];var g={},f,k;for(f in a.query)k=a.query[f]+"","string"===typeof k&&(g[f]=s.patternToRegExp(k,e));for(e=0;e<d.length;++e){var h=!0,t=d[e];for(f in a.query)k=a.query[f]+"",this._containsValue(t,f,k,g[f])||(h=!1);h&&c.push(t)}}else 0<d.length&&(c=d.slice(0,d.length));b(c,a)},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},close:function(a){},getLabel:function(a){if(this.isItem(a))return a.cells?
"Item #"+this.getIdentity(a):this.getValue(a,"name")},getLabelAttributes:function(a){return a.cells?null:["name"]},getIdentity:function(a){this._assertIsItem(a);return this.hasAttribute(a,"name")?this.getValue(a,"name"):a._ident},getIdentityAttributes:function(a){return null},fetchItemByIdentity:function(a){var b=a.identity,c=this,d=null,e=null;if(this._rootNode)this._rootNode.rows[b+1]&&(d=this._rootNode.rows[b+1],a.onItem&&(e=a.scope?a.scope:n.global,a.onItem.call(e,d)));else if(this.url){var g=
r.get({url:this.url,handleAs:"text"});g.addCallback(function(f){var g=function(a,b){if(a.id==b)return a;if(a.childNodes)for(var c=0;c<a.childNodes.length;c++){var d=g(a.childNodes[c],b);if(d)return d}return null},l=document.createElement("div");l.innerHTML=f;c._rootNode=g(l,c.dataId);c._indexItems();if(c._rootNode.rows&&b<=c._rootNode.rows.length)d=c._rootNode.rows[b-1];else for(f=0;f<c._rootNode.childNodes.length;f++)if(1===c._rootNode.childNodes[f].nodeType&&b===h.textContent(c._rootNode.childNodes[f])){d=
c._rootNode.childNodes[f];break}a.onItem&&(e=a.scope?a.scope:n.global,a.onItem.call(e,d))});g.addErrback(function(b){a.onError&&(e=a.scope?a.scope:n.global,a.onError.call(e,b))})}else{this._rootNode=p.byId(this.dataId);this._indexItems();if(c._rootNode.rows)d=this._rootNode.rows[b+1];else for(g=0;g<c._rootNode.childNodes.length;g++)1===c._rootNode.childNodes[g].nodeType&&b===h.textContent(c._rootNode.childNodes[g])&&(d=c._rootNode.childNodes[g]);a.onItem&&(e=a.scope?a.scope:n.global,a.onItem.call(e,
d))}}});m.extend(l,u);return l});