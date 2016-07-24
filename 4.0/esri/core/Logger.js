// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,k){var f={info:0,warn:1,error:2},g=function(){function a(b){void 0===b&&(b={});this.module=b.module||"";this.writer=b.writer||null;this.level=b.level||null;null!=b.enabled&&(this.enabled=!!b.enabled);a._loggers[this.module]=this;b=this.module.lastIndexOf(".");-1!==b&&(this.parent=a.getLogger(this.module.slice(0,b)))}a.prototype.log=function(b){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];this._isEnabled()&&this._matchLevel(b)&&(a=this._inheritedWriter())&&
a.apply(void 0,[b,this.module].concat(c))};a.prototype.error=function(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];this.log.apply(this,["error"].concat(b))};a.prototype.warn=function(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];this.log.apply(this,["warn"].concat(b))};a.prototype.info=function(){for(var a=[],c=0;c<arguments.length;c++)a[c-0]=arguments[c];this.log.apply(this,["info"].concat(a))};a.prototype.getLogger=function(b){return a.getLogger(this.module+"."+
b)};a.getLogger=function(b){var c=a._loggers[b];c||(c=new a({module:b}));return c};a.prototype._parentWithMember=function(a,c){for(var d=this;d&&null==d[a];)d=d.parent;return d?d[a]:c};a.prototype._inheritedWriter=function(){return this._parentWithMember("writer",this._consoleWriter)};a.prototype._consoleWriter=function(a,c){for(var d=[],e=2;e<arguments.length;e++)d[e-2]=arguments[e];console[a].apply(console,["["+c+"]"].concat(d))};a.prototype._matchLevel=function(a){return f[this._parentWithMember("level",
"error")]<=f[a]};a.prototype._isEnabled=function(){return this._parentWithMember("enabled",!0)};a._loggers={};return a}();g.getLogger("esri").level="error";return g});