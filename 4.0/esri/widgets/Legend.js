// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("./support/viewModelWiring ./Widget ./Legend/LegendViewModel ../core/watchUtils ../core/HandleRegistry ../core/lang ../core/screenUtils ../symbols/support/gfxUtils dojox/gfx dojox/gfx/matrix dojo/_base/lang dojo/dom-construct dojo/dom-style dojo/dom-class dojo/i18n!./Legend/nls/Legend".split(" "),function(h,u,v,p,w,x,q,y,r,z,s,f,A,m,l){return u.createSubclass({properties:{activeLayerInfos:{dependsOn:["viewModel.activeLayerInfos"]},layerInfos:{dependsOn:["viewModel.layerInfos"]},view:{dependsOn:["viewModel.view"]},
viewModel:{type:v}},declaredClass:"esri.widgets.Legend",baseClass:"esri-legend",constructor:function(){this._handles=new w;this._DOMByLayerId={}},postCreate:function(){this.inherited(arguments);this._createLegend()},destroy:function(){this._handles.destroy();this._handles=null},_getActiveLayerInfosAttr:h.createGetterDelegate("activeLayerInfos"),_setActiveLayerInfosAttr:h.createSetterDelegate("activeLayerInfos"),_getLayerInfosAttr:h.createGetterDelegate("layerInfos"),_setLayerInfosAttr:h.createSetterDelegate("layerInfos"),
_getViewAttr:h.createGetterDelegate("view"),_setViewAttr:h.createSetterDelegate("view"),_createLegend:function(){var a=this._buildLegendDOM(),b=this.viewModel.activeLayerInfos;b.length?b.forEach(function(b){this._createLegendForLayer(b,a)},this):a.message.textContent=l.noLegend;var d=b.on("change",function(d){var e,c=d.added;d.removed.forEach(function(a){(e=this._DOMByLayerId[a.layer.uid])&&this._toggleDisplay(e)},this);c.forEach(function(b){(e=this._DOMByLayerId[b.layer.uid])?this._toggleDisplay(e):
this._createLegendForLayer(b,a)},this);0===b.length?(this._toggleDisplay(a.message),a.message.textContent=l.noLegend):m.contains(a.message,"esri-hidden")||this._toggleDisplay(a.message)}.bind(this));this._handles.add(d,"activeLayerInfos-change")},_buildLegendDOM:function(){var a=this.domNode,b=f.create("div",{id:this.id+"_msg",className:"esri-legend__message",textContent:l.creatingLegend+"..."},a);return{widget:a,message:b}},_createLegendForLayer:function(a,b){var d=p.init(a,"version",function(){var e=
a.layer.uid,c;if(a.ready)c=this._buildLegendDOMForLayer(a,b),this._DOMByLayerId[e]=c.root,this._createLegendElements(a,c.layer).length&&-1!==this.viewModel.activeLayerInfos.indexOf(a)&&this._toggleDisplay(c.root);else if(c=this._DOMByLayerId[e])delete this._DOMByLayerId[e],f.destroy(c)}.bind(this)),g=p.init(a,"tearingDown",function(b){var c=a.layer.uid;if(b&&(b=this._DOMByLayerId[c]))this._handles.remove(c),delete this._DOMByLayerId[c],f.destroy(b)}.bind(this));this._handles.add([d,g],a.layer.uid)},
_buildLegendDOMForLayer:function(a,b){var d=f.create("div",{id:b.widget.id+"_"+a.layer.uid,className:"esri-legend__service esri-hidden"},b.widget),g=f.create("p",{textContent:a.title,className:"esri-legend__service-label"},d),e=f.create("div",{className:"esri-legend__layer"},d);return s.mixin(b,{root:d,title:g,layer:e})},_createLegendElements:function(a,b){var d=a.legendElements,g=a.layer;d.forEach(function(a){this._createLegendElement(a,b,g)},this);return d},_createLegendElement:function(a,b,d){var g=
"color-ramp"===a.type,e="opacity-ramp"===a.type,c=this._buildDOMForElement(b,a.title,g||e);"symbol-table"===a.type||"size-ramp"===a.type?a.infos.forEach(function(a){this._buildDOMForElementInfo(a,c,d)},this):(g||e)&&this._buildRampDOM(a.infos,c.body,a.overlayColor,e)},_buildDOMForElement:function(a,b,d){b="string"===typeof b?b:b&&this._getTitle(b,d);d=f.create("div",{className:"esri-legend__layer-table"},a);b=b?f.create("div",{className:"esri-legend__layer-caption",textContent:b},d):null;var g=f.create("div",
{className:"esri-legend__layer-body"},d);return{layer:a,table:d,caption:b,body:g}},_buildDOMForElementInfo:function(a,b,d){b=f.create("div",{className:"esri-legend__layer-row"},b.body);var g=22,e=22,c=a.symbol,t=c.type,k=q.pt2px(c.size);c&&("simple-marker-symbol"===t?(g=Math.min(Math.max(g,k+6),125),e=Math.min(Math.max(e,k+6),125)):"picture-marker-symbol"==t&&(g=Math.min(Math.max(g,q.pt2px(c.width)),125),e=Math.min(q.pt2px(c.height)||e,125)));c=f.create("div",{className:"esri-legend__layer-cell esri-legend__layer-cell--symbols"},
b);this._drawSymbol(c,a.symbol,g,e,d);m.add(c.firstChild,"esri-legend__symbol");f.create("div",{className:"esri-legend__layer-cell esri-legend__layer-cell--info"},b).textContent=a.label||""},_drawSymbol:function(a,b,d,g,e){"picture-marker-symbol"===b.type&&(a.style.opacity=e.opacity);a=r.createSurface(a,d,g);var c=y.getShapeDescriptors(b),f=c.defaultShape,k=f&&"text"===f.type,h;try{k&&!f.text&&(f.text="Aa"),h=a.createShape(f).setFill(c.fill).setStroke(c.stroke),k&&h.setFont(c.font)}catch(m){a.clear();
a.destroy();return}var n=h.getBoundingBox(),c=n.width,f=n.height,l=-(n.x+c/2),p=-(n.y+f/2),k=a.getDimensions(),l={dx:l+k.width/2,dy:p+k.height/2};"simple-marker-symbol"===b.type&&"path"===b.style&&(b=e._getScaleMatrix(n,q.pt2px(b.size)),h.applyTransform(z.scaleAt(b.xx,b.yy,{x:k.width/2,y:k.height/2})));if(c>d||f>g)b=c/d>f/g,d=((b?d:g)-5)/(b?c:f),s.mixin(l,{xx:d,yy:d});h.applyTransform(l);return a},_buildRampDOM:function(a,b,d,g){var e=a.length-1,c,h,k;b=f.create("div",{className:"esri-legend__layer-row"},
b);c=f.create("div",{className:"esri-legend__layer-cell esri-legend__layer-cell--symbols",style:"width:24px"},b);c=f.create("div",{className:"esri-legend__ramps"},c);c=f.create("div",{className:"esri-legend__color-ramp "+(g?"esri-legend__opacity-ramp":"")},c);g=f.create("div",{className:"esri-legend__layer-cell esri-legend__layer-cell--info"},b);e=2<e?25*e:50;A.set(c,"height",e+"px");b=r.createSurface(c,"100%",e);try{k=b.createRect({x:0,y:0,width:"100%",height:e}),k.setFill({type:"linear",x1:0,y1:0,
x2:0,y2:e,colors:a}).setStroke(null),d&&0<d.a&&b.createRect({width:"100%",height:e}).setFill(d).setStroke(null)}catch(l){b.clear(),b.destroy()}h=f.create("div",{className:"esri-legend__ramp-labels",style:{height:e+"px"}},g);a.forEach(function(a){a.label&&f.create("div",{className:"esri-legend__ramp-label",innerHTML:a.label},h)})},_getTitle:function(a,b){return x.substitute({field:a.field,normField:a.normField},l[b?a.ratioPercentTotal&&"showRatioPercentTotal"||a.ratioPercent&&"showRatioPercent"||a.ratio&&
"showRatio"||a.normField&&"showNormField"||a.field&&"showField"||null:a.normField&&"showNormField"||(a.normByPct?"showNormPct":null)||a.field&&"showField"||null])},_toggleDisplay:function(a){m.contains(a,"esri-hidden")?m.remove(a,"esri-hidden"):m.add(a,"esri-hidden")}})});