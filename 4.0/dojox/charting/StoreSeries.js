//>>built
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred"],function(d,e,f){return e("dojox.charting.StoreSeries",null,{constructor:function(c,a,b){this.store=c;this.kwArgs=a;this.value=b?"function"==typeof b?b:"object"==typeof b?function(g){var a={},c;for(c in b)a[c]=g[b[c]];return a}:function(a){return a[b]}:function(a){return a.value};this.data=[];this._initialRendering=!0;this.fetch()},destroy:function(){this.observeHandle&&this.observeHandle.remove()},setSeriesObject:function(c){this.series=
c},fetch:function(){function c(){a.data=d.map(a.objects,function(b){return a.value(b,a.store)});a._pushDataChanges()}var a=this;this.observeHandle&&this.observeHandle.remove();var b=this.store.query(this.kwArgs.query,this.kwArgs);f.when(b,function(b){a.objects=b;c()});b.observe&&(this.observeHandle=b.observe(c,!0))},_pushDataChanges:function(){this.series&&(this.series.chart.updateSeries(this.series.name,this,this._initialRendering),this._initialRendering=!1,this.series.chart.delayedRender())}})});