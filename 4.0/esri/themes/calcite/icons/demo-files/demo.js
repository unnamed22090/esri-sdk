// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define(["dojo","dijit","dojox"],function(f,g,h){"boxShadow"in document.body.style||document.body.setAttribute("class","noBoxShadow");document.body.addEventListener("click",function(a){a=a.target;"INPUT"===a.tagName&&-1===a.getAttribute("class").indexOf("liga")&&a.select()});(function(){function a(){b.innerHTML=c.value||String.fromCharCode(160);window.icomoonLiga&&window.icomoonLiga(b)}function d(){b.style.fontSize=e.value+"px"}var e=document.getElementById("fontSize"),b=document.getElementById("testDrive"),
c=document.getElementById("testText");e.addEventListener("change",d,!1);c.addEventListener("input",a,!1);c.addEventListener("change",a,!1);d()})()});