// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(function(){return function(b){var c={},d;for(d in b)c[b[d]]=d;return{toJSON:function(a){return c.hasOwnProperty(a)?c[a]:a},fromJSON:function(a){return b.hasOwnProperty(a)?b[a]:a}}}});