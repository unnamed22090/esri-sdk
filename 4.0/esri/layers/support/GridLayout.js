// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/array","../../geometry/SpatialReference","../../geometry/Extent","../../geometry/Polyline"],function(t,u,v,w,x){return t(null,{declaredClass:"esri.layers.GridLayout",constructor:function(a,d,b,e){this.origin=a;this.cellWidth=d.width;this.cellHeight=d.height;this.mapWidth=b.width;this.mapHeight=b.height;this.srInfo=e},setResolution:function(a){this._resolution=(a.xmax-a.xmin)/this.mapWidth;this.srInfo&&(a=Math.round(2*this.srInfo.valid[1]/this._resolution),
a=Math.round(a/this.cellWidth),this._frameStats=[a,0,a-1])},getCellCoordinates:function(a){var d=this._resolution,b=this.origin;return{row:Math.floor((b.y-a.y)/(this.cellHeight*d)),col:Math.floor((a.x-b.x)/(this.cellWidth*d))}},normalize:function(a){var d=this._frameStats;if(d){var b=d[0],e=d[1],d=d[2];a<e?(a%=b,a=a<e?a+b:a):a>d&&(a%=b)}return a},intersects:function(a,d){var b=this.srInfo;return b?u.some(d._getParts(b),function(b){return a.intersects(b.extent)}):a.intersects(d)},getCellExtent:function(a,
d){var b=this._resolution,e=this.origin,k=this.cellWidth,l=this.cellHeight;return new w(d*k*b+e.x,e.y-(a+1)*l*b,(d+1)*k*b+e.x,e.y-a*l*b,new v(e.spatialReference.toJSON()))},getLatticeID:function(a){var d=this.getCellCoordinates({x:a.xmin,y:a.ymax}),b=this.getCellCoordinates({x:a.xmax,y:a.ymin});a=d.row;var e=b.row,d=this.normalize(d.col),b=this.normalize(b.col);return a+"_"+e+"_"+d+"_"+b},sorter:function(a,d){return a<d?-1:1},getCellsInExtent:function(a,d){var b=this.getCellCoordinates({x:a.xmin,
y:a.ymax}),e=this.getCellCoordinates({x:a.xmax,y:a.ymin}),k=b.row,l=e.row,b=b.col,e=e.col,n=[],c,f,m,g=[],h=[],q,r,s,p=[];for(c=k;c<=l;c++)for(f=b;f<=e;f++)m=this.normalize(f),a=this.getCellExtent(c,m),n.push({row:c,col:m,extent:a,resolution:this._resolution}),d&&(g.push(a.xmin,a.xmax),h.push(a.ymin,a.ymax));b=this.normalize(b);e=this.normalize(e);g.sort(this.sorter);h.sort(this.sorter);f=g.length;for(c=f-1;0<=c;c--)c<f-1&&g[c]===g[c+1]&&g.splice(c,1);f=h.length;for(c=f-1;0<=c;c--)c<f-1&&h[c]===h[c+
1]&&h.splice(c,1);if(g.length&&h.length){m=g[0];q=g[g.length-1];r=h[0];s=h[h.length-1];f=g.length;for(c=0;c<f;c++)p.push([[g[c],s],[g[c],r]]);f=h.length;for(c=0;c<f;c++)p.push([[m,h[c]],[q,h[c]]]);c=x.fromJSON({paths:p,spatialReference:this.origin.spatialReference.toJSON()});n.push({latticeID:k+"_"+l+"_"+b+"_"+e,lattice:c,resolution:this._resolution})}return{minRow:k,maxRow:l,minCol:b,maxCol:e,cells:n}}})});