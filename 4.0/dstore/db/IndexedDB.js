//>>built
define("dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/when dojo/promise/all dstore/Store dstore/SimpleQuery dstore/QueryResults".split(" "),function(z,M,F,B,w,G,N,L){function C(a){var d=new F;a.onsuccess=function(a){d.resolve(a.target.result)};a.onerror=function(){a.error.message=a.webkitErrorMessage;d.reject(a.error)};return d.promise}function D(a,d,b){if(t||x.length){a&&(x.push({cursor:a,priority:d,retry:b}),x.sort(function(a,b){return a.priority>b.priority?1:-1}));if(t>=O)return;var c=
x.pop();a=c&&c.cursor}if(a)try{a["continue"](),t++}catch(f){if(("TransactionInactiveError"===f.name||0===f.name)&&c)c.retry();else throw f;}}function H(){return!0}var x=[],O=1,t=0,y=window.IDBKeyRange||window.webkitIDBKeyRange;return z([G,N],{constructor:function(a){z.safeMixin(this,a);var d=this,b=this.dbConfig;this.indices=b.stores[this.storeName];this.cachedCount={};for(var c in d.indices)a=d.indices[c],"number"===typeof a&&(d.indices[c]={preference:a});this.db=this.db||b.db;if(!this.db){var f=
b.openRequest;f||(f=b.openRequest=window.indexedDB.open(b.name||"dojo-db",parseInt(b.version,10)),f.onupgradeneeded=function(){var a=d.db=f.result,c;for(c in b.stores){var n=b.stores[c];if(a.objectStoreNames.contains(c))m=f.transaction.objectStore(c);else var m=n.idProperty||"id",m=a.createObjectStore(c,{keyPath:m,autoIncrement:n[m]&&n[m].autoIncrement||!1});for(var l in n)!m.indexNames.contains(l)&&("autoIncrement"!==l&&!1!==n[l].indexed)&&m.createIndex(l,l,n[l])}},b.db=C(f));this.db=b.db.then(function(a){return d.db=
a})}},idProperty:"id",storeName:"",indices:{},transaction:function(){var a=this;this._currentTransaction=null;return{abort:function(){a._currentTransaction.abort()},commit:function(){a._currentTransaction=null}}},_getTransaction:function(){if(!this._currentTransaction){this.db||console.error("The database has not been initialized yet");this._currentTransaction=this.db.transaction([this.storeName],"readwrite");var a=this;this._currentTransaction.oncomplete=function(){a._currentTransaction=null};this._currentTransaction.onerror=
function(a){console.error(a)}}return this._currentTransaction},_callOnStore:function(a,d,b,c){var f=this;return B(this.db,function r(n){f.db.then&&(f.db=n);if(n=f._currentTransaction)var m=!0;else n=f._getTransaction();var l,e;if(m)try{e=n.objectStore(f.storeName),b&&(e=e.index(b)),l=e[a].apply(e,d)}catch(u){if("TransactionInactiveError"===u.name||"InvalidStateError"===u.name)return f._currentTransaction=null,r();throw u;}else e=n.objectStore(f.storeName),b&&(e=e.index(b)),l=e[a].apply(e,d);return c?
l:C(l)})},get:function(a){var d=this;return this._callOnStore("get",[a]).then(function(a){return d._restore(a)})},getIdentity:function(a){return a[this.idProperty]},put:function(a,d){d=d||{};this.cachedCount={};var b=this;return this._callOnStore(!1===d.overwrite?"add":"put",[a]).then(function(a){return b._restore(a)})},add:function(a,d){d=d||{};d.overwrite=!1;return this.put(a,d)},remove:function(a){this.cachedCount={};return this._callOnStore("delete",[a])},fetch:function(){return this._fetch(H)},
fetchRange:function(a){return this._fetch(H,a)},forEach:function(a,d){return this._fetch(function(b,c){a.call(d,b,c)})},_union:function(a,d,b){b=b||{};var c=b.start||0,f=b.end||Infinity,h=a.sort,r=a.select;b=a.filter;var n,m;h?(m={sort:h},n=this._createSortQuerier(m)):n=function(a){return a};var l=[],e=0,u=0,v=0,s=[],p,k={},A=[],g=this;return new L(B(b).then(function(b){return w(b.map(function(b,m){function r(a){P.push(a);for(var b=[],e=[];s.every(function(a){if(0<a.length)return(a=a[0])&&e.push(a),
b.push(a)});){if(v>=f||0===e.length){p=!0;return}a=n(e)[0];s[b.indexOf(a)].shift();if(v++>=c&&(A.push(a),!d(a))){p=!0;return}b=[];e=[]}return!0}var P=s[m]=[],t=g._query({filterFunction:a.filterFunction,filter:b,sort:h},function(a){if(!p){var b=g.getIdentity(a);u++;if(b in k)return!0;e++;k[b]=!0;return r(a)}});l[m]=t.totalLength;return t.then(function(a){r(null);return a})}))}).then(function(){return r?r.querier(A):A}),{totalLength:{then:function(){return w(l).then(function(a){return a.reduce(function(a,
b){return a+b})*e/(u||1)}).then.apply(this,arguments)}}})},_normalizeQuery:function(){function a(e){e.forEach(function v(e){if(f)throw Error("Can not process conditions after a union, rearrange the query with the union last");var p=e.type,k=[].slice.call(e.args,0),c=k[0],g=k[1];if(g&&g.fetch&&!g.data)l.push(g.fetch().then(function(a){g.data=a;v(e)},function(a){console.error("Failed to retrieved nested collection",a)}));else if("or"===p)d(k);else if("and"===p)a(k);else if("eq"===p)b(c,g);else if("gt"===
p||"gte"===p)k=h[c]||(h[c]={}),k.from=g,k.excludeFrom="gt"===p,b(c,k);else if("lt"===p||"lte"===p)k=h[c]||(h[c]={}),k.to=g,k.excludeTo="lt"===p,b(c,k);else if("in"===p)d((g.data||g).map(function(a){return{type:"eq",args:[c,a]}}));else if("contains"===p)k=h[c]||(h[c]={}),k.contains=g.data?g.data:g instanceof Array?g:[g],b(c,k);else if("match"===p)if(g=g.source,"^"===g[0]&&!g.match(/[\{\}\(\)\[\]\.\,\$\*]/))k=h[c]||(h[c]={}),g=g.slice(1),k.from=g,k.to=g+"~",b(c,k);else throw Error("The match filter only supports simple prefix matching like /^starts with/");
else throw Error('Unsupported filter type "'+p+'"');})}function d(b){f=b.map(function(b){h={};a([b]);return h})}function b(a,b){"boolean"!==typeof b&&(b&&(b.from||b.to?function(a,c){b.test=function(b){return!a||a<=b&&(!c||c>=b)};b.keyRange=a?c?y.bound(a,c,b.excludeFrom,b.excludeTo):y.lowerBound(a,b.excludeFrom):y.upperBound(c,b.excludeTo)}(b.from,b.to):"object"===typeof b&&b.contains&&function(a){var c,e=a[0];"object"===typeof e&&"match"===e.type?"^"===e.args[1].source[0]&&(c=e.args[1].source.slice(1),
c=y.bound(c,c+"~")):c=y.only(e);b.test=function(b){return a.every(function(a){if("object"===typeof a&&"match"===a.type){var c=a.args[1];return b.some(function(a){return!!c.test(a)})}return b&&-1<b.indexOf(a)})};b.keyRange=c}(b.contains)),h[a]=b)}var c,f,h={},r,n,m,l=[];this.queryLog.forEach(function(b){var d=b.type,f=b.normalizedArguments;if("filter"===d){r=f;var h=c;c=h?function(a){return b.querier(h(a))}:b.querier;a(f,!0)}else"sort"===d?(n=f[0],n.querier=b.querier):"select"===d&&(m=b)});c=c||function(a){return a};
return{filter:0<l.length?w(l).then(function(){return f}):f||h,filterFunction:c,filterOperator:r||null,sort:n,select:m}},_fetch:function(a,d){var b=this._normalizeQuery(),c=b.filter,f=this;return c instanceof Array||c.then?this._union(b,function(b){a(f._restore(b));return!0},d):this._query(b,function(b){a(f._restore(b));return!0},d)},_query:function(a,d,b){function c(a,b,c){v++;var d=h.indices[a];if(d&&!1!==d.indexed&&(b=b||d.preference*(c||1)||0.0010,b>u))return u=b,e=a,!0;v++}function f(){function a(b){t--;
p.reject(b);D()}B(h._callOnStore("openCursor",J,e,!0),function(c){t++;c.onsuccess=function(a){t--;var e=a.target.result;if(e){if(l){e.advance(l);t++;l=!1;return}q.preFilterOffset++;try{var g=e.value;b.join&&(g=b.join(g));return B(g,function(a){if(0<A([a]).length&&(q.offset++,q.offset>=r&&(K.push(a),!d(a,q.offset-r)||q.offset>=n-1))){c.lastCursor=e;p.resolve(K);D();return}return D(e,b.priority,function(){l=q.preFilterOffset;f()})})}catch(h){p.reject(h)}}else{if(!r||q.offset>=r)q.finished=!0;p.resolve(K)}D()};
c.onerror=a},a)}b=b||{};var h=this,r=b.start||0,n=b.end||Infinity,m,l,e,u=0,v=0,s,p=new F,k=p.promise,A=a.filterFunction;s=a.filter;var g=a.sort,x=a.select,w;for(w in s){var I=s[w];c(w,null,I&&(I.from||I.to)?0.1:1)}var E=JSON.stringify(a.filterOperator)+"-"+JSON.stringify(g),z;if(g)if(a=g[0],a.property===e||c(a.property,1))z=a.descending;else var C=!0,r=0,n=Infinity;var J;e?(m=e in s?(s=s[e])&&s.keyRange?s.keyRange:y.only(s):null,J=[m,z?"prev":"next"]):J=[];var q=h.cachedPosition;q&&q.queryId===E&&
q.offset<r&&1<v?(l=q.preFilterOffset+1,h.cachedPosition=q=M.mixin({},q)):(q=h.cachedPosition={offset:-1,preFilterOffset:-1,queryId:E},2>v&&(q.offset=q.preFilterOffset=(l=r)-1));var K=[];f();if(C){var G=d;d=H;k=k.then(function(a){var c=b.start||0,d=b.end||Infinity;a=g.querier(a).slice(c,d);a.forEach(G);return a})}x&&(k=k.then(function(a){return x.querier(a)}));return new L(k,{totalLength:{then:function(a,b){function c(a){h.cachedCount[E]=a;return Math.round((q.offset+1.01)/(q.preFilterOffset+1.01)*
a)}var d=h.cachedCount[E];return d?a(c(d)):q.finished?(d=new F,d.resolve(q.offset+1),d.then(a)):(m?h._callOnStore("count",[m],e):h._callOnStore("count")).then(c).then(a,b)}}})}})});