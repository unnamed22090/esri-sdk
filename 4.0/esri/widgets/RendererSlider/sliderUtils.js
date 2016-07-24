// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("../../core/numberUtils dojo/i18n!./nls/RendererSlider dojo/_base/array dojo/_base/lang dojo/dom-style dojo/string dijit/Tooltip dojox/gfx".split(" "),function(w,n,p,v,e,x,y,z){return{histogramXAvgPadding:18,labelTopOffset:3,generateTransparentBackground:function(a,b,c,d){a=a.createRect({width:b,height:c}).setFill(d?this.getTransparentFill():null);a.moveToBack();return a},getTransparentFill:function(){return{type:"pattern",x:0,y:0,width:16,height:16,src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNjY2MiIC8+PHBhdGggZD0iTTAgMCBMOCAwIEw4IDggTDAgOCBaIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDgpIiAvPjxwYXRoIGQ9Ik0wIDAgTDggMCBMOCA4IEwwIDggWiIgZmlsbD0iI2NjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCw4KSIgLz48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkiIC8+PC9zdmc+"}},
generateHistogramSurface:function(a,b,c,d){a=z.createSurface(a,b,c);e.set(a.rawNode,{overflow:"visible",display:"inline-block",left:d+"px"});a.rawNode.setAttribute("class","esri-histogram-surface");return a},generateCountTooltips:function(a,b){console.log("i18n",n);var c=[],d;d=p.map(a.bins,function(b){return"object"===typeof b?b.count:b});d.reverse();p.forEach(d,v.hitch(this,function(a,d){var e=x.substitute(n.count,{count:a});c.push(new y({connectId:[b.children[d].rawNode],label:e}))}));return c},
generateHistogram:function(a,b,c,d,l){var k=a.createGroup(),h,m,f;k.rawNode.setAttribute("class","esri-histogram-group");h=p.map(b.bins,function(b){return"object"===typeof b?b.count:b});h.reverse();m=a.getDimensions().height/h.length;p.forEach(h,v.hitch(this,function(b,a){f=0<b?(c-this.histogramXAvgPadding)*(b/Math.max.apply(Math,h)):0;var d=k.createRect({width:f,height:m}).setFill("#aaa").setTransform(z.matrix.translate(0,m*a));d.rawNode.setAttribute("class","esri-histogram-bar");d.rawNode.setAttribute("shape-rendering",
"crispEdges")}));e.set(a.rawNode,{display:"inline-block",left:d+"px"});l||k.setTransform({dx:c,dy:0,xx:-1,xy:0,yx:0,yy:1});return k},generateAvgLine:function(a,b,c,d,l,k){var h=a.rawNode.getAttribute("width"),m=a.rawNode.getAttribute("height");c=Math.round(c);var f;f=a.createLine({x1:l?0:12,y1:c,x2:l?h-this.histogramXAvgPadding+4:h,y2:c}).setStroke({color:"#667"}).moveToBack();f.rawNode.setAttribute("shape-rendering","crispEdges");a=a.createImage({x:l?h-this.histogramXAvgPadding+6:0,y:c-8,width:12,
height:14,src:require.toUrl("esri/widgets/RendererSlider/images/xAvg.png")});b=k?w.format(parseFloat(b.toFixed(2))).toString()+"%":w.format(parseFloat(b.toFixed(2>d?2:d))).toString();b=x.substitute(n.statsAvg,{avg:b});b=new y({connectId:[a.rawNode],label:b});c>m||0>c?(e.set(f.rawNode,"display","none"),e.set(a.rawNode,"display","none")):(e.set(f.rawNode,"display","block"),e.set(a.rawNode,"display","block"));return{avgHandleLine:f,avgHandleImage:a,avgHandleTooltip:b}},getCombinedPrecision:function(a,
b){var c=this.getPrecision(a),d=this.getPrecision(b);return-10<a&&10>a&&-10<b&&10>b&&2>c&&2>d?2:c>d?c:d},getPrecision:function(a){for(var b=1;Math.round(a*b)/b!==a;)b*=10;a=Math.round(Math.log(b)/Math.LN10);return 20<a?20:a},_resetLabelPositions:function(a){p.forEach(a,function(b){if(b){var a=b.labelNode;a&&(e.set(a,"top","3px"),b.labelNode._autoPositioned=!1)}})},_autoPositionHandleLabels:function(a){var b=[];if(0!==a.length&&(this._resetLabelPositions(a),p.forEach(a,function(a,d){a&&a.labelNode&&
b.push({index:d,handle:a,label:a.labelNode,rect:a.labelNode.getBoundingClientRect()})}),0!==b.length))switch(b.length){case 1:break;case 2:this._autoPositionTwoHandles(a,b);break;case 3:this._autoPositionThreeHandles(a,b);break;default:this._autoPositionManyHandles(a,b)}},_autoPositionTwoHandles:function(a,b){var c,d;this.collisionCheck(b[0].rect,b[1].rect)&&(c=b[0].rect.top-b[1].rect.top,d=(b[0].rect.height-c)/2,c=this.labelTopOffset+d,d=this.labelTopOffset-d,e.set(b[0].label,"top",c+"px"),e.set(b[1].label,
"top",d+"px"),b[0].label._autoPositioned=!0,b[1].label._autoPositioned=!0)},_autoPositionThreeHandles:function(a,b){var c,d,l,k,h,m;p.forEach(b,v.hitch(this,function(a,f){var g=b[f-1];g&&g.rect&&this.collisionCheck(a.rect,g.rect)&&(a.label._autoPositioned&&!g.label._autoPositioned?(c=g.rect.top-a.rect.top,l=a.rect.height,k=l-c+this.labelTopOffset,e.set(g.label,"top",k+"px"),g.label._autoPositioned=!0):(!a.label._autoPositioned&&g.label._autoPositioned?(c=g.rect.top-a.rect.top,l=a.rect.height,k=-1*
(l-c)+Number(g.label.style.top.replace("px","")),e.set(a.label,"top",k+"px")):(c=g.rect.top-a.rect.top,d=(a.rect.height-c)/2,h=this.labelTopOffset-d,m=this.labelTopOffset+d,e.set(g.label,"top",m+"px"),e.set(a.label,"top",h+"px"),g.label._autoPositioned=!0),a.label._autoPositioned=!0))}));if(b[2].handle&&10>b[2].handle.style.top.replace("px","")){var f=b[2].label,q=b[1].label,r=b[0].label,n=f.getBoundingClientRect(),t=q.getBoundingClientRect(),u=r.getBoundingClientRect(),s;f._autoPositioned&&q._autoPositioned&&
r._autoPositioned?(n=Number(f.style.top.replace("px",""))+8,t=Number(q.style.top.replace("px",""))+8,u=Number(r.style.top.replace("px",""))+8,e.set(f,"top",n+"px"),e.set(q,"top",t+"px"),e.set(r,"top",u+"px")):(f._autoPositioned&&(s=Number(f.style.top.replace("px",""))+4,e.set(f,"top",s+"px")),q._autoPositioned&&t.top-n.top<t.height&&(s=Number(q.style.top.replace("px",""))+4,e.set(q,"top",s+"px")),u.top-t.top<u.height&&(s=Number(r.style.top.replace("px",""))+4,e.set(r,"top",s+"px")))}},_autoPositionManyHandles:function(){},
collisionCheck:function(a,b){return!(a.right<b.left||a.left>b.right||a.bottom<b.top||a.top>b.bottom)}}});