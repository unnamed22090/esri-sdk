// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../../../core/Accessoire","../../../core/HandleRegistry","./cssUtils","./Container","./RenderContext"],function(g,h,d,f,k){return g.createSubclass({classMetadata:{properties:{clipVisible:{}}},constructor:function(){this._handles=new h},getDefaults:function(a){return{context:new k,root:new f,wrapper:new f({stage:this,parent:this,surface:a.container})}},initialize:function(){this._handles.add(this.watch("clipVisible",this.rerender.bind(this)))},destroy:function(){this.stop();this._handles.destroy();
this._handles=null},_rerender:!1,clipVisible:!0,_stateSetter:function(a,b){b&&this._handles.remove("version");a&&this._handles.add(a.watch("version",this.rerender.bind(this)),"version");return a},rerender:function(){this._rerender||(this._rerender=!0,this._running&&this.task.isPaused()&&this.task.resume())},run:function(){this._running||(this.wrapper.addChild(this.root),this.task=this.scheduler.addFrameTask({render:this._render.bind(this)}),this._running=!0)},stop:function(){this._running&&(this.wrapper.removeChild(this.root),
this.task.remove(),this.task=null,this._running=!1)},addChild:function(a){return this.root.addChild(a)},addChildAt:function(a,b){return this.root.addChildAt(a,b)},removeChild:function(a){return this.root.removeChild(a)},removeAllChildren:function(){this.root.removeAllChildren()},removeChildAt:function(a){return this.root.removeChildAt(a)},contains:function(a){return this.root.contains(a)},getChildIndex:function(a){return this.root.getChildIndex(a)},getChildAt:function(a){return this.root.getChildAt(a)},
setChildIndex:function(a,b){return this.root.setChildIndex(a,b)},requestChildRender:function(a){this.rerender()},_render:function(){if(this._rerender){var a=this.context,b=this.state,c=this.wrapper,e=this.root;this._rerender=!1;a.setViewTransform(b.transformNoRotation);c.reflow(a);c.render(a);e.render(a);c=e.surface.style;e=this.clipVisible&&b.clipRect;d.setOrigin(c,b.screenCenter);d.setTransformStyle(c,d.rotateZ(b.rotation));d.clip(c,e);a.reset();this._rerender||this.task.pause()}}})});