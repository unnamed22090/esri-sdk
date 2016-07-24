// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["./Accessor","./accessorSupport/MultiOriginStore","./accessorSupport/read","./accessorSupport/utils"],function(b,a,c,d){a=a.default;return b.createSubclass({declaredClass:"esri.core.MultiOriginJSONSupport",constructor:function(){d.getProperties(this).store=new a},read:c.read})});