//>>built
define(["./_base","dojo/_base/lang","dojo/_base/declare","./matrix","./shape"],function(f,k,g,m,l){l=g("dojox.gfx.path.Path",l.Shape,{constructor:function(a){this.shape=k.clone(f.defaultPath);this.segments=[];this.tbbox=null;this.absolute=!0;this.last={};this.rawNode=a;this.segmented=!1},setAbsoluteMode:function(a){this._confirmSegmented();this.absolute="string"==typeof a?"absolute"==a:a;return this},getAbsoluteMode:function(){this._confirmSegmented();return this.absolute},getBoundingBox:function(){this._confirmSegmented();
return this.bbox&&"l"in this.bbox?{x:this.bbox.l,y:this.bbox.t,width:this.bbox.r-this.bbox.l,height:this.bbox.b-this.bbox.t}:null},_getRealBBox:function(){this._confirmSegmented();if(this.tbbox)return this.tbbox;var a=this.bbox,d=this._getRealMatrix();this.bbox=null;for(var c=0,e=this.segments.length;c<e;++c)this._updateWithSegment(this.segments[c],d);d=this.bbox;this.bbox=a;return this.tbbox=d?[{x:d.l,y:d.t},{x:d.r,y:d.t},{x:d.r,y:d.b},{x:d.l,y:d.b}]:null},getLastPosition:function(){this._confirmSegmented();
return"x"in this.last?this.last:null},_applyTransform:function(){this.tbbox=null;return this.inherited(arguments)},_updateBBox:function(a,d,c){c&&(d=m.multiplyPoint(c,a,d),a=d.x,d=d.y);this.bbox&&"l"in this.bbox?(this.bbox.l>a&&(this.bbox.l=a),this.bbox.r<a&&(this.bbox.r=a),this.bbox.t>d&&(this.bbox.t=d),this.bbox.b<d&&(this.bbox.b=d)):this.bbox={l:a,b:d,r:a,t:d}},_updateWithSegment:function(a,d){var c=a.args,e=c.length,b;switch(a.action){case "M":case "L":case "C":case "S":case "Q":case "T":for(b=
0;b<e;b+=2)this._updateBBox(c[b],c[b+1],d);this.last.x=c[e-2];this.last.y=c[e-1];this.absolute=!0;break;case "H":for(b=0;b<e;++b)this._updateBBox(c[b],this.last.y,d);this.last.x=c[e-1];this.absolute=!0;break;case "V":for(b=0;b<e;++b)this._updateBBox(this.last.x,c[b],d);this.last.y=c[e-1];this.absolute=!0;break;case "m":b=0;"x"in this.last||(this._updateBBox(this.last.x=c[0],this.last.y=c[1],d),b=2);for(;b<e;b+=2)this._updateBBox(this.last.x+=c[b],this.last.y+=c[b+1],d);this.absolute=!1;break;case "l":case "t":for(b=
0;b<e;b+=2)this._updateBBox(this.last.x+=c[b],this.last.y+=c[b+1],d);this.absolute=!1;break;case "h":for(b=0;b<e;++b)this._updateBBox(this.last.x+=c[b],this.last.y,d);this.absolute=!1;break;case "v":for(b=0;b<e;++b)this._updateBBox(this.last.x,this.last.y+=c[b],d);this.absolute=!1;break;case "c":for(b=0;b<e;b+=6)this._updateBBox(this.last.x+c[b],this.last.y+c[b+1],d),this._updateBBox(this.last.x+c[b+2],this.last.y+c[b+3],d),this._updateBBox(this.last.x+=c[b+4],this.last.y+=c[b+5],d);this.absolute=
!1;break;case "s":case "q":for(b=0;b<e;b+=4)this._updateBBox(this.last.x+c[b],this.last.y+c[b+1],d),this._updateBBox(this.last.x+=c[b+2],this.last.y+=c[b+3],d);this.absolute=!1;break;case "A":for(b=0;b<e;b+=7)this._updateBBox(c[b+5],c[b+6],d);this.last.x=c[e-2];this.last.y=c[e-1];this.absolute=!0;break;case "a":for(b=0;b<e;b+=7)this._updateBBox(this.last.x+=c[b+5],this.last.y+=c[b+6],d);this.absolute=!1}var h=[a.action];for(b=0;b<e;++b)h.push(f.formatNumber(c[b],!0));if("string"==typeof this.shape.path)this.shape.path+=
h.join("");else{b=0;for(e=h.length;b<e;++b)this.shape.path.push(h[b])}},_validSegments:{m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},_pushSegment:function(a,d){this.tbbox=null;var c=this._validSegments[a.toLowerCase()];"number"==typeof c&&(c?d.length>=c&&(c={action:a,args:d.slice(0,d.length-d.length%c)},this.segments.push(c),this._updateWithSegment(c)):(c={action:a,args:[]},this.segments.push(c),this._updateWithSegment(c)))},_collectArgs:function(a,d){for(var c=0;c<d.length;++c){var e=d[c];"boolean"==
typeof e?a.push(e?1:0):"number"==typeof e?a.push(e):e instanceof Array?this._collectArgs(a,e):"x"in e&&"y"in e&&a.push(e.x,e.y)}},moveTo:function(){this._confirmSegmented();var a=[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?"M":"m",a);return this},lineTo:function(){this._confirmSegmented();var a=[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?"L":"l",a);return this},hLineTo:function(){this._confirmSegmented();var a=[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?
"H":"h",a);return this},vLineTo:function(){this._confirmSegmented();var a=[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?"V":"v",a);return this},curveTo:function(){this._confirmSegmented();var a=[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?"C":"c",a);return this},smoothCurveTo:function(){this._confirmSegmented();var a=[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?"S":"s",a);return this},qCurveTo:function(){this._confirmSegmented();var a=
[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?"Q":"q",a);return this},qSmoothCurveTo:function(){this._confirmSegmented();var a=[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?"T":"t",a);return this},arcTo:function(){this._confirmSegmented();var a=[];this._collectArgs(a,arguments);this._pushSegment(this.absolute?"A":"a",a);return this},closePath:function(){this._confirmSegmented();this._pushSegment("Z",[]);return this},_confirmSegmented:function(){if(!this.segmented){var a=
this.shape.path;this.shape.path=[];this._setPath(a);this.shape.path=this.shape.path.join("");this.segmented=!0}},_setPath:function(a){a=k.isArray(a)?a:a.match(f.pathSvgRegExp);this.segments=[];this.absolute=!0;this.bbox={};this.last={};if(a){for(var d="",c=[],e=a.length,b=0;b<e;++b){var h=a[b],g=parseFloat(h);isNaN(g)?(d&&this._pushSegment(d,c),c=[],d=h):c.push(g)}this._pushSegment(d,c)}},setShape:function(a){this.inherited(arguments,["string"==typeof a?{path:a}:a]);this.segmented=!1;this.segments=
[];f.lazyPathSegmentation||this._confirmSegmented();return this},_2PI:2*Math.PI});g=g("dojox.gfx.path.TextPath",l,{constructor:function(a){"text"in this||(this.text=k.clone(f.defaultTextPath));"fontStyle"in this||(this.fontStyle=k.clone(f.defaultFont))},getText:function(){return this.text},setText:function(a){this.text=f.makeParameters(this.text,"string"==typeof a?{text:a}:a);this._setText();return this},getFont:function(){return this.fontStyle},setFont:function(a){this.fontStyle="string"==typeof a?
f.splitFontString(a):f.makeParameters(f.defaultFont,a);this._setFont();return this}});return f.path={Path:l,TextPath:g}});