/*! ArcGIS API for JavaScript 4.2 | Copyright (c) 2016 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
require(["documentation/jsonp","dojo/query","dojo/dom-construct","dojo/date/locale","dojo/dom-attr"],function(t,o,a,e,r){function n(t){var o="";return o+='<h4 class="leader-1 trailer-0"><a href="'+t.url+'">'+t.title+"</a></h4>",o+="<small>"+l(t.date)+"</small>",o+="<p>"+t.excerpt+"</p>"}function l(t){var o="";if(t){var a=t.slice(0,10)+"T"+t.slice(11);o=e.format(new Date(a),{selector:"date",formatLength:"long"})}return o}o("[data-blog-url]").forEach(function(e){var l=o(e)[0],c=r.get(l,"data-blog-url"),s=parseInt(r.get(l,"data-blog-posts"))||10;t(c,"?json=1",function(t,o){if(!t)for(var e=o.posts,r=0;r<Math.min(e.length,s);r++)a.place(n(e[r]),l)})})});