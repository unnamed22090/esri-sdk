//>>built
require({cache:{"url:dojox/calendar/templates/MobileHorizontalRenderer.html":'\x3cdiv class\x3d"dojoxCalendarEvent dojoxCalendarHorizontal" onselectstart\x3d"return false;"\x3e\r\n\t\x3cdiv class\x3d"bg" \x3e\x3c/div\x3e\r\n\t\x3cdiv style\x3d"position:absolute;left:2px;bottom:2px"\x3e\x3cspan data-dojo-attach-point\x3d"beforeIcon" class\x3d"beforeIcon"\x3e\u25c4\x3c/span\x3e\x3c/div\x3e\t\r\n\t\x3cdiv data-dojo-attach-point\x3d"labelContainer" class\x3d"labels"\x3e\t\t\r\n\t\t\x3cspan data-dojo-attach-point\x3d"startTimeLabel" class\x3d"startTime"\x3e\x3c/span\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"summaryLabel" class\x3d"summary"\x3e\x3c/span\x3e\r\n\t\t\x3cspan  data-dojo-attach-point\x3d"endTimeLabel" class\x3d"endTime"\x3e\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv style\x3d"position:absolute;right:2px;bottom:2px"\x3e\x3cspan data-dojo-attach-point\x3d"afterIcon" class\x3d"afterIcon"\x3e\u25ba\x3c/span\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"moveHandle" class\x3d"moveHandle" \x3e\x3c/div\x3e\t\r\n\t\x3cdiv data-dojo-attach-point\x3d"resizeStartHandle" class\x3d"resizeHandle resizeStartHandle"\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e\t\r\n\t\x3cdiv data-dojo-attach-point\x3d"resizeEndHandle" class\x3d"resizeHandle resizeEndHandle"\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e\t\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dojox/calendar/_RendererMixin dojo/text!./templates/MobileHorizontalRenderer.html".split(" "),function(c,b,g,h,k,l){return c("dojox.calendar.MobileHorizontalRenderer",[g,h,k],{templateString:l,_orientation:"horizontal",mobile:!0,visibilityLimits:{resizeStartHandle:50,resizeEndHandle:-1,summaryLabel:15,startTimeLabel:32,endTimeLabel:30},_displayValue:"inline",arrowPadding:12,_isElementVisible:function(d,e,f,c){var a;
a=this.isLeftToRight();"startTimeLabel"==d&&(this.labelContainer&&(a&&f||!a&&e)?b.set(this.labelContainer,"marginRight",this.arrowPadding+"px"):b.set(this.labelContainer,"marginRight",0),this.labelContainer&&(!a&&f||a&&e)?b.set(this.labelContainer,"marginLeft",this.arrowPadding+"px"):b.set(this.labelContainer,"marginLeft",0));switch(d){case "startTimeLabel":a=this.item.startTime;if(this.item.allDay||this.owner.isStartOfDay(a))return!1;break;case "endTimeLabel":if(a=this.item.endTime,this.item.allDay||
this.owner.isStartOfDay(a))return!1}return this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this._applyAttributes()}})});