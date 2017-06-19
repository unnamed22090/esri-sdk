/*! ArcGIS API for JavaScript 4.2 | Copyright (c) 2016 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["dojo/_base/declare","dojo/_base/lang","Quoin/View","Quoin/Handlebars","dojo/_base/array","dojo/dom-style","dojo/dom-construct","dojo/query","dojo/NodeList-traverse","dojo/NodeList-dom","dojo/NodeList-data"],function(e,i,t,o,n,d,s,r){return o.registerHelper("list-container",function(){return"<div data-dojo-attach-point='listContainer'></div>"}),e("Quoin.ListView",[t],{index:{},views:{},activeItems:function(){return r(this.listContainer).children(":not(._quoin-filtered)").length},filter:function(e,t){var o=this.collection.query(e,t);r(this.listContainer).children().style("display","none").addClass("_quoin-filtered"),o.forEach(i.hitch(this,function(e,i){var t=this.viewForModel(e.get("id"));r(t.domNode).style("display","block").removeClass("_quoin-filtered")}))},addItem:function(e,i){var t,o=i.index||0,n=e.get("id");this.views[n]?t=this.views[n]:(t=new this.view({model:e}),this.views[t.get("id")]=t,this.index[e.get("id")]=t.get("id")),t.placeAt(this.listContainer,o)},removeItem:function(e){var i=this.index[e],t=this.views[i].model.get("id");this.views[i].destroy(),delete this.views[i],delete this.index[t]},renderCollection:function(){this.collection.query(function(){return!0},{sort:[{attribute:this.sortAttribute,descending:this.sortDescending}]}).forEach(function(e,i){this.addItem(e,{index:i})},this)},postCreate:function(){this.inherited(arguments),this.renderCollection()},viewForModel:function(e){var i=this.index[e];return this.views[i]},constructor:function(e){this.collection=e.collection,this.view=e.view,this.sortAttribute=e.sortAttribute||"id",this.sortDescending=e.sortDescending||!0,this.collection.on("item:added",i.hitch(this,function(e){this.addItem(e.additions[0],{index:e.index})})),this.collection.on("item:removed",i.hitch(this,function(e){this.removeItem(e.removals[0].get("id"))})),this.collection.on("index-altered",i.hitch(this,function(e){this.index[e.newId]=this.index[e.oldId],delete this.index[e.oldId];var i=this.index[e.newId],t=this.viewForModel(e.newId),o=dojo.query(".application").indexOf(dojo.query(i)[0]);t.destroyRendering(),t.buildRendering(),t._createEvents(),s.place(t.domNode,this.listContainer,o)}))}})});