// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.
//>>built
define("./core/Accessor ./core/JSONSupporter ./core/jsonDictionary ./core/Collection ./core/lang dojo/_base/lang".split(" "),function(e,m,f,n,c,p){var k=f({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),g=f({shortDate:"short-date",shortDateLE:"short-date-le",longDate:"long-date",dayShortMonthYear:"day-short-month-year",longMonthDayYear:"long-month-day-year",shortDateLongTime:"short-date-long-time",shortDateLELongTime:"short-date-le-long-time",shortDateShortTime:"short-date-short-time",
shortDateLEShortTime:"short-date-le-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLongTime24:"short-date-long-time-24",shortDateLELongTime24:"short-date-le-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),l=f({image:"image",barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"});e=e.createSubclass({properties:{className:{},temporary:{},image:{},
id:{},title:{},visible:{}},className:"",temporary:!1,image:"",id:"",title:"",visible:!0,clone:function(){return new this.constructor({className:this.className,image:this.image,id:this.id,title:this.title,visible:this.visible})}});var h=m.createSubclass({classMetadata:{properties:{actions:{type:n.ofType(e)}},reader:{add:["content"],exclude:["popupElements","description","mediaInfos","showAttachments"]}},declaredClass:"esri.PopupTemplate",actions:null,content:"",fieldInfos:null,_fieldInfosReader:function(a){return this._readFieldInfos(a)},
overwriteActions:!1,title:"",relatedRecordsInfo:null,_relatedRecordsInfoReader:function(a){return a?c.clone(a):a},getDefaults:function(){return p.mixin(this.inherited(arguments),{actions:[],content:"",fieldInfos:null,overwriteActions:!1,relatedRecordsInfo:null,title:""})},_dateFormatJsonDict:g,clone:function(){var a=this.actions;a&&(a=c.clone(a.toArray()));return new h({actions:a||[],content:Array.isArray(this.content)?c.clone(this.content):this.content,fieldInfos:this.fieldInfos?c.clone(this.fieldInfos):
null,overwriteActions:this.overwriteActions,relatedRecordsInfo:this.relatedRecordsInfo?c.clone(this.relatedRecordsInfo):null,title:this.title})},toJSON:function(){var a={fieldInfos:this.fieldInfos?c.clone(this.fieldInfos):null,relatedRecordsInfo:this.relatedRecordsInfo?c.clone(this.relatedRecordsInfo):null,showAttachments:!1,title:this.title};a.fieldInfos&&(a.fieldInfos=this._writeFieldInfos(a.fieldInfos));var b=this.content;"string"===typeof b?a.description=b:Array.isArray(b)&&(a.popupElements=c.clone(b),
a.popupElements.forEach(function(b){"attachments"===b.type&&!a.showAttachments?a.showAttachments=!0:"media"===b.type&&!a.mediaInfos?(b.mediaInfos&&(a.mediaInfos=c.clone(b.mediaInfos),a.mediaInfos.forEach(function(b){b.type=l.toJSON(b.type)})),delete b.mediaInfos):"text"===b.type&&!a.description?(b.text&&(a.description=b.text),delete b.text):"fields"===b.type&&!a.fieldInfos&&(b.fieldInfos&&(a.fieldInfos=this._writeFieldInfos(c.clone(b.fieldInfos))),delete b.fieldInfos);return b}.bind(this)));return a},
_contentReader:function(a,b){var c=b.description,d=[],e=b.popupElements;e&&e.length?d=e.map(function(a){if("text"===a.type&&!a.text)a.text=b.description;else if("media"===a.type&&(a.mediaInfos||b.mediaInfos))a.mediaInfos||(a.mediaInfos=b.mediaInfos),a.mediaInfos=this._readMediaInfos(a.mediaInfos);return a}.bind(this)):(b.description?d.push({type:"text",text:b.description}):d.push({type:"fields"}),b.mediaInfos&&b.mediaInfos.length&&d.push({type:"media",mediaInfos:this._readMediaInfos(b.mediaInfos)}),
b.showAttachments&&d.push({type:"attachments",displayType:"list"}));d.length&&(c=d);return c},_readFieldInfos:function(a){a&&a.forEach(function(a){var c=a.format&&a.format.dateFormat,d=a.stringFieldOption;c&&(a.format.dateFormat=g.fromJSON(c));d&&(a.stringFieldOption=k.fromJSON(d))});return a},_writeFieldInfos:function(a){a.forEach(function(a){var c=a.format&&a.format.dateFormat,d=a.stringFieldOption;c&&(a.format.dateFormat=g.toJSON(c));d&&(a.stringFieldOption=k.toJSON(d))});return a},_readMediaInfos:function(a){a.forEach(function(a){a.type=
l.fromJSON(a.type)});return a}});h.Action=e;return h});