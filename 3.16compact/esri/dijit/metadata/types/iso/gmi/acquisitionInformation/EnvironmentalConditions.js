// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmi/acquisitionInformation/templates/EnvironmentalConditions.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3c!-- environmentalConditions - information about the environmental conditions during the acquisition\r\n         type\x3d"gmi:MI_EnvironmentalRecord_PropertyType" minOccurs\x3d"0" --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n    data-dojo-props\x3d"target:\'gmi:environmentalConditions\',minOccurs:0,\r\n      label:\'${i18nIso.MI_EnvironmentalRecord.caption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_EnvironmentalRecord"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmi/acquisitionInformation/EnvironmentalConditions","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/iso/ObjectReference ./MI_EnvironmentalRecord dojo/text!./templates/EnvironmentalConditions.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmi.acquisitionInformation.EnvironmentalConditions",a,f);return a});