// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/_base/lang dojo/sniff dojox/gfx/_base ../core/lang ../core/screenUtils ../core/urlUtils ./MarkerSymbol ./Font".split(" "),function(l,g,m,h,d,f,n,p,q){var k={url:"",width:12,height:12,angle:0,xoffset:0,yoffset:0},e=l(p,{declaredClass:"esri.symbol.ShieldLabelSymbol",type:"shield-label-symbol",color:[255,255,255,1],width:24,height:24,font:h.defaultFont,constructor:function(a,b,c,d,e){a?g.isString(a)?(this.url=a,b&&(this.color=b),c&&(this.width=f.toPt(c)),d&&(this.height=
f.toPt(d)),void 0!==e&&(this.font=e)):(this.width=h.pt2px(a.width),this.height=h.pt2px(a.height),b=a.imageData,!(9>m("ie"))&&b&&(c=this.url,this.url="data:"+(a.contentType||"image")+";base64,"+b,this.imageData=c)):g.mixin(this,k)},getStroke:function(){return null},getFill:function(){return this.color},setWidth:function(a){this.width=f.toPt(a);return this},setHeight:function(a){this.height=f.toPt(a);return this},setUrl:function(a){a!==this.url&&(delete this.imageData,delete this.contentType);this.url=
a;return this},setFont:function(a){this.font=a;return this},setText:function(a){this.text=a;return this},getWidth:function(){return this.width},getHeight:function(){return this.height},getShapeDescriptors:function(){return{defaultShape:{type:"image",x:-Math.round(this.width/2),y:-Math.round(this.height/2),width:this.width,height:this.height,src:this.url||""},fill:null,stroke:null}},toJSON:function(){var a=this.url,b=this.imageData;if(0===a.indexOf("data:"))var c=a,a=b,b=c.indexOf(";base64,")+8,b=
c.substr(b);a=n.getAbsoluteUrl(a);a=d.fixJson(g.mixin(this.inherited(arguments),{url:a,imageData:b,contentType:this.contentType,width:this.width,height:this.height}));this.font?(c=new q(this.font),a.font=c.toJSON()):a.font=null;delete a.size;a.imageData||delete a.imageData;return a},clone:function(){return new e({color:d.clone(this.color),font:d.clone(this.font),height:this.height,url:this.url,width:this.width,imageData:this.imageData,contentType:this.contentType})}});e.defaultProps=k;return e});