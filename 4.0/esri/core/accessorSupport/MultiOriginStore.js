// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","./PropertyOrigin"],function(g,h,f){g=function(){function d(){this._propertyOriginMap={};this._originStores=Array(f.default.NUM);this._values={}}d.prototype.get=function(a,b){var c=void 0===b?this._values:this._originStores[b];return c?c[a]:void 0};d.prototype.keys=function(){return Object.keys(this._values)};d.prototype.set=function(a,b,c){void 0===c&&(c=f.default.USER);var e=this._originStores[c];e||(e={},this._originStores[c]=e);e[a]=b;return!(a in this._values)||this._propertyOriginMap[a]<=
c?(e=this._values[a],this._values[a]=b,this._propertyOriginMap[a]=c,e!==b):!1};d.prototype.clear=function(a,b){void 0===b&&(b=f.default.USER);var c=this._originStores[b];if(c){var e=c[a];delete c[a];if(a in this._values&&this._propertyOriginMap[a]===b){delete this._values[a];for(c=b-1;0<=c;c--){var d=this._originStores[c];if(d&&a in d){this._values[a]=d[a];this._propertyOriginMap[a]=c;break}}}return e}};d.prototype.has=function(a,b){var c=void 0===b?this._values:this._originStores[b];return c?a in
c:!1};d.prototype.revert=function(a,b){return this.set(a,this.get(a,b))};d.prototype.revertAll=function(a){var b=this.getAll(a),c=[],d;for(d in b)this.revert(d,a)&&c.push(d);return c};d.prototype.getOrigin=function(a){return this._propertyOriginMap[a]};d.prototype.getValueOrigin=function(a){var b=this.getOrigin(a);if(void 0!==b){var c=this.get(a,b),d=b;for(b--;0<=b;){if(this.has(a,b)){if(this.get(a,b)!==c)break;d=b}b--}return d}};d.prototype.getAll=function(a){return this._originStores[a]};d.prototype.persist=
function(a){var b={},c;for(c in this._values)this.getValueOrigin(c)>=a&&(b[c]=this._values[c]);return b};return d}();Object.defineProperty(h,"__esModule",{value:!0});h.default=g});