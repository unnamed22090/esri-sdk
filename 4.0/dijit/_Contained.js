//>>built
define(["dojo/_base/declare","./registry"],function(c,d){return c("dijit._Contained",null,{_getSibling:function(b){var a=this.domNode;do a=a[b+"Sibling"];while(a&&1!=a.nodeType);return a&&d.byNode(a)},getPreviousSibling:function(){return this._getSibling("previous")},getNextSibling:function(){return this._getSibling("next")},getIndexInParent:function(){var b=this.getParent();return!b||!b.getIndexOfChild?-1:b.getIndexOfChild(this)}})});