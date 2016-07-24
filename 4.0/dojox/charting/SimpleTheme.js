//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/_base/Color dojox/lang/utils dojox/gfx/gradutils".split(" "),function(f,l,p,g,n,q){var m=p("dojox.charting.SimpleTheme",null,{shapeSpaces:{shape:1,shapeX:1,shapeY:1},constructor:function(a){a=a||{};var e=m.defaultTheme;l.forEach("chart plotarea axis grid series marker indicator".split(" "),function(b){this[b]=f.delegate(e[b],a[b])},this);a.seriesThemes&&a.seriesThemes.length?(this.colors=null,this.seriesThemes=a.seriesThemes.slice(0)):
(this.seriesThemes=null,this.colors=(a.colors||m.defaultColors).slice(0));this.markerThemes=null;a.markerThemes&&a.markerThemes.length&&(this.markerThemes=a.markerThemes.slice(0));this.markers=a.markers?f.clone(a.markers):f.delegate(m.defaultMarkers);this.noGradConv=a.noGradConv;this.noRadialConv=a.noRadialConv;a.reverseFills&&this.reverseFills();this._current=0;this._buildMarkerArray()},clone:function(){var a=new this.constructor({chart:this.chart,plotarea:this.plotarea,axis:this.axis,grid:this.grid,
series:this.series,marker:this.marker,colors:this.colors,markers:this.markers,indicator:this.indicator,seriesThemes:this.seriesThemes,markerThemes:this.markerThemes,noGradConv:this.noGradConv,noRadialConv:this.noRadialConv});l.forEach("clone clear next skip addMixin post getTick".split(" "),function(e){this.hasOwnProperty(e)&&(a[e]=this[e])},this);return a},clear:function(){this._current=0},next:function(a,e,b){var c=n.merge,d;if(this.colors){d=f.delegate(this.series);var c=f.delegate(this.marker),
h=new g(this.colors[this._current%this.colors.length]),k;d.stroke&&d.stroke.color?(d.stroke=f.delegate(d.stroke),k=new g(d.stroke.color),d.stroke.color=new g(h),d.stroke.color.a=k.a):d.stroke={color:h};c.stroke&&c.stroke.color?(c.stroke=f.delegate(c.stroke),k=new g(c.stroke.color),c.stroke.color=new g(h),c.stroke.color.a=k.a):c.stroke={color:h};!d.fill||d.fill.type?d.fill=h:(k=new g(d.fill),d.fill=new g(h),d.fill.a=k.a);!c.fill||c.fill.type?c.fill=h:(k=new g(c.fill),c.fill=new g(h),c.fill.a=k.a)}else d=
this.seriesThemes?c(this.series,this.seriesThemes[this._current%this.seriesThemes.length]):this.series,c=this.markerThemes?c(this.marker,this.markerThemes[this._current%this.markerThemes.length]):d;d={series:d,marker:c,symbol:c&&c.symbol||this._markers[this._current%this._markers.length]};++this._current;e&&(d=this.addMixin(d,a,e));b&&(d=this.post(d,a));return d},skip:function(){++this._current},addMixin:function(a,e,b,c){if(f.isArray(b))l.forEach(b,function(b){a=this.addMixin(a,e,b)},this);else{var d=
{};"color"in b&&("line"==e||"area"==e?(f.setObject("series.stroke.color",b.color,d),f.setObject("marker.stroke.color",b.color,d)):f.setObject("series.fill",b.color,d));l.forEach("stroke outline shadow fill filter font fontColor labelWiring".split(" "),function(a){var c="marker"+a.charAt(0).toUpperCase()+a.substr(1),e=c in b;a in b&&(f.setObject("series."+a,b[a],d),e||f.setObject("marker."+a,b[a],d));e&&f.setObject("marker."+a,b[c],d)});"marker"in b&&(d.symbol=b.marker,d.symbol=b.marker);a=n.merge(a,
d)}c&&(a=this.post(a,e));return a},post:function(a,e){var b=a.series.fill,c;if(!this.noGradConv&&this.shapeSpaces[b.space]&&"linear"==b.type){if("bar"==e)c={x1:b.y1,y1:b.x1,x2:b.y2,y2:b.x2};else if(!this.noRadialConv&&"shape"==b.space&&("slice"==e||"circle"==e))c={type:"radial",cx:0,cy:0,r:100};if(c)return n.merge(a,{series:{fill:c}})}return a},getTick:function(a,e){var b=this.axis.tick,c=a+"Tick",d=n.merge;b?this.axis[c]&&(b=d(b,this.axis[c])):b=this.axis[c];e&&(b?e[c]&&(b=d(b,e[c])):b=e[c]);return b},
inspectObjects:function(a){l.forEach("chart plotarea axis grid series marker indicator".split(" "),function(e){a(this[e])},this);this.seriesThemes&&l.forEach(this.seriesThemes,a);this.markerThemes&&l.forEach(this.markerThemes,a)},reverseFills:function(){this.inspectObjects(function(a){a&&a.fill&&(a.fill=q.reverse(a.fill))})},addMarker:function(a,e){this.markers[a]=e;this._buildMarkerArray()},setMarkers:function(a){this.markers=a;this._buildMarkerArray()},_buildMarkerArray:function(){this._markers=
[];for(var a in this.markers)this._markers.push(this.markers[a])}});f.mixin(m,{defaultMarkers:{CIRCLE:"m-3,0 c0,-4 6,-4 6,0 m-6,0 c0,4 6,4 6,0",SQUARE:"m-3,-3 l0,6 6,0 0,-6 z",DIAMOND:"m0,-3 l3,3 -3,3 -3,-3 z",CROSS:"m0,-3 l0,6 m-3,-3 l6,0",X:"m-3,-3 l6,6 m0,-6 l-6,6",TRIANGLE:"m-3,3 l3,-6 3,6 z",TRIANGLE_INVERTED:"m-3,-3 l3,6 3,-6 z"},defaultColors:["#54544c","#858e94","#6e767a","#948585","#474747"],defaultTheme:{chart:{stroke:null,fill:"white",pageStyle:null,titleGap:20,titlePos:"top",titleFont:"normal normal bold 14pt Tahoma",
titleFontColor:"#333"},plotarea:{stroke:null,fill:"white"},axis:{stroke:{color:"#333",width:1},tick:{color:"#666",position:"center",font:"normal normal normal 7pt Tahoma",fontColor:"#333",labelGap:4},majorTick:{width:1,length:6},minorTick:{width:0.8,length:3},microTick:{width:0.5,length:1},title:{gap:15,font:"normal normal normal 11pt Tahoma",fontColor:"#333",orientation:"axis"}},series:{stroke:{width:1.5,color:"#333"},outline:{width:0.1,color:"#ccc"},shadow:null,fill:"#ccc",font:"normal normal normal 8pt Tahoma",
fontColor:"#000",labelWiring:{width:1,color:"#ccc"}},marker:{stroke:{width:1.5,color:"#333"},outline:{width:0.1,color:"#ccc"},shadow:null,fill:"#ccc",font:"normal normal normal 8pt Tahoma",fontColor:"#000"},indicator:{lineStroke:{width:1.5,color:"#333"},lineOutline:{width:0.1,color:"#ccc"},lineShadow:null,lineFill:null,stroke:{width:1.5,color:"#333"},outline:{width:0.1,color:"#ccc"},shadow:null,fill:"#ccc",radius:3,font:"normal normal normal 10pt Tahoma",fontColor:"#000",markerFill:"#ccc",markerSymbol:"m-3,0 c0,-4 6,-4 6,0 m-6,0 c0,4 6,4 6,0",
markerStroke:{width:1.5,color:"#333"},markerOutline:{width:0.1,color:"#ccc"},markerShadow:null}}});return m});