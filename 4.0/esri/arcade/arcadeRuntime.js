// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../geometry/Polygon ../Graphic ../geometry/Polyline ../geometry/Point ../geometry/Extent ../geometry/Multipoint ../geometry/SpatialReference ./languageUtils ./treeAnalysis ./Dictionary ./Feature ./FunctionWrapper ./functions/date ./functions/string ./functions/maths ./functions/geometry ./functions/stats ./ImmutablePathArray ./ImmutablePointArray ../geometry/Geometry".split(" "),function(qa,w,X,Y,Z,$,aa,ba,ca,d,k,z,B,D,da,ea,fa,ga,ha,J,ia,K){function E(b,a){for(var e=[],f=
0;f<a.arguments.length;f++)e.push(h(b,a.arguments[f]));return e}function m(b,a,e){try{return e(b,a,E(b,a))}catch(f){throw f;}}function F(b){return b instanceof u||b instanceof D}function h(b,a){try{switch(a.type){case "EmptyStatement":return n;case "VariableDeclarator":var e=null===a.init?null:h(b,a.init),f=a.id.name.toLowerCase();null!==b.localScope?b.localScope[f]={value:e,valueset:!0,node:a.init}:b.globalScope[f]={value:e,valueset:!0,node:a.init};return n;case "VariableDeclaration":for(var c=0;c<
a.declarations.length;c++)h(b,a.declarations[c]);return n;case "BlockStatement":var g;a:{for(var c=n,v=0;v<a.body.length;v++)if(c=h(b,a.body[v]),c instanceof x||c===A||c===L){g=c;break a}g=c}return g;case "FunctionDeclaration":var ja=a.id.name.toLowerCase();b.globalScope[ja]={valueset:!0,node:null,value:new D(a,b)};return n;case "ReturnStatement":var R;if(null===a.argument)R=new x(n);else{var ka=h(b,a.argument);R=new x(ka)}return R;case "IfStatement":var p;if("AssignmentExpression"===a.test.type||
"UpdateExpression"===a.test.type)throw Error(k.nodeErrorMessage(a.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var m=h(b,a.test);if(!0===m)p=h(b,a.consequent);else if(!1===m)p=null!==a.alternate?h(b,a.alternate):n;else throw Error(k.nodeErrorMessage(a,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"));return p;case "ExpressionStatement":var t;if("AssignmentExpression"===a.expression.type||"UpdateExpression"===a.expression.type)t=h(b,a.expression);else{var y=h(b,a.expression);t=y===n?n:new S(y)}return t;
case "AssignmentExpression":var q=h(b,a.right),c=null;g="";if("MemberExpression"===a.left.type){c=h(b,a.left.object);g=!0===a.left.computed?h(b,a.left.property):a.left.property.name;if(d.isArray(c))if(d.isNumber(g)){if(0>g||g>c.length)throw Error("Assignment outside of array bounds");if(g===c.length&&"\x3d"!==a.operator)throw Error("Invalid Parameter");c[g]=C(q,a.operator,c[g],a)}else throw Error("Invalid Parameter");else if(c instanceof z){if(!1===d.isString(g))throw Error("Dictionary accessor must be a string");
if(!0===c.hasField(g))c.setField(g,C(q,a.operator,c.field(g),a));else{if("\x3d"!==a.operator)throw Error("Invalid Parameter");c.setField(g,C(q,a.operator,null,a))}}else if(c instanceof B){if(!1===d.isString(g))throw Error("Feature accessor must be a string");if(!0===c.hasField(g))c.setField(g,C(q,a.operator,c.field(g),a));else{if("\x3d"!==a.operator)throw Error("Invalid Parameter");c.setField(g,C(q,a.operator,null,a))}}else{if(d.isImmutableArray(c))throw Error("Array is Immutable");throw Error("Invalid Parameter");
}v=n}else if(c=a.left.name.toLowerCase(),null!==b.localScope&&void 0!==b.localScope[c])b.localScope[c]={value:C(q,a.operator,b.localScope[c].value,a),valueset:!0,node:a.right},v=n;else if(void 0!==b.globalScope[c])b.globalScope[c]={value:C(q,a.operator,b.globalScope[c].value,a),valueset:!0,node:a.right},v=n;else throw Error("Variable not recognised");return v;case "UpdateExpression":var r;var l,c=null;g="";if("MemberExpression"===a.argument.type){c=h(b,a.argument.object);g=!0===a.argument.computed?
h(b,a.argument.property):a.argument.property.name;if(d.isArray(c))if(d.isNumber(g)){if(0>g||g>=c.length)throw Error("Assignment outside of array bounds");l=c[g];c[g]=!1===d.isNumber(l)?NaN:"++"===a.operator?l+1:l-1}else throw Error("Invalid Parameter");else if(c instanceof z){if(!1===d.isString(g))throw Error("Dictionary accessor must be a string");if(!0===c.hasField(g))l=c.field(g),c.setField(g,!1===d.isNumber(l)?NaN:"++"===a.operator?l+1:l-1);else throw Error("Invalid Parameter");}else if(c instanceof
B){if(!1===d.isString(g))throw Error("Feature accessor must be a string");if(!0===c.hasField(g))l=c.field(g),c.setField(g,!1===d.isNumber(l)?NaN:"++"===a.operator?l+1:l-1);else throw Error("Invalid Parameter");}else{if(d.isImmutableArray(c))throw Error("Array is Immutable");throw Error("Invalid Parameter");}r=!1===a.prefix?!1===d.isNumber(l)?NaN:l:!1===d.isNumber(l)?NaN:"++"===a.operator?l+1:l-1}else if(c=a.argument.name.toLowerCase(),null!==b.localScope&&void 0!==b.localScope[c])l=b.localScope[c].value,
b.localScope[c]={value:!1===d.isNumber(l)?NaN:"++"===a.operator?l+1:l-1,valueset:!0,node:a},r=!1===a.prefix?!1===d.isNumber(l)?NaN:l:!1===d.isNumber(l)?NaN:"++"===a.operator?l+1:l-1;else if(void 0!==b.globalScope[c])l=b.globalScope[c].value,b.globalScope[c]={value:!1===d.isNumber(l)?NaN:"++"===a.operator?l+1:l-1,valueset:!0,node:a},r=!1===a.prefix?!1===d.isNumber(l)?NaN:l:!1===d.isNumber(l)?NaN:"++"===a.operator?l+1:l-1;else throw Error("Variable not recognised");return r;case "BreakStatement":return A;
case "ContinueStatement":return L;case "ForStatement":null!==a.init&&h(b,a.init);g={testResult:!0,lastAction:n};do b:{v=b;q=a;r=g;if(null!==q.test){r.testResult=h(v,q.test);if(!1===r.testResult)break b;if(!0!==r.testResult)throw Error(k.nodeErrorMessage(q,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"));}r.lastAction=h(v,q.body);r.lastAction===A?r.testResult=!1:r.lastAction instanceof x?r.testResult=!1:null!==q.update&&h(v,q.update)}while(!0===g.testResult);c=g.lastAction instanceof x?g.lastAction:
n;return c;case "ForInStatement":return la(b,a);case "Identifier":var w;var s;try{var u=a.name.toLowerCase();if(null!==b.localScope&&void 0!==b.localScope[u])s=b.localScope[u],!0!==s.valueset&&(s.value=h(b,s.node),s.valueset=!0),w=s.value;else if(void 0!==b.globalScope[u])s=b.globalScope[u],!0!==s.valueset&&(s.value=h(b,s.node),s.valueset=!0),w=s.value;else throw Error(k.nodeErrorMessage(a,"RUNTIME","VARIABLENOTFOUND"));}catch(J){throw J;}return w;case "MemberExpression":return ma(b,a);case "Literal":return a.value;
case "ThisExpression":throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));case "CallExpression":return na(b,a);case "UnaryExpression":var M;try{var G=h(b,a.argument);if(d.isBoolean(G))if("!"===a.operator)M=!G;else throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));else if(d.isNumber(G))if("-"===a.operator)M=-1*G;else if("+"===a.operator)M=1*G;else throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));else throw Error(k.nodeErrorMessage(a,"RUNTIME",
"NOTSUPPORTEDTYPE"));}catch(K){throw K;}return M;case "BinaryExpression":return oa(b,a);case "LogicalExpression":var T;a:try{if("AssignmentExpression"===a.left.type||"UpdateExpression"===a.left.type)throw Error(k.nodeErrorMessage(a.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type)throw Error(k.nodeErrorMessage(a.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var E=[h(b,a.left),h(b,a.right)],U=E[0],V=E[1];if(d.isBoolean(U)&&
d.isBoolean(V))switch(a.operator){case "||":T=U||V;break a;case "\x26\x26":T=U&&V;break a;default:throw Error(k.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));}else throw Error(k.nodeErrorMessage(a,"RUNTIME","ONLYBOOLEAN"));}catch(O){throw O;}return T;case "ConditionalExpression":throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));case "ArrayExpression":try{c=[];for(g=0;g<a.elements.length;g++){var H=h(b,a.elements[g]);if(F(H))throw Error(k.nodeErrorMessage(a,"RUNTIME","FUNCTIONCONTEXTILLEGAL"));
c.push(H)}}catch(P){throw P;}return c;case "ObjectExpression":c={};for(g=0;g<a.properties.length;g++){var N=h(b,a.properties[g]);if(F(N.value))throw Error("Illegal Argument");if(!1===d.isString(N.key))throw Error("Illegal Argument");c[N.key.toString()]=N.value}var I=new z(c);I.immutable=!1;return I;case "Property":return{key:"Identifier"===a.key.type?a.key.name:h(b,a.key),value:h(b,a.value)};case "Array":throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));default:throw Error(k.nodeErrorMessage(a,
"RUNTIME","UNREOGNISED"));}}catch(Q){throw Q;}}function la(b,a){var e=h(b,a.right);"VariableDeclaration"===a.left.type&&h(b,a.left);var f=null,c="VariableDeclaration"===a.left.type?a.left.declarations[0].id.name:a.left.name;null!==b.localScope&&void 0!==b.localScope[c]&&(f=b.localScope[c]);null===f&&void 0!==b.globalScope[c]&&(f=b.globalScope[c]);if(null===f)throw Error(k.nodeErrorMessage(a,"RUNTIME","VARIABLENOTDECLARED"));if(d.isArray(e)||d.isString(e)){for(var e=e.length,g=0;g<e&&!(f.value=g,c=
h(b,a.body),c===A);g++)if(c instanceof x)return c;return n}if(d.isImmutableArray(e)){for(g=0;g<e.length()&&!(f.value=g,c=h(b,a.body),c===A);g++)if(c instanceof x)return c;return n}if(e instanceof z||e instanceof B){e=e.keys();for(g=0;g<e.length&&!(f.value=e[g],c=h(b,a.body),c===A);g++)if(c instanceof x)return c}else return n}function C(b,a,e,f){switch(a){case "\x3d":return b;case "/\x3d":return d.toNumber(e)/d.toNumber(b);case "*\x3d":return d.toNumber(e)*d.toNumber(b);case "-\x3d":return d.toNumber(e)-
d.toNumber(b);case "+\x3d":return d.isString(e)||d.isString(b)?d.toString(e)+d.toString(b):d.toNumber(e)+d.toNumber(b);case "%\x3d":return d.toNumber(e)%d.toNumber(b);default:throw Error(k.nodeErrorMessage(f,"RUNTIME","OPERATORNOTRECOGNISED"));}}function O(b,a,e,f){a=a.toLowerCase();switch(a){case "hasz":return b=b.hasZ,void 0===b?!1:b;case "hasm":return b=b.hasM,void 0===b?!1:b;case "spatialreference":return a=b.spatialReference._arcadeCacheId,void 0===a&&(e=!0,Object.freeze&&Object.isFrozen(b.spatialReference)&&
(e=!1),e&&(t++,a=b.spatialReference._arcadeCacheId=t)),b=new z({wkt:b.spatialReference.wkt,wkid:b.spatialReference.wkid}),void 0!==a&&(b._arcadeCacheId="SPREF"+a.toString()),b}switch(b.type){case "extent":switch(a){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return b=b[a],void 0!==b?b:null;case "type":return"Extent"}break;case "polygon":switch(a){case "rings":return a=d.isVersion4?b.cache._arcadeCacheId:b.getCacheValue("_arcadeCacheId"),void 0===
a&&(t++,a=t,d.isVersion4?b.cache._arcadeCacheId=a:b.setCacheValue("_arcadeCacheId",a)),b=new J(b.rings,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polygon"}break;case "point":switch(a){case "x":case "y":case "z":case "m":return void 0!==b[a]?b[a]:null;case "type":return"Point"}break;case "polyline":switch(a){case "paths":return a=d.isVersion4?b.cache._arcadeCacheId:b.getCacheValue("_arcadeCacheId"),void 0===a&&(t++,a=t,d.isVersion4?b.cache._arcadeCacheId=a:b.setCacheValue("_arcadeCacheId",
a)),b=new J(b.paths,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polyline"}break;case "multipoint":switch(a){case "points":return a=d.isVersion4?b.cache._arcadeCacheId:b.getCacheValue("_arcadeCacheId"),void 0===a&&(t++,a=t,d.isVersion4?b.cache._arcadeCacheId=a:b.setCacheValue("_arcadeCacheId",a)),b=new ia(b.points,b.spatialReference,!0===b.hasZ,!0===b.hasM,a,1);case "type":return"Multipoint"}}throw Error(k.nodeErrorMessage(f,"RUNTIME","PROPERTYNOTFOUND"));}function ma(b,a){try{var e=
h(b,a.object);if(null===e)throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTFOUND"));if(!1===a.computed){if(e instanceof z||e instanceof B)return e.field(a.property.name);if(e instanceof K)return O(e,a.property.name,b,a);throw Error(k.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}var f=h(b,a.property);if(e instanceof z||e instanceof B){if(d.isString(f))return e.field(f)}else if(e instanceof K){if(d.isString(f))return O(e,f,b,a)}else if(d.isArray(e)){if(d.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){if(f>=
e.length||0>f)throw Error(k.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return e[f]}}else if(d.isString(e)){if(d.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){if(f>=e.length||0>f)throw Error(k.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return e[f]}}else if(d.isImmutableArray(e)&&d.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){if(f>=e.length()||0>f)throw Error(k.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return e.get(f)}throw Error(k.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}catch(c){throw c;
}}function oa(b,a){try{var e=[h(b,a.left),h(b,a.right)],f=e[0],c=e[1];switch(a.operator){case "\x3d\x3d":return d.equalityTest(f,c);case "\x3d":return d.equalityTest(f,c);case "!\x3d":return!d.equalityTest(f,c);case "\x3c":return f<c;case "\x3e":return f>c;case "\x3c\x3d":return f<=c;case "\x3e\x3d":return f>=c;case "+":return d.isString(f)||d.isString(c)?d.toString(f)+d.toString(c):d.toNumber(f)+d.toNumber(c);case "-":return d.toNumber(f)-d.toNumber(c);case "*":return d.toNumber(f)*d.toNumber(c);
case "/":return d.toNumber(f)/d.toNumber(c);case "%":return d.toNumber(f)%d.toNumber(c);default:throw Error(k.nodeErrorMessage(a,"RUNTIME","OPERATORNOTRECOGNISED"));}}catch(g){throw g;}}function na(b,a){try{if("Identifier"!==a.callee.type)throw Error(k.nodeErrorMessage(a,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==b.localScope&&void 0!==b.localScope[a.callee.name.toLowerCase()]){var e=b.localScope[a.callee.name.toLowerCase()];if(e.value instanceof u)return e.value.fn(b,a);if(e.value instanceof D)return H(b,
a,e.value.definition);throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTAFUNCTION"));}if(void 0!==b.globalScope[a.callee.name.toLowerCase()]){e=b.globalScope[a.callee.name.toLowerCase()];if(e.value instanceof u)return e.value.fn(b,a);if(e.value instanceof D)return H(b,a,e.value.definition);throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTAFUNCTION"));}throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTFOUND"));}catch(f){throw f;}}function P(b){return null==b?"":d.isArray(b)||d.isImmutableArray(b)?"Array":
d.isDate(b)?"Date":d.isString(b)?"String":d.isBoolean(b)?"Boolean":d.isNumber(b)?"Number":b instanceof z?"Dictionary":b instanceof B?"Feature":b instanceof $?"Point":b instanceof X?"Polygon":b instanceof Z?"Polyline":b instanceof ba?"Multipoint":b instanceof aa?"Extent":F(b)?"Function":b===n?"Void":"number"===typeof b&&isNaN(b)?"Number":"Unrecognised Type"}function I(b,a,e,f){try{var c=h(b,a.arguments[e]);if(d.equalityTest(c,f))return h(b,a.arguments[e+1]);var g=a.arguments.length-e;return 1===g?
h(b,a.arguments[e]):2===g?null:I(b,a,e+2,f)}catch(k){throw k;}}function Q(b,a,e,f){try{if(!0===f)return h(b,a.arguments[e+1]);if(3===a.arguments.length-e)return h(b,a.arguments[e+2]);var c=h(b,a.arguments[e+2]);if(!1===d.isBoolean(c))throw Error("WHEN needs boolean test conditions");return Q(b,a,e+2,c)}catch(g){throw g;}}function y(b,a){var e=b.length,f=Math.floor(e/2);if(0===e)return[];if(1===e)return[b[0]];for(var c=y(b.slice(0,f),a),e=y(b.slice(f,e),a),f=[];0<c.length||0<e.length;)if(0<c.length&&
0<e.length){var d=a(c[0],e[0]);isNaN(d)&&(d=0);0>=d?(f.push(c[0]),c=c.slice(1)):(f.push(e[0]),e=e.slice(1))}else 0<c.length?(f.push(c[0]),c=c.slice(1)):0<e.length&&(f.push(e[0]),e=e.slice(1));return f}function W(b,a,e){try{var f=b.body;if(e.length!==b.params.length)throw Error("Invalid Parameter calls to function.");for(var c=0;c<e.length;c++)a.localScope[b.params[c].name.toLowerCase()]={d:null,value:e[c],valueset:!0,node:null};var d=h(a,f);if(d instanceof x)return d.value;if(d===A)throw Error("Cannot Break from a Function");
if(d===L)throw Error("Cannot Continue from a Function");return d instanceof S?d.value:d}catch(k){throw k;}}function H(b,a,e){return m(b,a,function(a,c,d){a={spatialReference:b.spatialReference,applicationCache:void 0===b.applicationCache?null:b.applicationCache,globalScope:b.globalScope,depthCounter:b.depthCounter+1,localScope:{}};if(64<a.depthCounter)throw Error("Exceeded maximum function depth");return W(e,a,d)})}function pa(b){return function(){var a={applicationCache:void 0===b.context.applicationCache?
null:b.context.applicationCache,spatialReference:b.context.spatialReference,localScope:{},depthCounter:b.context.depthCounter+1,globalScope:b.context.globalScope};if(64<a.depthCounter)throw Error("Exceeded maximum function depth");return W(b.definition,a,arguments)}}var x=function(){return function(b){this.value=b}}(),S=function(){return function(b){this.value=b}}(),u=function(){return function(b){this.fn=b}}(),n={type:"VOID"},A={type:"BREAK"},L={type:"CONTINUE"},t=0,p={};da.registerFunctions(p,m);
ea.registerFunctions(p,m);fa.registerFunctions(p,m);ga.registerFunctions(p,m,F);ha.registerFunctions(p,m);p["typeof"]=function(b,a){return m(b,a,function(a,b,c){d.pcCheck(c,1,1);a=P(c[0]);if("Unrecognised Type"===a)throw Error("Unrecognised Type");return a})};p.iif=function(b,a){try{d.pcCheck(null===a.arguments?[]:a.arguments,3,3);var e=h(b,a.arguments[0]);if(!1===d.isBoolean(e))throw Error("IF Function must have a boolean test condition");return!0===e?h(b,a.arguments[1]):h(b,a.arguments[2])}catch(f){throw f;
}};p.decode=function(b,a){try{if(2>a.arguments.length)throw Error("Missing Parameters");if(2===a.arguments.length)return h(b,a.arguments[1]);if(0===(a.arguments.length-1)%2)throw Error("Must have a default value result.");var e=h(b,a.arguments[0]);return I(b,a,1,e)}catch(d){throw d;}};p.when=function(b,a){try{if(3>a.arguments.length)throw Error("Missing Parameters");if(0===a.arguments.length%2)throw Error("Must have a default value result.");var e=h(b,a.arguments[0]);if(!1===d.isBoolean(e))throw Error("WHEN needs boolean test conditions");
return Q(b,a,0,e)}catch(f){throw f;}};p.top=function(b,a){return m(b,a,function(a,b,c){d.pcCheck(c,2,2);if(d.isArray(c[0]))return d.toNumber(c[1])>=c[0].length?c[0].slice(0):c[0].slice(0,d.toNumber(c[1]));if(d.isImmutableArray(c[0]))return d.toNumber(c[1])>=c[0].length()?c[0].slice(0):c[0].slice(0,d.toNumber(c[1]));throw Error("Top cannot accept this parameter type");})};p.first=function(b,a){return m(b,a,function(a,b,c){d.pcCheck(c,1,1);return d.isArray(c[0])?0===c[0].length?null:c[0][0]:d.isImmutableArray(c[0])?
0===c[0].length()?null:c[0].get(0):null})};p.sort=function(b,a){return m(b,a,function(a,b,c){d.pcCheck(c,1,2);a=c[0];d.isImmutableArray(a)&&(a=a.toArray());if(!1===d.isArray(a))throw Error("Illegal Argument");if(1<c.length){if(!1===F(c[1]))throw Error("Illegal Argument");var g=pa(c[1]);a=y(a,function(a,b){return g(a,b)})}else{if(0===a.length)return[];c={};for(b=0;b<a.length;b++){var h=P(a[b]);""!==h&&(c[h]=!0)}if(!0===c.Array||!0===c.Dictionary||!0===c.Feature||!0===c.Point||!0===c.Polygon||!0===
c.Polyline||!0===c.Multipoint||!0===c.Extent||!0===c.Function)return a.slice(0);b=0;var h="",k;for(k in c)b++,h=k;a=1<b||"String"===h?y(a,function(a,b){return null===a||void 0===a?null===b||void 0===b?0:1:null===b||void 0===b?-1:a.toString()<b.toString()?-1:a.toString()===b.toString()?0:1}):"Number"===h?y(a,function(a,b){return a-b}):"Boolean"===h?y(a,function(a,b){return a===b?0:b?-1:1}):"Date"===h?y(a,function(a,b){return b-a}):a.slice(0)}return a})};w.functionHelper={fixSpatialReference:d.fixSpatialReference,
parseArguments:E,standardFunction:m};w.executeScript=function(b,a,d){d||(d=new ca(102100));var f=a.vars,c=a.customfunctions,g={};f||(f={});c||(c={});var k=new z({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});k.immutable=!1;g.textformatting={value:k,valueset:!0,node:null};g.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null};g.pi={value:Math.PI,valueset:!0,node:null};for(var m in p)g[m]={value:new u(p[m]),valueset:!0,node:null};for(m in c)g[m]=
{value:new u(c[m]),"native":!0,valueset:!0,node:null};for(m in f)g[m]=f[m]instanceof Y?{value:new B(f[m]),valueset:!0,node:null}:{value:f[m],valueset:!0,node:null};b=h({spatialReference:d,globalScope:g,localScope:null,depthCounter:1,applicationCache:void 0===a.applicationCache?null:a.applicationCache},b.body[0].body);b instanceof x&&(b=b.value);b instanceof S&&(b=b.value);if(b===n)throw Error("Cannot return VOID");if(b===A)throw Error("Cannot return BREAK");if(b===L)throw Error("Cannot return CONTINUE");
if(b instanceof D)throw Error("Cannot return FUNCTION");if(b instanceof u)throw Error("Cannot return FUNCTION");return b};w.extractFieldLiterals=function(b,a){void 0===a&&(a=!1);return k.findFieldLiterals(b,a)};w.validateScript=function(b,a){return k.validateScript(b,a,"simple")};w.referencesMember=function(b,a){return k.referencesMember(b,a)};w.referencesFunction=function(b,a){return k.referencesFunction(b,a)}});