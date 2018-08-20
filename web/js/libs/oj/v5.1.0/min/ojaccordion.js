/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojcollapsible"],function(e,t){e.__registerWidget("oj.ojAccordion",t.oj.baseComponent,{widgetEventPrefix:"oj",options:{multiple:!1,expanded:null,beforeExpand:null,expand:null,beforeCollapse:null,collapse:null},_ComponentCreate:function(){this._super(),this.element.addClass("oj-accordion oj-component").attr("role","group"),this.options.expanded=this._expandedIndexToId(this.options.expanded),this._refresh()},_NotifyContextMenuGesture:function(e,t,i){this._OpenContextMenu(t,i,{launcher:this.element.find(".oj-collapsible-header-icon").first()})},_destroy:function(){this.element.removeClass("oj-accordion oj-component").removeAttr("role"),this.element.children().removeClass("oj-accordion-collapsible"),this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy")},_setOption:function(e,t,i){if("multiple"===e)!t&&this.options.multiple&&this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse",!1);else if("expanded"===e)return void this._setExpandedOption(t);this._super(e,t,i)},refresh:function(){this._super(),this._refresh()},_refresh:function(){this._makeCollapsible(),this._internalSetExpanded=!0,this._setExpandedOption(this.options.expanded),this._internalSetExpanded=!1,this._setupEvents()},_makeCollapsible:function(){this.collapsibles=this.element.children(),this._IsCustomElement()?(this.element.children("oj-collapsible").each(function(e,t){t.setAttribute("expand-area","header")}),this.collapsibles.not("oj-collapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").attr("data-oj-internal","")):(this.element.children(":oj-collapsible").each(function(){t(this).ojCollapsible("option","expandArea","header")}),this.collapsibles.not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").attr("data-oj-internal","")),this.collapsibles.addClass("oj-accordion-collapsible")},_setupEvents:function(){var e;e=this._IsCustomElement()?{keydown:this._keydown,ojBeforeExpand:this._beforeExpandHandler,ojExpand:this._expandHandler,ojBeforeCollapse:this._beforeCollapseHandler,ojCollapse:this._collapseHandler}:{keydown:this._keydown,ojbeforeexpand:this._beforeExpandHandler,ojexpand:this._expandHandler,ojbeforecollapse:this._beforeCollapseHandler,ojcollapse:this._collapseHandler},this._off(this.collapsibles),this._on(this.collapsibles,e)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey&&(t(e.target).hasClass("oj-collapsible-header")||t(e.target).hasClass("oj-collapsible-header-icon"))){var i=t.ui.keyCode,o=this.collapsibles.not(".oj-disabled"),a=o.length,n=t(e.target).closest(".oj-collapsible"),l=o.index(n),s=!1;if(l>=0)switch(e.keyCode){case i.RIGHT:case i.DOWN:s=o[(l+1)%a];break;case i.LEFT:case i.UP:s=o[(l-1+a)%a];break;case i.HOME:s=o[0];break;case i.END:s=o[a-1]}s&&(n&&t(n).trigger("ojfocusout"),t(s).trigger("ojfocus"),e.preventDefault())}},_findTargetSiblings:function(e){if(!this.options.multiple){var i=t(e.target).closest(".oj-collapsible");if(i.parent().is(":oj-ojAccordion"))return i.siblings(".oj-collapsible.oj-expanded").map(function(){return t(this).data("oj-ojCollapsible")})}return t()},_beforeExpandHandler:function(e,i){if(!this._isTargetMyCollapsible(e))return!0;var o;this._expandTarget=t(e.target);var a=null;if(this._findTargetSiblings(e).each(function(){var t={header:(a=this.element).find(".oj-collapsible-header"),content:a.find(".oj-collapsible-content")};return(o=this._trigger("beforeCollapse",e,t))||(this._expandTarget=null),o}),!this.options.multiple){var n=this._initEventData(a,this._expandTarget);o=this._trigger("beforeExpand",e,n)}var l=this;return o&&this._findTargetSiblings(e).each(function(){this.collapse(!1,e,i),l._collapsedCollapsible=this.widget()}),o},_expandHandler:function(e,i){var o=null;if(this._collapsedCollapsible&&(o=this._collapsedCollapsible,this._collapsedCollapsible=null),this._isTargetMyCollapsible(e)&&!this._duringSetExpandedOption){var a,n=this;this._findTargetSiblings(e).each(function(){this.collapse(!1,e,i),a=n._initEventData(this.element,t(e.target))}),a||(a=n._initEventData(o,t(e.target))),this.options.multiple||this._trigger("expand",e,a),this._updateExpanded(),this._expandTarget=null}},_beforeCollapseHandler:function(e,t){var i=t;return!(this._isTargetMyCollapsible(e)&&!this.options.multiple)||(!i&&e.originalEvent instanceof CustomEvent&&(i=e.originalEvent.detail),this._trigger("beforeCollapse",e,this._initCollapseEventData(e,i)))},_collapseHandler:function(e,t){var i=t;if(!this._duringSetExpandedOption&&this._isTargetMyCollapsible(e)){!i&&e.originalEvent instanceof CustomEvent&&(i=e.originalEvent.detail);var o=this._initCollapseEventData(e,i);this.options.multiple||this._trigger("collapse",e,o),this._updateExpanded()}},_initEventData:function(e,t){return{fromCollapsible:e,toCollapsible:t}},_initCollapseEventData:function(e,i){var o;return i.toCollapsible?o=i:e.originalEvent&&e.originalEvent.target&&(o=this._initEventData(t(e.target),this._expandTarget)),!o&&this._expandTarget&&(o=this._initEventData(t(e.target),this._expandTarget)),o},_isTargetMyCollapsible:function(e){return t(e.target).is(this.collapsibles)},_updateExpanded:function(){var i,o,a=[];this.collapsibles.each(function(e){("oj-collapsible"===this.tagName.toLowerCase()?"true"===this.getAttribute("expanded"):t(this).ojCollapsible("option","expanded"))&&(o={},(i=t(this).attr("id"))&&(o.id=i),o.index=e,a.push(o))}),e.Object._compareArrayIdIndexObject(a,this.options.expanded)||this.option("expanded",a,{_context:{internalSet:!0,writeback:!0}})},_expandedIndexToId:function(e){if(Array.isArray(e)){for(var i,o=[],a=[],n=0;n<e.length;n++){var l=e[n];"number"==typeof l||"string"==typeof l?a.push(l):"number"==typeof l.index?a.push(l.index):"string"==typeof l.id&&a.push(l.id)}return this.element.children().each(function(e){(i=t(this).attr("id"))?-1===a.indexOf(i)&&-1===a.indexOf(e)||o.push({id:i,index:e}):-1!==a.indexOf(e)&&o.push({index:e})}),!this.options.multiple&&o.length>1&&(o=[o[o.length-1]]),o}return null},_setExpandedOption:function(i){var o=i;if(this._internalSetExpanded||(o=this._expandedIndexToId(o)),o){var a,n,l,s,r=this,d=0;this.collapsibles.each(function(i){a=t(this),n=a.attr("id"),l=!1,(s=o[d])&&(n?n===s.id&&(l=!0):i===s.index&&(l=!0),l&&(d+=1));var p="oj-collapsible"===this.tagName.toLowerCase();(p?"true"===this.getAttribute("expanded")||""===this.getAttribute("expanded"):a.ojCollapsible("option","expanded"))!==l&&(e.Logger.warn("JET Accordion: override collapsible "+i+" expanded setting"),r._duringSetExpandedOption=!0,p?this.setAttribute("expanded",l):a.ojCollapsible("option","expanded",l),r._duringSetExpandedOption=!1)})}this._updateExpanded()},getNodeBySubId:function(e){if(null==e)return this.element?this.element[0]:null;var i=e.subId,o=e.index;if("number"!=typeof o||o<0||o>=this.collapsibles.length)return null;var a=this.collapsibles[o];switch(i){case"oj-accordion-content":i="oj-collapsible-content";break;case"oj-accordion-header":i="oj-collapsible-header";break;case"oj-accordion-disclosure":case"oj-accordion-header-icon":i="oj-collapsible-disclosure";break;case"oj-accordion-collapsible":return a;default:return null}return t(a).ojCollapsible("getNodeBySubId",{subId:i})},getSubIdByNode:function(e){for(var i=-1,o=e;o&&-1===(i=Array.prototype.indexOf.call(this.collapsibles,o));)o=o.parentElement;var a=null;if(-1!==i){var n=t(this.collapsibles[i]).ojCollapsible("getSubIdByNode",e);switch((n=n||{}).subId){case"oj-collapsible-content":a="oj-accordion-content";break;case"oj-collapsible-header":a="oj-accordion-header";break;case"oj-collapsible-disclosure":case"oj-collapsible-header-icon":a="oj-accordion-disclosure";break;default:a="oj-accordion-collapsible"}}return a?{subId:a,index:i}:null},_CompareOptionValues:function(t,i,o){return"expanded"===t?e.Object.compareValues(i,o):this._super(t,i,o)}}),e.CustomElementBridge.registerMetadata("oj-accordion","baseComponent",{properties:{expanded:{type:"Array",writeback:!0},multiple:{type:"boolean"}},events:{beforeCollapse:{},beforeExpand:{},collapse:{},expand:{}},extension:{_WIDGET_NAME:"ojAccordion"}}),e.CustomElementBridge.register("oj-accordion",{metadata:e.CustomElementBridge.getMetadata("oj-accordion")})});