// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","./GLFBO","./Util"],function(e,f,d,c){return function(){function b(a){this.gl=a;this.depthFBO=void 0;this.height=this.width=this.viewportToRestore=null}b.prototype.setEnableState=function(a){a!==this.getEnableState()&&(a?this.enable():this.disable())};b.prototype.getEnableState=function(){return void 0!==this.depthFBO};b.prototype.getDepthFBO=function(){return this.depthFBO};b.prototype.enable=function(){c.assert(!this.getEnableState());var a=this.gl;this.depthFBO=new d(a.RGBA,
a.UNSIGNED_BYTE,!0,a.NEAREST,a,void 0)};b.prototype.disable=function(){c.assert(this.getEnableState());this.depthFBO.dispose();this.depthFBO=void 0};b.prototype.setupFBOs=function(a){c.assert(this.getEnableState());this.viewportToRestore=a=a.fullViewport;this.width=a[2];this.height=a[3];this.gl.viewport(0,0,this.width,this.height)};b.prototype.prepareDepthPass=function(){c.assert(this.getEnableState());var a=this.gl;this.depthFBO.setSize(this.width,this.height);this.depthFBO.bind();a.clearColor(0,
0,0,0);a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT)};b.prototype.finish=function(a){var b=this.gl;b.bindFramebuffer(b.FRAMEBUFFER,a);b.viewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3])};return b}()});