// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define([],function(){return{_dfdCanceller:function(a){a.canceled=!0;var b=a._pendingDfd;!a.isResolved()&&(b&&!b.isResolved())&&b.cancel();a._pendingDfd=null},_fixDfd:function(a){var b=a.then;a.then=function(a,c,f){if(a){var d=a;a=function(a){return a&&a._argsArray?d.apply(null,a):d(a)}}return b.call(this,a,c,f)};return a},_resDfd:function(a,b,e){var c=b.length;1===c?e?a.reject(b[0]):a.resolve(b[0]):1<c?(b._argsArray=!0,a.resolve(b)):a.resolve()}}});