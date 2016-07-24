// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","../languageUtils"],function(l,k,c){k.registerFunctions=function(h,g){h.trim=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,1,1);return c.toString(a[0]).trim()})};h.upper=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,1,1);return c.toString(a[0]).toUpperCase()})};h.proper=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,1,2);b=1;2===a.length&&"firstword"===c.toString(a[1]).toLowerCase()&&(b=2);f=/\s/;a=c.toString(a[0]);for(var d="",e=!0,h=0;h<a.length;h++){var g=
a[h];f.test(g)?1===b&&(e=!0):g.toUpperCase()!==g.toLowerCase()&&(e?(g=g.toUpperCase(),e=!1):g=g.toLowerCase());d+=g}return d})};h.lower=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,1,1);return c.toString(a[0]).toLowerCase()})};h.guid=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,0,1);if(0<a.length)switch(c.toString(a[0]).toLowerCase()){case "digits":return c.generateUUID().replace("-","").replace("-","").replace("-","").replace("-","");case "digits-hyphen":return c.generateUUID();
case "digits-hyphen-parentheses":return"("+c.generateUUID()+")"}return"{"+c.generateUUID()+"}"})};h.mid=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,2,3);b=c.toNumber(a[1]);if(isNaN(b))return"";0>b&&(b=0);if(2===a.length)return c.toString(a[0]).substr(b);f=c.toNumber(a[2]);if(isNaN(f))return"";0>f&&(f=0);return c.toString(a[0]).substr(b,f)})};h.find=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,2,3);b=0;if(2<a.length){b=c.toNumber(c.defaultUndefined(a[2],0));if(isNaN(b))return-1;
0>b&&(b=0)}return c.toString(a[1]).indexOf(c.toString(a[0]),b)})};h.left=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,2,2);b=c.toNumber(a[1]);if(isNaN(b))return"";0>b&&(b=0);return c.toString(a[0]).substr(0,b)})};h.right=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,2,2);b=c.toNumber(a[1]);if(isNaN(b))return"";0>b&&(b=0);return c.toString(a[0]).substr(-1*b,b)})};h.split=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,2,4);b=c.toNumber(c.defaultUndefined(a[2],-1));-1===b||
null===b?b=c.toString(a[0]).split(c.toString(a[1])):(isNaN(b)&&(b=-1),-1>b&&(b=-1),b=c.toString(a[0]).split(c.toString(a[1]),b));a=c.defaultUndefined(a[3],!1);if(!1===c.isBoolean(a))throw Error("Invalid Parameter");if(!1===a)return b;a=[];for(f=0;f<b.length;f++)""!==b[f]&&void 0!==b[f]&&a.push(b[f]);return a})};h.text=function(d,e){return g(d,e,function(b,f,a){c.pcCheck(a,1,2);return c.toStringExplicit(a[0],a[1])})};h.concatenate=function(d,e){return g(d,e,function(b,f,a){b=[];if(1>a.length)return"";
if(c.isArray(a[0])){f=c.defaultUndefined(a[2],"");for(var d=0;d<a[0].length;d++)b[d]=c.toStringExplicit(a[0][d],f);return 1<a.length?b.join(a[1]):b.join("")}if(c.isImmutableArray(a[0])){f=c.defaultUndefined(a[2],"");for(d=0;d<a[0].length();d++)b[d]=c.toStringExplicit(a[0].get(d),f);return 1<a.length?b.join(a[1]):b.join("")}for(d=0;d<a.length;d++)b[d]=c.toStringExplicit(a[d]);return b.join("")})};h.reverse=function(d,e){return g(d,e,function(b,d,a){c.pcCheck(a,1,1);if(c.isArray(a[0]))return b=a[0].slice(0),
b.reverse(),b;if(c.isImmutableArray(a[0]))return b=a[0].toArray().slice(0),b.reverse(),b;throw Error("Invalid Parameter");})};h.replace=function(d,e){return g(d,e,function(b,d,a){c.pcCheck(a,3,4);b=c.toString(a[0]);d=c.toString(a[1]);var e=c.toString(a[2]);return(4===a.length?c.toBoolean(a[3]):1)?c.multiReplace(b,d,e):b.replace(d,e)})}}});