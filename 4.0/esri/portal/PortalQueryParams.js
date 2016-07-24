// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper ../core/accessoireSupport/typescript ../core/Accessoire ../core/jsonDictionary ../geometry/Extent ../geometry/support/webMercatorUtils ../geometry/SpatialReference dojo/_base/lang".split(" "),function(q,r,f,c,b,g,h,k,l,m,n){var p=h({title:"title",created:"created",type:"type",owner:"owner",avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});return function(e){function a(a){e.call(this);
this.start=this.sortOrder=this.sortField=this.query=this.num=this.extent=this.disableExtraQuery=null}f(a,e);a.prototype._sortOrderSetter=function(a,c){return"asc"===a||"desc"===a?a:c};a.prototype.clone=function(){return new a({disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})};a.prototype.toRequestOptions=function(a,c){var b;if(this.extent){var d=l.project(this.extent,
m.WGS84);d&&(b=d.xmin+","+d.ymin+","+d.xmax+","+d.ymax)}d=this.query;!this.disableExtraQuery&&a.extraQuery&&(d="("+d+")"+a.extraQuery);b={bbox:b,q:d,num:this.num,sortField:null,sortOrder:null,start:this.start};this.sortField&&(b.sortField=p.toJSON(this.sortField),b.sortOrder=this.sortOrder);return{query:n.mixin(c,b)}};c([b.shared("esri.portal.PortalQueryParams")],a.prototype,"declaredClass",void 0);c([b.property({value:!1})],a.prototype,"disableExtraQuery",void 0);c([b.property({type:k})],a.prototype,
"extent",void 0);c([b.property({value:10})],a.prototype,"num",void 0);c([b.property()],a.prototype,"query",void 0);c([b.property()],a.prototype,"sortField",void 0);c([b.property({value:"asc"})],a.prototype,"sortOrder",void 0);c([b.property({value:1})],a.prototype,"start",void 0);return a=c([b.subclass()],a)}(g)});