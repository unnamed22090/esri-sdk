//>>built
define(["dojo","../util/oo","../plugins/_Plugin","../manager/_registry"],function(g,b,k,l){var h=null,m=b.declare(k,function(a){this.createDom()},{show:function(a,e){this.domNode.innerHTML=e;var c=a.data.x+a.data.width+this.mouse.origin.x+30,d=a.data.y+a.data.height+this.mouse.origin.y+30;g.style(this.domNode,{display:"inline",left:c+"px",top:d+"px"});var b=g.marginBox(this.domNode);this.createShape(c-this.mouse.origin.x,d-this.mouse.origin.y,b.w,b.h)},createShape:function(a,e,c,d){this.balloon&&
this.balloon.destroy();c=a+c;d=e+d;var b=[],f=function(){for(var a=0;a<arguments.length;a++)b.push(arguments[a])};f({x:a,y:e+5},{t:"Q",x:a,y:e},{x:a+5,y:e});f({t:"L",x:c-5,y:e});f({t:"Q",x:c,y:e},{x:c,y:e+5});f({t:"L",x:c,y:d-5});f({t:"Q",x:c,y:d},{x:c-5,y:d});f({t:"L",x:a+5,y:d});f({t:"Q",x:a,y:d},{x:a,y:d-5});f({t:"L",x:a,y:e+5});this.balloon=this.drawing.addUI("path",{points:b})},createDom:function(){this.domNode=g.create("span",{"class":"drawingTooltip"},document.body);g.style(this.domNode,{display:"none",
position:"absolute"})}});b=b.declare(k,function(a){h||(h=new m(a));!a.stencil&&this.button&&(this.connect(this.button,"onOver",this,"onOver"),this.connect(this.button,"onOut",this,"onOut"))},{width:300,height:200,onOver:function(){h.show(this.button,this.data.text)},onOut:function(){}});g.setObject("dojox.drawing.ui.Tooltip",b);l.register({name:"dojox.drawing.ui.Tooltip"},"stencil");return b});