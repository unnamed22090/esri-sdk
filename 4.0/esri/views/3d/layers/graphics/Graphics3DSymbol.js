// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../../../core/declare","../../support/PromiseLightweight","./Graphics3DSymbolLayerFactory","./Graphics3DGraphic"],function(m,n,p,q){return m(n.Promise,{constructor:function(a,e,b){this.symbol=a;a=a.symbolLayers;b&&(a=b.concat(a));b=a.length;this.childGraphics3DSymbols=Array(a.length);this.childGraphics3DSymbolPromises=Array(a.length);for(var d=e.layerOrder,c=0,h=0,k=!1,l=function(a,b){b&&(this.childGraphics3DSymbols[a]=b,h++);c--;!this.isRejected()&&(k&&1>c)&&(0<h?this.resolve():this.reject())},
f=0;f<b;f++){var g=a.getItemAt(f);if(!1!==g.enable&&(e.layerOrder=d+(1-(1+f)/b),e.layerOrderDelta=1/b,g=p.make(g,e,g._ignoreDrivers)))c++,this.childGraphics3DSymbolPromises[f]=g,g.then(l.bind(this,f,g),l.bind(this,f,null))}e.layerOrder=d;k=!0;!this.isRejected()&&1>c&&(0<h?this.resolve():this.reject())},createGraphics3DGraphic:function(a,e){for(var b=Array(this.childGraphics3DSymbols.length),d=0;d<this.childGraphics3DSymbols.length;d++){var c=this.childGraphics3DSymbols[d];c&&(b[d]=c.createGraphics3DGraphic(a,
e))}return new q(a,this,b)},layerPropertyChanged:function(a,e){for(var b=this.childGraphics3DSymbols.length,d=0;d<b;d++){var c=this.childGraphics3DSymbols[d];if(c&&!c.layerPropertyChanged(a,e,d))return!1}return!0},setDrawOrder:function(a,e){for(var b=this.childGraphics3DSymbols.length,d=1/b,c=0;c<b;c++){var h=this.childGraphics3DSymbols[c];h&&h.setDrawOrder(a+(1-(1+c)/b),d,e)}},destroy:function(){this.isFulfilled()||this.reject();for(var a=0;a<this.childGraphics3DSymbolPromises.length;a++)this.childGraphics3DSymbolPromises[a]&&
this.childGraphics3DSymbolPromises[a].destroy()}})});