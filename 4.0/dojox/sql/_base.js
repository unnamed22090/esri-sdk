//>>built
define(["dojo","dijit","dojox","dojo/require!dojox/sql/_crypto"],function(h,l,f){h.provide("dojox.sql._base");h.require("dojox.sql._crypto");h.mixin(f.sql,{dbName:null,debug:h.exists("dojox.sql.debug")?f.sql.debug:!1,open:function(a){if(!this._dbOpen||a&&a!=this.dbName){this.dbName||(this.dbName="dot_store_"+window.location.href.replace(/[^0-9A-Za-z_]/g,"_"),63<this.dbName.length&&(this.dbName=this.dbName.substring(0,63)));a||(a=this.dbName);try{this._initDb(),this.db.open(a),this._dbOpen=!0}catch(b){throw b.message||
b;}}},close:function(a){if(!h.isIE&&(this._dbOpen||a&&a!=this.dbName)){a||(a=this.dbName);try{this.db.close(a),this._dbOpen=!1}catch(b){throw b.message||b;}}},_exec:function(a){try{this._initDb();this._dbOpen||(this.open(),this._autoClose=!0);var b=null,d=null,c=null,e=h._toArray(a),b=e.splice(0,1)[0];if(this._needsEncrypt(b)||this._needsDecrypt(b))d=e.splice(e.length-1,1)[0],c=e.splice(e.length-1,1)[0];this.debug&&this._printDebugSQL(b,e);if(this._needsEncrypt(b))return new f.sql._SQLCrypto("encrypt",
b,c,e,d),null;if(this._needsDecrypt(b))return new f.sql._SQLCrypto("decrypt",b,c,e,d),null;var g=this.db.execute(b,e),g=this._normalizeResults(g);this._autoClose&&this.close();return g}catch(k){k=k.message||k;console.debug("SQL Exception: "+k);if(this._autoClose)try{this.close()}catch(m){console.debug("Error closing database: "+m.message||m)}throw k;}},_initDb:function(){if(!this.db)try{this.db=google.gears.factory.create("beta.database","1.0")}catch(a){h.setObject("google.gears.denied",!0);if(f.off)f.off.onFrameworkEvent("coreOperationFailed");
throw"Google Gears must be allowed to run";}},_printDebugSQL:function(a,b){for(var d='dojox.sql("'+a+'"',c=0;c<b.length;c++)d="string"==typeof b[c]?d+(', "'+b[c]+'"'):d+(", "+b[c]);console.debug(d+")")},_normalizeResults:function(a){var b=[];if(!a)return[];for(;a.isValidRow();){for(var d={},c=0;c<a.fieldCount();c++){var e=a.fieldName(c),f=a.field(c);d[e]=f}b.push(d);a.next()}a.close();return b},_needsEncrypt:function(a){return/encrypt\([^\)]*\)/i.test(a)},_needsDecrypt:function(a){return/decrypt\([^\)]*\)/i.test(a)}});
h.declare("dojox.sql._SQLCrypto",null,{constructor:function(a,b,d,c,e){"encrypt"==a?this._execEncryptSQL(b,d,c,e):this._execDecryptSQL(b,d,c,e)},_execEncryptSQL:function(a,b,d,c){var e=this._stripCryptoSQL(a),g=this._flagEncryptedArgs(a,d),k=this;this._encrypt(e,b,d,g,function(d){var g=[],h=null;try{g=f.sql.db.execute(e,d)}catch(n){h=n.message||n}if(null!=h){if(f.sql._autoClose)try{f.sql.close()}catch(l){}c(null,!0,h.toString())}else g=f.sql._normalizeResults(g),f.sql._autoClose&&f.sql.close(),f.sql._needsDecrypt(a)?
(d=k._determineDecryptedColumns(a),k._decrypt(g,d,b,function(a){c(a,!1,null)})):c(g,!1,null)})},_execDecryptSQL:function(a,b,d,c){var e=this._stripCryptoSQL(a);a=this._determineDecryptedColumns(a);var g=[],k=null;try{g=f.sql.db.execute(e,d)}catch(h){k=h.message||h}if(null!=k){if(f.sql._autoClose)try{f.sql.close()}catch(l){}c(g,!0,k.toString())}else g=f.sql._normalizeResults(g),f.sql._autoClose&&f.sql.close(),this._decrypt(g,a,b,function(a){c(a,!1,null)})},_encrypt:function(a,b,d,c,e){this._finishedCrypto=
this._totalCrypto=0;this._finishedSpawningCrypto=!1;this._finalArgs=d;for(a=0;a<d.length;a++)if(c[a]){var g=d[a],k=a;this._totalCrypto++;f.sql._crypto.encrypt(g,b,h.hitch(this,function(a){this._finalArgs[k]=a;this._finishedCrypto++;this._finishedCrypto>=this._totalCrypto&&this._finishedSpawningCrypto&&e(this._finalArgs)}))}this._finishedSpawningCrypto=!0},_decrypt:function(a,b,d,c){this._finishedCrypto=this._totalCrypto=0;this._finishedSpawningCrypto=!1;this._finalResultSet=a;for(var e=0;e<a.length;e++){var g=
a[e],f;for(f in g)if("*"==b||b[f])this._totalCrypto++,this._decryptSingleColumn(f,g[f],d,e,function(a){c(a)})}this._finishedSpawningCrypto=!0},_stripCryptoSQL:function(a){a=a.replace(/DECRYPT\(\*\)/ig,"*");var b=a.match(/ENCRYPT\([^\)]*\)/ig);if(null!=b)for(var d=0;d<b.length;d++){var c=b[d],e=c.match(/ENCRYPT\(([^\)]*)\)/i)[1];a=a.replace(c,e)}b=a.match(/DECRYPT\([^\)]*\)/ig);if(null!=b)for(d=0;d<b.length;d++)c=b[d],e=c.match(/DECRYPT\(([^\)]*)\)/i)[1],a=a.replace(c,e);return a},_flagEncryptedArgs:function(a,
b){for(var d=RegExp(/([\"][^\"]*\?[^\"]*[\"])|([\'][^\']*\?[^\']*[\'])|(\?)/ig),c=0,e=[];null!=d.exec(a);)if(!/^[\"\']/.test(RegExp.lastMatch+"")){var f=!1;/ENCRYPT\([^\)]*$/i.test(RegExp.leftContext)&&(f=!0);e[c]=f;c++}return e},_determineDecryptedColumns:function(a){var b={};if(/DECRYPT\(\*\)/i.test(a))b="*";else for(var d=/DECRYPT\((?:\s*\w*\s*\,?)*\)/ig,c=d.exec(a);c;)c=(new String(RegExp.lastMatch)).replace(/DECRYPT\(/i,""),c=c.replace(/\)/,""),c=c.split(/\s*,\s*/),h.forEach(c,function(a){/\s*\w* AS (\w*)/i.test(a)&&
(a=a.match(/\s*\w* AS (\w*)/i)[1]);b[a]=!0}),c=d.exec(a);return b},_decryptSingleColumn:function(a,b,d,c,e){f.sql._crypto.decrypt(b,d,h.hitch(this,function(b){this._finalResultSet[c][a]=b;this._finishedCrypto++;this._finishedCrypto>=this._totalCrypto&&this._finishedSpawningCrypto&&e(this._finalResultSet)}))}});(function(){var a=f.sql;f.sql=new Function("return dojox.sql._exec(arguments);");h.mixin(f.sql,a)})()});