// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/spref/templates/vertdef.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'vertdef\',minOccurs:0,\r\n      label:\'${i18nFgdc.spref.vertdef.caption}\'"\x3e\r\n      \r\n    \x3c!-- Altitude System  --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'altsys\',minOccurs:0,\r\n        label:\'${i18nFgdc.spref.vertdef.altsys.caption}\'"\x3e\r\n        \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'altdatum\',\r\n          label:\'${i18nFgdc.spref.vertdef.altsys.altdatum.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.altsys.altdatum.navd88}\',value:\'North American Vertical Datum of 1988\'"\x3e\x3c/div\x3e          \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.altsys.altdatum.ngvd29}\',value:\'National Geodetic Vertical Datum of 1929\'"\x3e\x3c/div\x3e            \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.alternates.other}\',value:\'_other\',isOther:true"\x3e\x3c/div\x3e  \r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'altres\',maxOccurs:\'unbounded\',\r\n          label:\'${i18nFgdc.spref.vertdef.altsys.altres}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n          data-dojo-props\x3d"minValue:0.0,minValueIsExclusive:true,\r\n            hint:\'${i18nBase.hints.numberGreaterThanZero}\'"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'altunits\',\r\n          label:\'${i18nFgdc.spref.vertdef.altsys.altunits.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.altsys.altunits.meters}\',value:\'meters\'"\x3e\x3c/div\x3e          \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.altsys.altunits.feet}\',value:\'feet\'"\x3e\x3c/div\x3e            \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.alternates.other}\',value:\'_other\',isOther:true"\x3e\x3c/div\x3e  \r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'altenc\',\r\n          label:\'${i18nFgdc.spref.vertdef.altsys.altenc.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.altsys.altenc.explicit}\',value:\'Explicit elevation coordinate included with horizontal coordinates\'"\x3e\x3c/div\x3e          \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.altsys.altenc.implicit}\',value:\'Implicit coordinate\'"\x3e\x3c/div\x3e  \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.altsys.altenc.attribute}\',value:\'Attribute values\'"\x3e\x3c/div\x3e            \r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Depth System  --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'depthsys\',minOccurs:0,\r\n        label:\'${i18nFgdc.spref.vertdef.depthsys.caption}\'"\x3e\r\n\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'altdatum\',\r\n          label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option1}\',value:\'Local surface\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option2}\',value:\'Chart datum; datum for sounding reduction\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option3}\',value:\'Lowest astronomical tide\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option4}\',value:\'Highest astronomical tide\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option5}\',value:\'Mean low water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option6}\',value:\'Mean high water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option7}\',value:\'Mean sea level\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option8}\',value:\'Land survey datum\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option9}\',value:\'Mean low water springs\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option10}\',value:\'Mean high water springs\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option11}\',value:\'Mean low water neap\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option12}\',value:\'Mean high water neap\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option13}\',value:\'Mean lower low water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option14}\',value:\'Mean lower low water springs\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option15}\',value:\'Mean higher high water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option16}\',value:\'Mean higher low water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option17}\',value:\'Mean lower high water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option18}\',value:\'Spring tide\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option19}\',value:\'Tropic lower low water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option20}\',value:\'Neap tide\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option21}\',value:\'High water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option22}\',value:\'Higher high water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option23}\',value:\'Low water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option24}\',value:\'Low-water datum\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option25}\',value:\'Lowest low water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option26}\',value:\'Lower low water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option27}\',value:\'Lowest normal low water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option28}\',value:\'Mean tide level\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option29}\',value:\'Indian spring low water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option30}\',value:\'High-water full and charge\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option31}\',value:\'Low-water full and charge\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option32}\',value:\'Columbia River datum\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option33}\',value:\'Gulf Coast low water datum\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option34}\',value:\'Equatorial springs low water\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option35}\',value:\'Approximate lowest astronomical tide\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdn.option36}\',value:\'No correction\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.alternates.other}\',value:\'_other\',isOther:true"\x3e\x3c/div\x3e  \r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'depthres\',maxOccurs:\'unbounded\',\r\n          label:\'${i18nFgdc.spref.vertdef.depthsys.depthres}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n          data-dojo-props\x3d"minValue:0.0,minValueIsExclusive:true,\r\n            hint:\'${i18nBase.hints.numberGreaterThanZero}\'"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'depthdu\',\r\n          label:\'${i18nFgdc.spref.vertdef.depthsys.depthdu.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdu.meters}\',value:\'meters\'"\x3e\x3c/div\x3e          \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthdu.feet}\',value:\'feet\'"\x3e\x3c/div\x3e            \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.alternates.other}\',value:\'_other\',isOther:true"\x3e\x3c/div\x3e  \r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'depthem\',\r\n          label:\'${i18nFgdc.spref.vertdef.depthsys.depthem.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthem.explicit}\',value:\'Explicit depth coordinate included with horizontal coordinates\'"\x3e\x3c/div\x3e          \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthem.implicit}\',value:\'Implicit coordinate\'"\x3e\x3c/div\x3e  \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.spref.vertdef.depthsys.depthem.attribute}\',value:\'Attribute values\'"\x3e\x3c/div\x3e            \r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n    \x3c/div\x3e\r\n    \r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/spref/vertdef","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputNumber ../../../form/InputSelectOne ../../../form/Options ../../../form/Option dojo/text!./templates/vertdef.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.spref.vertdef",a,f);return a});