//>>built
require({cache:{"url:dojox/widget/Calendar/CalendarMonthYear.html":'\x3cdiv class\x3d"dojoxCal-MY-labels" style\x3d"left: 0px;"\t\r\n\tdojoAttachPoint\x3d"myContainer" dojoAttachEvent\x3d"onclick: onClick"\x3e\r\n\t\t\x3ctable cellspacing\x3d"0" cellpadding\x3d"0" border\x3d"0" style\x3d"margin: auto;"\x3e\r\n\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\x3ctr class\x3d"dojoxCal-MY-G-Template"\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd class\x3d"dojoxCal-MY-M-Template"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"dojoxCalendarMonthLabel"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd class\x3d"dojoxCal-MY-M-Template"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"dojoxCalendarMonthLabel"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd class\x3d"dojoxCal-MY-Y-Template"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"dojoxCalendarYearLabel"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd class\x3d"dojoxCal-MY-Y-Template"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"dojoxCalendarYearLabel"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t \x3c/tr\x3e\r\n\t\t\t\t\t\t \x3ctr class\x3d"dojoxCal-MY-btns"\x3e\r\n\t\t\t\t\t\t \t \x3ctd class\x3d"dojoxCal-MY-btns" colspan\x3d"4"\x3e\r\n\t\t\t\t\t\t \t\t \x3cspan class\x3d"dijitReset dijitInline dijitButtonNode ok-btn" dojoAttachEvent\x3d"onclick: onOk" dojoAttachPoint\x3d"okBtn"\x3e\r\n\t\t\t\t\t\t \t \t \t \x3cbutton\tclass\x3d"dijitReset dijitStretch dijitButtonContents"\x3eOK\x3c/button\x3e\r\n\t\t\t\t\t\t\t\t \x3c/span\x3e\r\n\t\t\t\t\t\t\t\t \x3cspan class\x3d"dijitReset dijitInline dijitButtonNode cancel-btn" dojoAttachEvent\x3d"onclick: onCancel" dojoAttachPoint\x3d"cancelBtn"\x3e\r\n\t\t\t\t\t\t \t \t\t \x3cbutton\tclass\x3d"dijitReset dijitStretch dijitButtonContents"\x3eCancel\x3c/button\x3e\r\n\t\t\t\t\t\t\t\t \x3c/span\x3e\r\n\t\t\t\t\t\t \t \x3c/td\x3e\r\n\t\t\t\t\t\t \x3c/tr\x3e\r\n\t\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare ./_CalendarView dijit/_TemplatedMixin dojo/query dojo/dom-class dojo/_base/connect dojo/_base/event dojo/_base/lang dojo/date/locale dojo/text!./Calendar/CalendarMonthYear.html".split(" "),function(r,s,t,f,e,q,p,k,u,v){return r("dojox.widget._CalendarMonthYearView",[s,t],{templateString:v,datePart:"year",displayedYears:10,useHeader:!1,postCreate:function(){this.cloneClass(".dojoxCal-MY-G-Template",5,".dojoxCal-MY-btns");this.monthContainer=this.yearContainer=this.myContainer;
f(".dojoxCalendarYearLabel",this.myContainer).forEach(function(a,d){var b="dojoxCalendarIncrease";switch(d){case 0:b="dojoxCalendarDecrease";case 1:e.remove(a,"dojoxCalendarYearLabel"),e.add(a,b)}});this._decBtn=f(".dojoxCalendarDecrease",this.myContainer)[0];this._incBtn=f(".dojoxCalendarIncrease",this.myContainer)[0];f(".dojoxCal-MY-M-Template",this.domNode).filter(function(a){return 1==a.cellIndex}).addClass("dojoxCal-MY-M-last");q.connect(this,"onBeforeDisplay",k.hitch(this,function(){this._cachedDate=
new Date(this.get("value").getTime());this._populateYears(this._cachedDate.getFullYear());this._populateMonths();this._updateSelectedMonth();this._updateSelectedYear()}));q.connect(this,"_populateYears",k.hitch(this,function(){this._updateSelectedYear()}));q.connect(this,"_populateMonths",k.hitch(this,function(){this._updateSelectedMonth()}));this._cachedDate=this.get("value");this._populateYears();this._populateMonths();this.addFx(".dojoxCalendarMonthLabel,.dojoxCalendarYearLabel ",this.myContainer)},
_setValueAttr:function(a){a&&a.getFullYear()&&this._populateYears(a.getFullYear())},getHeader:function(){return null},_getMonthNames:function(a){return this._monthNames=this._monthNames||u.getNames("months",a,"standAlone",this.getLang())},_populateMonths:function(){var a,d=this._getMonthNames("abbr"),b=this.get("value").getFullYear(),n=d[this.get("value").getMonth()],g=this.get("displayedYear");f(".dojoxCalendarMonthLabel",this.monthContainer).forEach(k.hitch(this,function(c,h){this._setText(c,d[h]);
a=n===d[h]&&b===g;e.toggle(c.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],a)}));var c=this.get("constraints");if(c){(new Date).setFullYear(this._year);var l=-1,m=12;if(c.min){var h=c.min.getFullYear();h>this._year?l=12:h==this._year&&(l=c.min.getMonth())}c.max&&(h=c.max.getFullYear(),h<this._year?m=-1:h==this._year&&(m=c.max.getMonth()));f(".dojoxCalendarMonthLabel",this.monthContainer).forEach(k.hitch(this,function(a,c){e[c<l||c>m?"add":"remove"](a,"dijitCalendarDisabledDate")}))}},
_populateYears:function(a){var d,b=this.get("constraints"),n=this.get("value").getFullYear(),g=a||n,c=g-Math.floor(this.displayedYears/2);a=b&&b.min?b.min.getFullYear():c-1E4;this._displayedYear=g;var g=f(".dojoxCalendarYearLabel",this.yearContainer),l=b&&b.max?b.max.getFullYear()-c:g.length,m;g.forEach(k.hitch(this,function(a,b){b<=l&&this._setText(a,c+b);m=c+b==n;e.toggle(a.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],m);e.toggle(a,"dijitCalendarDisabledDate",b>l);d=c+b==
n;e.toggle(a.parentNode,["dijitCalendarSelectedDate","dijitCalendarCurrentDate"],d)}));this._incBtn&&e.toggle(this._incBtn,"dijitCalendarDisabledDate",l<g.length);this._decBtn&&e.toggle(this._decBtn,"dijitCalendarDisabledDate",a>=c);this.getHeader()&&this._setText(this.getHeader(),c+" - "+(c+11))},_updateSelectedYear:function(){this._year=String((this._cachedDate||this.get("value")).getFullYear());this._updateSelectedNode(".dojoxCalendarYearLabel",k.hitch(this,function(a){return null!==this._year&&
a.innerHTML==this._year}))},_updateSelectedMonth:function(){var a=(this._cachedDate||this.get("value")).getMonth();this._month=a;this._updateSelectedNode(".dojoxCalendarMonthLabel",function(d,b){return b==a})},_updateSelectedNode:function(a,d){f(a,this.domNode).forEach(function(a,b,c){e.toggle(a.parentNode,"dijitCalendarSelectedDate",d(a,b,c))});var b=f(".dojoxCal-MY-M-Template div",this.myContainer).filter(function(a){return e.contains(a.parentNode,"dijitCalendarSelectedDate")})[0];b&&(b=e.contains(b,
"dijitCalendarDisabledDate"),e.toggle(this.okBtn,"dijitDisabled",b))},onClick:function(a){function d(b){return e.contains(a.target,b)}if(d("dijitCalendarDisabledDate"))return p.stop(a),!1;if(d("dojoxCalendarMonthLabel"))this._month=a.target.parentNode.cellIndex+2*a.target.parentNode.parentNode.rowIndex,this._cachedDate.setMonth(this._month),this._updateSelectedMonth();else if(d("dojoxCalendarYearLabel"))this._year=Number(a.target.innerHTML),this._cachedDate.setYear(this._year),this._populateMonths(),
this._updateSelectedYear();else return d("dojoxCalendarDecrease")?this._populateYears(this._displayedYear-10):d("dojoxCalendarIncrease")&&this._populateYears(this._displayedYear+10),!0;p.stop(a);return!1},onOk:function(a){p.stop(a);if(e.contains(this.okBtn,"dijitDisabled"))return!1;this.onValueSelected(this._cachedDate);return!1},onCancel:function(a){p.stop(a);this.onValueSelected(this.get("value"));return!1}})});