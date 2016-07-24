// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("dojo/_base/array ../core/declare dojo/_base/lang dojox/gfx/_base ../core/lang ../geometry/Extent ../geometry/Point ../geometry/support/webMercatorUtils ../Graphic ../renderers/SimpleRenderer ../symbols/ShieldLabelSymbol ../symbols/TextSymbol ./GraphicsLayer ./labelLayerUtils/DynamicLabelClass ./labelLayerUtils/StaticLabelClass ./support/LabelClass".split(" "),function(p,v,n,t,w,x,y,u,z,A,r,q,B,C,D,m){function E(a){return"size"===a.type}return v(B,{declaredClass:"esri.layers.LabelLayer",constructor:function(a){this.id=
"labels";this.featureLayers=[];this._featureLayerInfos=[];this._preparedLabels=[];this._engineType="STATIC";this._mapEventHandlers=[];a&&(a.id&&(this.id=a.id),a.mode&&(this._engineType="DYNAMIC"===a.mode.toUpperCase()?"DYNAMIC":"STATIC"))},_setMap:function(a){var c=this.inherited(arguments);this._map&&this._mapEventHandlers.push(this._map.on("extent-change",n.hitch(this,"refresh")));this.refresh();return c},_unsetMap:function(){var a;for(a=0;a<this._mapEventHandlers.length;a++)this._mapEventHandlers[a].remove();
this.refresh();this.inherited(arguments)},setAlgorithmType:function(a){this._engineType=a&&"DYNAMIC"===a.toUpperCase()?"DYNAMIC":"STATIC";this.refresh()},addFeatureLayer:function(a,c,d,b){if(!this.getFeatureLayer(a.layerId)){var g=[];g.push(a.on("update-end",n.hitch(this,"refresh")));g.push(a.on("suspend",n.hitch(this,"refresh")));g.push(a.on("resume",n.hitch(this,"refresh")));g.push(a.on("edits-complete",n.hitch(this,"refresh")));g.push(a.on("labeling-info-change",n.hitch(this,"refresh")));g.push(a.on("time-extent-change",
n.hitch(this,"refresh")));g.push(a.on("show-labels-change",n.hitch(this,"refresh")));this._featureLayerInfos.push({FeatureLayer:a,LabelExpressionInfo:d,LabelingOptions:b,LabelRenderer:c,EventHandlers:g});this.featureLayers.push(a);this.refresh()}},getFeatureLayer:function(a){var c,d;for(c=0;c<this.featureLayers.length;c++)if(d=this.featureLayers[c],void 0!==d&&d.id==a)return d;return null},removeFeatureLayer:function(a){var c;a=this.getFeatureLayer(a);if(void 0!==a&&(c=p.indexOf(this.featureLayers,
a),-1<c)){this.featureLayers.splice(c,1);for(a=0;a<this._featureLayerInfos[c].EventHandlers.length;a++)this._featureLayerInfos[c].EventHandlers[a].remove();this._featureLayerInfos.splice(c,1);this.refresh()}},removeAllFeatureLayers:function(){var a;for(a=0;a<this.featureLayers.length;a++){for(var c=0;c<this._featureLayerInfos[a].EventHandlers.length;c++)this._featureLayerInfos[a].EventHandlers[c].remove();this.featureLayers=[];this._featureLayerInfos=[]}this.refresh()},getFeatureLayers:function(){return this.featureLayers},
getFeatureLayerInfo:function(a){var c,d;for(c=0;c<this.featureLayers.length;c++)if(d=this.featureLayers[c],void 0!==d&&d.id==a)return this._featureLayerInfos[c];return null},refresh:function(a){var c,d,b,g,k,e=[],f,h="DYNAMIC"===this._engineType?new C:new D;if(this._map){h.setMap(this._map,this);this._preparedLabels=[];for(a=0;a<this.featureLayers.length;a++)if(d=this.featureLayers[a],d.visible&&d.labelsVisible&&d.visibleAtMapScale&&!d._suspended)if(c=this._featureLayerInfos[a],c.LabelRenderer){if(e=
d.labelingInfo)if(f=e[0])g=f.getLabelExpression(),k=this._convertOptions(f);b=c.LabelRenderer;c.LabelExpressionInfo&&(g=c.LabelExpressionInfo);c.LabelingOptions&&(k=this._convertOptions(null),void 0!==c.LabelingOptions.pointPriorities&&(e=c.LabelingOptions.pointPriorities,k.pointPriorities="above-center"==e||"AboveCenter"==e||"esriServerPointLabelPlacementAboveCenter"==e?"AboveCenter":"above-left"==e||"AboveLeft"==e||"esriServerPointLabelPlacementAboveLeft"==e?"AboveLeft":"above-right"==e||"AboveRight"==
e||"esriServerPointLabelPlacementAboveRight"==e?"AboveRight":"below-center"==e||"BelowCenter"==e||"esriServerPointLabelPlacementBelowCenter"==e?"BelowCenter":"below-left"==e||"BelowLeft"==e||"esriServerPointLabelPlacementBelowLeft"==e?"BelowLeft":"below-right"==e||"BelowRight"==e||"esriServerPointLabelPlacementBelowRight"==e?"BelowRight":"center-center"==e||"CenterCenter"==e||"esriServerPointLabelPlacementCenterCenter"==e?"CenterCenter":"center-left"==e||"CenterLeft"==e||"esriServerPointLabelPlacementCenterLeft"==
e?"CenterLeft":"center-right"==e||"CenterRight"==e||"esriServerPointLabelPlacementCenterRight"==e?"CenterRight":"AboveRight"),void 0!==c.LabelingOptions.lineLabelPlacement&&(k.lineLabelPlacement=c.LabelingOptions.lineLabelPlacement),void 0!==c.LabelingOptions.lineLabelPosition&&(k.lineLabelPosition=c.LabelingOptions.lineLabelPosition),void 0!==c.LabelingOptions.labelRotation&&(k.labelRotation=c.LabelingOptions.labelRotation),void 0!==c.LabelingOptions.howManyLabels&&(k.howManyLabels=c.LabelingOptions.howManyLabels));
b instanceof m&&(g=b.getLabelExpression(),b=new A({symbol:b.symbol}),k=this._convertOptions(b));this._addLabels(d,b,g,k)}else if(e=d.labelingInfo)for(c=e.length-1;0<=c;c--)if(f=e[c])b=new m(f instanceof m?f.toJSON():f),g=f.getLabelExpression(),k=this._convertOptions(f),this._addLabels(d,b,g,k);g=h._process(this._preparedLabels);this.removeAll();this.drawLabels(this._map,g)}},drawLabels:function(a,c){this._scale=(a.extent.xmax-a.extent.xmin)/a.width;var d;for(d=0;d<c.length;d++){var b=c[d],g=b.x,k=
b.y,e=b.text,f=b.angle,h=b.layer.labelSymbol;"polyline"==b.layer.geometry.type&&b.layer.options.labelRotation?h.setAngle(f*(180/Math.PI)):h.setAngle(0);h.setText(e);b=g;h instanceof q&&(g=h.getHeight(),f=Math.sin(f),b-=0.25*g*this._scale*f,k-=0.33*g*this._scale);f=new z(new y(b,k,a.extent.spatialReference));f.setSymbol(h);this.add(f)}},_addLabels:function(a,c,d,b){var g,k,e,f;if(this._isWithinScaleRange(c.minScale,c.maxScale)&&d&&""!==d){var h=this._map,l=!a.url&&!h.spatialReference.equals(a.spatialReference);
for(g=0;g<a.graphics.length;g++)if(k=a.graphics[g],!1!==k.visible){e=k.geometry;if(l){if(!u.canProject(e,h))continue;e=u.project(e,h)}e&&(m.evaluateWhere(c.where,k.attributes)&&this._isWithinScreenArea(e))&&(f=m.buildLabelText(d,k.attributes,a.fields,b),this._addLabel(f,c,a.renderer,k,b,e,h))}}},_isWithinScreenArea:function(a){a="point"===a.type?new x(a.x,a.y,a.x,a.y,a.spatialReference):a.getExtent();if(void 0===a)return!1;a=this._intersects(this._map,a);return null===a||0===a.length?!1:!0},_isWithinScaleRange:function(a,
c){var d=this._map.getScale();return 0<a&&d>=a||0<c&&d<=c?!1:!0},_getSizeInfo:function(a){return a?a.sizeInfo||p.filter(a.visualVariables,E)[0]:null},_addLabel:function(a,c,d,b,g,k,e){var f,h,l,m;if(a&&""!==n.trim(a)&&c){a=a.replace(/\s+/g," ");f=c.getSymbol(b);f instanceof q?(f=new q(f.toJSON()),f.setVerticalAlignment("baseline"),f.setHorizontalAlignment("center")):f=f instanceof r?new r(f.toJSON()):new q;f.setText(a);c.symbol=f;if(l=this._getProportionalSize(c.sizeInfo,b.attributes))f instanceof
q?f.setSize(l):f instanceof r&&(f.setWidth(l),f.setHeight(l));m=l=0;if(d){h=d.getSymbol(b);var p=this._getSizeInfo(d),s;p&&(s=d.getSize(b,{sizeInfo:p,resolution:e.getResolutionInMeters()}));if(null!=s)l=m=s;else if(h)if("simple-marker-symbol"==h.type)m=l=h.size;else if("picture-marker-symbol"==h.type)l=h.width,m=h.height;else if("simple-line-symbol"==h.type||"cartographic-line-symbol"==h.type)l=h.width}d={};d.graphic=b;d.options=g;d.geometry=k;d.labelRenderer=c;d.labelSymbol=f;d.labelWidth=f.getWidth()/
2;d.labelHeight=f.getHeight()/2;d.symbolWidth=t.normalizedLength(l)/2;d.symbolHeight=t.normalizedLength(m)/2;d.text=a;d.angle=f.angle;this._preparedLabels.push(d)}},_getProportionalSize:function(a,c){if(!a)return null;var d=w.substitute(c,"{"+a.field+"}",{first:!0});return!a.minSize||!a.maxSize||!a.minDataValue||!a.maxDataValue||!d||0>=a.maxDataValue-a.minDataValue?null:(a.maxSize-a.minSize)/(a.maxDataValue-a.minDataValue)*(d-a.minDataValue)+a.minSize},_convertOptions:function(a){var c="shortDate",
d=null,b="",g=!0;a&&(void 0!==a.format&&(c=a.format.dateFormat,d={places:a.format.places,digitSeparator:a.format.digitSeparator}),b=a.labelPlacement);if("always-horizontal"==b||"esriServerPolygonPlacementAlwaysHorizontal"==b)g=!1;return{dateFormat:c,numberFormat:d,pointPriorities:"above-center"==b||"esriServerPointLabelPlacementAboveCenter"==b?"AboveCenter":"above-left"==b||"esriServerPointLabelPlacementAboveLeft"==b?"AboveLeft":"above-right"==b||"esriServerPointLabelPlacementAboveRight"==b?"AboveRight":
"below-center"==b||"esriServerPointLabelPlacementBelowCenter"==b?"BelowCenter":"below-left"==b||"esriServerPointLabelPlacementBelowLeft"==b?"BelowLeft":"below-right"==b||"esriServerPointLabelPlacementBelowRight"==b?"BelowRight":"center-center"==b||"esriServerPointLabelPlacementCenterCenter"==b?"CenterCenter":"center-left"==b||"esriServerPointLabelPlacementCenterLeft"==b?"CenterLeft":"center-right"==b||"esriServerPointLabelPlacementCenterRight"==b?"CenterRight":"AboveRight",lineLabelPlacement:"above-start"==
b||"below-start"==b||"center-start"==b?"PlaceAtStart":"above-end"==b||"below-end"==b||"center-end"==b?"PlaceAtEnd":"PlaceAtCenter",lineLabelPosition:"above-after"==b||"esriServerLinePlacementAboveAfter"==b||"above-along"==b||"esriServerLinePlacementAboveAlong"==b||"above-before"==b||"esriServerLinePlacementAboveBefore"==b||"above-start"==b||"esriServerLinePlacementAboveStart"==b||"above-end"==b||"esriServerLinePlacementAboveEnd"==b?"Above":"below-after"==b||"esriServerLinePlacementBelowAfter"==b||
"below-along"==b||"esriServerLinePlacementBelowAlong"==b||"below-before"==b||"esriServerLinePlacementBelowBefore"==b||"below-start"==b||"esriServerLinePlacementBelowStart"==b||"below-end"==b||"esriServerLinePlacementBelowEnd"==b?"Below":"center-after"==b||"esriServerLinePlacementCenterAfter"==b||"center-along"==b||"esriServerLinePlacementCenterAlong"==b||"center-before"==b||"esriServerLinePlacementCenterBefore"==b||"center-start"==b||"esriServerLinePlacementCenterStart"==b||"center-end"==b||"esriServerLinePlacementCenterEnd"==
b?"OnLine":"Above",labelRotation:g,howManyLabels:"OneLabel"}}})});