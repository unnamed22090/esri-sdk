//>>built
define(["dojo/_base/declare","./Default","./commonStacked"],function(e,l,f){return e("dojox.charting.plot2d.Stacked",l,{getSeriesStats:function(){return f.collectStats(this.series)},buildSegments:function(g,b){for(var d=this.series[g],a=b?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,e=b?Math.min(d.data.length-1,Math.ceil(this._hScaler.bounds.to)):d.data.length-1,c=null,k=[];a<=e;a++){var h=b?f.getIndexValue(this.series,g,a):f.getValue(this.series,g,d.data[a]?d.data[a].x:null);if(null!=h[0]&&
(b||null!=h[0].y))c||(c=[],k.push({index:a,rseg:c})),c.push(h[0]);else if(!this.opt.interpolate||b)c=null}return k}})});