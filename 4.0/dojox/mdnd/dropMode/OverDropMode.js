//>>built
define("dojo/_base/kernel dojo/_base/declare dojo/_base/connect dojo/_base/array dojo/dom-geometry dojox/mdnd/AreaManager".split(" "),function(m,q,n,p,h){m=q("dojox.mdnd.dropMode.OverDropMode",null,{_oldXPoint:null,_oldYPoint:null,_oldBehaviour:"up",constructor:function(){this._dragHandler=[n.connect(dojox.mdnd.areaManager(),"onDragEnter",function(a,c){var b=dojox.mdnd.areaManager();-1==b._oldIndexArea&&(b._oldIndexArea=b._lastValidIndexArea)})]},addArea:function(a,c){var b=a.length,e=h.position(c.node,
!0);c.coords={x:e.x,y:e.y};if(0==b)a.push(c);else{for(var d=c.coords.x,e=0;e<b;e++)if(d<a[e].coords.x){for(d=b-1;d>=e;d--)a[d+1]=a[d];a[e]=c;break}e==b&&a.push(c)}return a},updateAreas:function(a){for(var c=a.length,b=0;b<c;b++)this._updateArea(a[b])},_updateArea:function(a){var c=h.position(a.node,!0);a.coords.x=c.x;a.coords.x2=c.x+c.w;a.coords.y=c.y},initItems:function(a){p.forEach(a.items,function(a){var b=h.position(a.item.node,!0);a.y=b.y+b.h/2});a.initItems=!0},refreshItems:function(a,c,b,e){if(-1!=
c&&a&&b&&b.h){b=b.h;a.margin&&(b+=a.margin.t);for(var d=a.items.length;c<d;c++){var g=a.items[c];g.y=e?g.y+b:g.y-b}}},getDragPoint:function(a,c,b){return{x:b.x,y:b.y}},getTargetArea:function(a,c,b){var e=0,d=c.x,g=c.y,k=a.length,f=0,h="right",l=!1;-1==b||3>arguments.length?l=!0:this._checkInterval(a,b,d,g)?e=b:(this._oldXPoint<d?f=b+1:(f=b-1,k=0,h="left"),l=!0);if(l)if("right"===h){for(;f<k;f++)if(this._checkInterval(a,f,d,g)){e=f;break}f==k&&(e=-1)}else{for(;f>=k;f--)if(this._checkInterval(a,f,d,
g)){e=f;break}f==k-1&&(e=-1)}this._oldXPoint=d;return e},_checkInterval:function(a,c,b,e){var d=a[c];a=d.coords;c=a.x2;var g=a.y,d=g+d.node.offsetHeight;return a.x<=b&&b<=c&&g<=e&&e<=d?!0:!1},getDropIndex:function(a,c){var b=a.items.length,e=c.y;if(0<b)for(var d=0;d<b;d++){if(e<a.items[d].y)return d;if(d==b-1)break}return-1},destroy:function(){p.forEach(this._dragHandler,n.disconnect)}});dojox.mdnd.areaManager()._dropMode=new dojox.mdnd.dropMode.OverDropMode;return m});