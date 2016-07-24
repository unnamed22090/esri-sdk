//>>built
define("./_base/kernel ./has ./dom ./on ./_base/array ./_base/lang ./selector/_loader ./selector/_loader!default".split(" "),function(f,m,v,w,h,l,x,u){function s(a,b){var c=function(c,d){if("string"==typeof d&&(d=v.byId(d),!d))return new b([]);var e="string"==typeof c?a(c,d):c?c.end&&c.on?c:[c]:[];return e.end&&e.on?e:new b(e)};c.matches=a.match||function(a,b,d){return 0<c.filter([a],b,d).length};c.filter=a.filter||function(a,b,d){return c(b,d).filter(function(b){return-1<h.indexOf(a,b)})};if("function"!=
typeof a){var d=a.search;a=function(a,b){return d(b||document,a)}}return c}m.add("array-extensible",function(){return 1==l.delegate([],{length:1}).length&&!m("bug-for-in-skips-shadowed")});var t=Array.prototype,n=t.slice,y=t.concat,p=h.forEach,q=function(a,b,c){b=[0].concat(n.call(b,0));c=c||f.global;return function(d){b[0]=d;return a.apply(c,b)}},g=function(a){var b=this instanceof e&&m("array-extensible");"number"==typeof a&&(a=Array(a));var c=a&&"length"in a?a:arguments;if(b||!c.sort){for(var d=
b?this:[],g=d.length=c.length,f=0;f<g;f++)d[f]=c[f];if(b)return d;c=d}l._mixin(c,r);c._NodeListCtor=function(a){return e(a)};return c},e=g,r=e.prototype=m("array-extensible")?[]:{};e._wrap=r._wrap=function(a,b,c){a=new (c||this._NodeListCtor||e)(a);return b?a._stash(b):a};e._adaptAsMap=function(a,b){return function(){return this.map(q(a,arguments,b))}};e._adaptAsForEach=function(a,b){return function(){this.forEach(q(a,arguments,b));return this}};e._adaptAsFilter=function(a,b){return function(){return this.filter(q(a,
arguments,b))}};e._adaptWithCondition=function(a,b,c){return function(){var d=arguments,e=q(a,d,c);if(b.call(c||f.global,d))return this.map(e);this.forEach(e);return this}};p(["slice","splice"],function(a){var b=t[a];r[a]=function(){return this._wrap(b.apply(this,arguments),"slice"==a?this:null)}});p(["indexOf","lastIndexOf","every","some"],function(a){var b=h[a];r[a]=function(){return b.apply(f,[this].concat(n.call(arguments,0)))}});l.extend(g,{constructor:e,_NodeListCtor:e,toString:function(){return this.join(",")},
_stash:function(a){this._parent=a;return this},on:function(a,b){var c=this.map(function(c){return w(c,a,b)});c.remove=function(){for(var a=0;a<c.length;a++)c[a].remove()};return c},end:function(){return this._parent?this._parent:new this._NodeListCtor(0)},concat:function(a){var b=n.call(this,0),c=h.map(arguments,function(a){return n.call(a,0)});return this._wrap(y.apply(b,c),this)},map:function(a,b){return this._wrap(h.map(this,a,b),this)},forEach:function(a,b){p(this,a,b);return this},filter:function(a){var b=
arguments,c=this,d=0;if("string"==typeof a){c=k._filterResult(this,b[0]);if(1==b.length)return c._stash(this);d=1}return this._wrap(h.filter(c,b[d],b[d+1]),this)},instantiate:function(a,b){var c=l.isFunction(a)?a:l.getObject(a);b=b||{};return this.forEach(function(a){new c(b,a)})},at:function(){var a=new this._NodeListCtor(0);p(arguments,function(b){0>b&&(b=this.length+b);this[b]&&a.push(this[b])},this);return a._stash(this)}});var k=s(u,g);f.query=s(u,function(a){return g(a)});k.load=function(a,
b,c){x.load(a,b,function(a){c(s(a,g))})};f._filterQueryResult=k._filterResult=function(a,b,c){return new g(k.filter(a,b,c))};f.NodeList=k.NodeList=g;return k});