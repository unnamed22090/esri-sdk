// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["./declare","./Accessor","./accessorSupport/read"],function(b,d,e){var c=d.createSubclass({declaredClass:"esri.core.JSONSupport",read:e.read}),f=function(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");var b=new this;b.read(a);return b};b.after(function(a){b.hasMixin(a,c)&&(a.fromJSON=f.bind(a))});return c});