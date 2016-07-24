// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/array","../../Graphic","../../geometry/Polyline","./TrackManager"],function(p,l,q,r,s){return p([s],{declaredClass:"esri.layers.StreamTrackManager",constructor:function(a){this.inherited(arguments)},initialize:function(a){this.inherited(arguments)},addFeatures:function(a,e){function h(c,d){var b,n,a,k;g[c]||(g[c]=[]);b=g[c];0<f&&(d.length>f&&d.splice(0,d.length-f),a=d.length+b.length,a>f&&(n=b.splice(0,a-f)));a=d.length;for(k=0;k<a;k+=1)b.push(d[k]);return{deletes:n,
adds:d}}var g,c,n,f,b={},d={},k;if(e)return this.inherited(arguments),b;g=this.trackMap;c=this.layer;n=c._trackIdField;f=c.maximumTrackPoints||0;l.forEach(a,function(c){var b=c.attributes[n];c.visible&&(d[b]||(d[b]=[]),d[b].push(c))});for(k in d)d.hasOwnProperty(k)&&(c=h(k,d[k]),b[k]=c);return b},removeFeatures:function(a){var e=[],h=this.layer.objectIdField,g=this.layer._trackIdField;a&&(l.forEach(a,function(c){var a,f,b,d;f=c.attributes[g];a=c.attributes[h];if(b=this.trackMap[f])for(c=0;c<b.length;c+=
1)if(d=b[c],d.attributes[h]===a){this.trackMap[f].splice(c,1);-1===l.indexOf(f)&&e.push(f);break}},this),0<a.length&&this.refreshTracks(e))},drawTracks:function(a){function e(d){var b=c[d],a=b&&1<b.length,e,l,m;if((m=h.trackLineMap[d])&&!a)g.remove(m),delete h.trackLineMap[d],m=null;if(!a)return!1;a=[];for(e=b.length-1;0<=e;e-=1)(l=b[e].geometry)&&a.push([l.x,l.y]);b={};b[f]=d;1<a.length&&(m?(d=m.geometry,d.removePath(0),d.addPath(a),m.setGeometry(d)):(m=new q(new r({paths:[a],spatialReference:n}),
null,b),g.add(m),h.trackLineMap[d]=m))}var h=this,g=this.container,c,n,f,b;if(g)if(c=this.trackMap,n=this.map.spatialReference,f=this.layer._trackIdField,a)l.forEach(a,function(b){e(b)});else for(b in c)c.hasOwnProperty(b)&&e(b)},refreshTracks:function(a){function e(a){var c,b;a=h[a]||[];c=a.length;for(b=0;b<c;b++)g._repaint(a[b],null,!0)}var h=this.trackMap,g=this.layer;g._getRenderer();var c;this.drawTracks(a);if(a)l.forEach(a,function(a){e(a)});else for(c in h)h.hasOwnProperty(c)&&e(c)},destroy:function(){this.inherited(arguments);
this.trackLineMap=null}})});