// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["require","exports","./setUtils","../../../PopupTemplate"],function(h,d,f,g){d.readPopupTemplates=function(c,b){var a=null;b.layers&&Array.isArray(b.layers)&&b.layers.forEach(function(b){b.popupInfo&&(a=a||{},a[b.id]=g.fromJSON(b.popupInfo))});f.setAsDefaultIfDefined(c,"popupTemplates",a)};d.readIfDefined=function(c,b,a,e){if(void 0!==a){a=void 0;c._accessorProps?a=(a=c._accessorProps)&&a.properties&&a.properties[b]&&a.properties[b].reader:c.__accessor__&&(a=(a=c.__accessor__.metadatas)&&
a[b]&&a[b].json&&a[b].json.read);var d=void 0,d=a?a.call(c,e[b],e):e[b];return f.setAsDefaultIfDefined(c,b,d)}}});