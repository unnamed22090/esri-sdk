// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/Deferred","../core/Accessoire","../core/AccessoirePromise","../core/Scheduler"],function(a,d,e,f,c){var b={RUNNING:"running",FINISHED:"finished",STOPPED:"stopped"};a=a([e,f],{declaredClass:"esri.views.ViewAnimation",classMetadata:{properties:{state:{}}},constructor:function(){this._dfd=new d;this.addResolvingPromise(this._dfd.promise)},initialize:function(){this.state=b.RUNNING},stop:function(){this.state=b.STOPPED;c.schedule(this._dfd.resolve)},finish:function(){this.state=
b.FINISHED;c.schedule(this._dfd.resolve)},state:null,target:null});a.State=b;return a});