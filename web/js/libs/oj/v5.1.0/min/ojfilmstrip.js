/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore","promise"],function(e,t){e.FilmStripPagingModel=function(){this.Init()},e.Object.createSubclass(e.FilmStripPagingModel,e.EventSource,"oj.FilmStripPagingModel"),e.FilmStripPagingModel.prototype.Init=function(){e.FilmStripPagingModel.superclass.Init.call(this),this._page=-1,this._totalSize=0,this._pageSize=-1},e.FilmStripPagingModel.prototype.setTotalSize=function(e){this._totalSize=e},e.FilmStripPagingModel.prototype.getPageSize=function(){return this._pageSize},e.FilmStripPagingModel.prototype.getPage=function(){return this._page},e.FilmStripPagingModel.prototype.setPage=function(e,t){e=parseInt(e,10);try{var i=this.getPageCount(),s=this._page,n=this._pageSize,a=n;if(t&&t.pageSize&&(a=t.pageSize),0===this._totalSize&&-1===a)return Promise.resolve();var r=Math.ceil(this._totalSize/a);if(e<0||e>r-1)throw new Error("JET FilmStrip: Invalid 'page' set: "+e);var o=!1;if(e!=s||a!=n){if(!1===this.handleEvent("beforePage",{page:e,previousPage:s}))return Promise.reject();o=!0}this._page=e,this._pageSize=a;var l=this.getPageCount(),h=this;return new Promise(function(n,a){if(i!=l&&h.handleEvent("pageCount",{pageCount:l,previousPageCount:i}),o){var r={page:e,previousPage:s};t&&t.loopDirection&&(r.loopDirection=t.loopDirection),h.handleEvent("page",r)}n(null)})}catch(e){return Promise.reject(e)}},e.FilmStripPagingModel.prototype.getStartItemIndex=function(){return-1===this._page&&-1===this._pageSize?-1:this._page*this._pageSize},e.FilmStripPagingModel.prototype.getEndItemIndex=function(){return Math.min(this.getStartItemIndex()+this._pageSize,this._totalSize)-1},e.FilmStripPagingModel.prototype.getPageCount=function(){return Math.ceil(this._totalSize/this._pageSize)},e.FilmStripPagingModel.prototype.totalSize=function(){return this._totalSize},e.FilmStripPagingModel.prototype.totalSizeConfidence=function(){return"actual"},function(){e.__registerWidget("oj.ojFilmStrip",t.oj.baseComponent,{defaultElement:"<div>",widgetEventPrefix:"oj",options:{maxItemsPerPage:0,orientation:"horizontal",currentItem:{index:0},arrowPlacement:"adjacent",arrowVisibility:"auto",looping:"off"},_ComponentCreate:function(){this._super();var t=this.element;t.addClass("oj-filmstrip oj-component").attr("tabindex",0).attr("role","region"),t.uniqueId();var s=this.options;if(s.disabled&&e.Logger.warn(ae),s.orientation!==v&&s.orientation!==te)throw new Error(g+s.orientation);if(s.arrowPlacement!==i&&s.arrowPlacement!==Q)throw new Error(d+s.arrowPlacement);if(s.arrowVisibility!==ie&&s.arrowVisibility!==m&&s.arrowVisibility!==P&&s.arrowVisibility!==n)throw new Error(p+s.arrowVisibility);if(s.looping!==X&&s.looping!==Y)throw new Error(c+s.looping);this.touchEventNamespace=this.eventNamespace+"Touch",this.mouseEventNamespace=this.eventNamespace+"Mouse",this.keyEventNamespace=this.eventNamespace+"Key",this.navArrowHoverableEventNamespace=this.eventNamespace+"NavArrowHoverable",s.currentItem=this._convertItemToObj(s.currentItem),this._setup(!0),this._populateItemObj(s.currentItem),this.option(b,s.currentItem,{_context:{internalSet:!0,writeback:!0}})},refresh:function(){this._super(),this._setup(!1)},getItemsPerPage:function(){return this._itemsPerPage},getPagingModel:function(){return this._pagingModel},_NotifyShown:function(){this._super(),this._needsSetup?this._setup(this._needsSetup[0]):this._handleResize()},_NotifyAttached:function(){this._super(),this._needsSetup?this._setup(this._needsSetup[0]):this._handleResize()},_setup:function(i){var s=this;if(i&&!this._pagingModel&&(this._pagingModel=new e.FilmStripPagingModel),i&&!this._filterNestedFilmStripsFunc&&(this._filterNestedFilmStripsFunc=function(e,i){return t(i).closest(".oj-filmstrip")[0]===s.element[0]}),!this._canCalculateSizes()){var n=!1;return this._needsSetup&&(n=this._needsSetup[0]),void(this._needsSetup=[i||n])}this._needsSetup=null,this._bRTL="rtl"===this._GetReadingDirection(),this._bTouchSupported=e.DomUtils.isTouchSupported();var a=this.element;i?(this._itemsPerPage=0,this._handlePageFunc=function(e){s._handlePage(e)},this._componentSize=0,this._itemSize=-1,this._handleTransitionEndFunc=function(e){s._handleTransitionEnd()},this._handleResizeFunc=function(e,t){s._handleResize()},this._bTouchSupported&&(this._handleTouchStartFunc=function(e){s._handleTouchStart(e)},this._handleTouchMoveFunc=function(e){s._handleTouchMove(e)},this._handleTouchEndFunc=function(e){s._handleTouchEnd(e)},this._addTouchListeners()),this._handleMouseDownFunc=function(e){s._handleMouseDown(e)},this._handleMouseMoveFunc=function(e){s._handleMouseMove(e)},this._handleMouseUpFunc=function(e){s._handleMouseUp(e)},this._addMouseListeners(),this._handleKeyDownFunc=function(e){s._handleKeyDown(e)},this._addKeyListeners()):this._destroyInternal();for(var r=a.children(),o=0;o<r.length;o++)e.Components.subtreeDetached(r[o]);var l=this._pagingModel;if(i&&l.on("page",this._handlePageFunc),l.setTotalSize(r.length),this._wrapChildren(),r.length>0){this._adjustSizes();for(o=0;o<r.length;o++)e.Components.subtreeAttached(r[o]);e.DomUtils.addResizeListener(a[0],this._handleResizeFunc,ee)}},_destroy:function(){this._bTouchSupported&&(this._removeTouchListeners(),this._handleTouchStartFunc=null,this._handleTouchMoveFunc=null,this._handleTouchEndFunc=null),this._removeMouseListeners(),this._handleMouseDownFunc=null,this._handleMouseMoveFunc=null,this._handleMouseUpFunc=null,this._removeKeyListeners(),this._handleKeyDownFunc=null,this._destroyInternal(),this._pagingModel.off("page",this._handlePageFunc),this._handlePageFunc=null,this._pagingModel=null,this._handleResizeFunc=null,this._handleTransitionEndFunc=null,this._filterNestedFilmStripsFunc=null;var e=this.element;e.removeClass("oj-filmstrip oj-component "+M).removeAttr("tabindex role").removeAttr("aria-labelledby"),e.removeUniqueId(),this._super()},_destroyInternal:function(){this._deferredHandleResize=!1,this._resolveBusyState();var t=this.element;e.DomUtils.removeResizeListener(t[0],this._handleResizeFunc),this._itemSize=-1,this._queuedHandleResize&&(clearTimeout(this._queuedHandleResize),this._queuedHandleResize=null);for(var i=this._getItems(),s=0;s<i.length;s++)e.Components.subtreeDetached(i[s]);this._clearCalculatedSizes(),this._getItemContainers().unwrap(),this._unwrapChildren();for(s=0;s<i.length;s++)e.Components.subtreeAttached(i[s])},_setOption:function(t,s,a){var r=this.options,o=!1,l=-1,h=this._pagingModel,_=h.getPage();switch(t){case"disabled":e.Logger.warn(ae);break;case"orientation":if(s!==v&&s!==te)throw new Error(g+s);o=r.orientation!=s;break;case"maxItemsPerPage":o=r.maxItemsPerPage!=s;break;case"arrowPlacement":if(s!==i&&s!==Q)throw new Error(d+s);o=r.arrowPlacement!=s;break;case"arrowVisibility":if(s!==ie&&s!==m&&s!==P&&s!==n)throw new Error(p+s);o=r.arrowVisibility!=s;break;case"looping":if(s!==X&&s!==Y)throw new Error(c+s);o=r.looping!=s;break;case b:s=this._convertItemToObj(s),this._populateItemObj(s);var f=r.currentItem;if(f&&s&&(f.id!=s.id||f.index!=s.index)&&((l=this._findPage(s))<0||l>=h.getPageCount()))throw new Error(u+s)}switch(this._super(t,s,a),t){case b:l>-1&&l!=_&&h.setPage(l)}o&&this._setup(!1)},_handleResize:function(){if(this._busyStateResolveFunc)this._deferredHandleResize=!0;else if(this._bHandlingResize){if(!this._queuedHandleResize){var e=this;this._queuedHandleResize=setTimeout(function(){e._queuedHandleResize=null,e._handleResize()},0)}}else this._bHandlingResize=!0,this._adjustSizes(!0),this._bHandlingResize=!1},_isHorizontal:function(){return this.options.orientation!==te},_isLoopingPage:function(){return this.options.looping===Y},_getCssPositionAttr:function(){return this._isHorizontal()?this._bRTL?"right":"left":"top"},_getCssSizeAttr:function(){return this._isHorizontal()?"width":"height"},_canCalculateSizes:function(){var e=document.createElement("div"),t=e.style;t.position="absolute",t.width="10px",t.height="10px";var i=this.element[0];i.appendChild(e);var s=!1;try{s=e.offsetWidth>0&&e.offsetHeight>0}catch(e){}return i.removeChild(e),s},_wrapChildren:function(){var e=this.element,t=this._isHorizontal(),s=e.children();s.addClass(T).wrap("<div class='"+z+" "+E+"'></div>");var n=this._getCssPositionAttr(),a=e.children().wrapAll("<div class='"+z+" "+N+"' style='"+n+": 0px;'></div>").parent();this._pagesWrapper=a;var r=this.options;r.arrowVisibility!==m&&r.arrowPlacement===i&&(this._contentWrapper=a.wrap("<div class='"+z+" oj-filmstrip-content-container'></div>").parent()),e.addClass(z),t||e.addClass(O);var o=this._createPageInfoElem(),l=e.attr("id"),h=o.attr("id");e.append(o),e.attr("aria-labelledby",l+" "+h),this._pageInfoElem=o,r.arrowVisibility!==m&&s.length>0&&(this._prevButton=this._createPrevNavArrow(),this._nextButton=this._createNextNavArrow(),this._navArrowsShownOnHover()&&this._setupNavArrowsHoverable())},_unwrapChildren:function(){var e=this.element,t=this._getItems();this._tearDownNavArrowsHoverable(),this._prevButton&&(this._UnregisterChildNode(this._prevButton),this._prevButton=null),this._nextButton&&(this._UnregisterChildNode(this._nextButton),this._nextButton=null);var i=e.children(Z+F);i&&i.remove(),this._pageInfoElem&&(this._UnregisterChildNode(this._pageInfoElem),this._pageInfoElem.remove(),this._pageInfoElem=null),t.removeClass(T).unwrap().unwrap(),this._pagesWrapper=null,this._contentWrapper&&(t.unwrap(),this._contentWrapper=null),e.removeClass(z+" "+O)},_createPageInfoElem:function(){var e=t(document.createElement("div"));return e.uniqueId(),e.addClass("oj-helper-hidden-accessible oj-filmstrip-liveregion"),e.attr({role:"region","aria-live":"polite","aria-atomic":"true"}),e},_updatePageInfoElem:function(){var e=this._pagingModel,t=e.getPage(),i=e.getPageCount(),s=le(this.getTranslatedString("labelAccFilmStrip",{pageIndex:t+1,pageCount:i})),n=this._pageInfoElem;n&&n.attr("aria-label",s)},_setupNavArrowsHoverable:function(){this.element.on("mouseenter"+this.navArrowHoverableEventNamespace,function(e){t(e.currentTarget).hasClass("oj-disabled")||t(e.currentTarget).addClass(M)}).on("mouseleave"+this.navArrowHoverableEventNamespace,function(e){t(e.currentTarget).removeClass(M)})},_tearDownNavArrowsHoverable:function(){this.element.off(this.navArrowHoverableEventNamespace)},_navArrowsShownOnHover:function(){var e=this.options,t=e.arrowVisibility;return t===P||t===n&&e.arrowPlacement===Q},_hasPrevPage:function(){return this._pagingModel.getPage()>0},_hasNextPage:function(){var e=this._pagingModel;return e.getPage()<e.getPageCount()-1},_prevPage:function(){var e=this._pagingModel;if(this._hasPrevPage())e.setPage(e.getPage()-1);else{var t=e.getPageCount();this._isLoopingPage()&&t>1&&e.setPage(t-1,{loopDirection:G})}},_nextPage:function(){var e=this._pagingModel;if(this._hasNextPage())e.setPage(e.getPage()+1);else{var t=e.getPageCount();this._isLoopingPage()&&t>1&&e.setPage(0,{loopDirection:J})}},_displayNavigationArrow:function(e,t){this.options.arrowPlacement===i?t.css("visibility",e?"":m):t.parent().css("display",e?"":S)},_updateNavigationArrowsDisplay:function(){if(this.options.arrowVisibility!==m){var e=this._pagingModel,t=e.getPage(),i=e.getPageCount(),s=this._isLoopingPage()&&i>1;this._displayNavigationArrow(s||0!==t,this._prevButton),this._displayNavigationArrow(s||t!==i-1,this._nextButton)}},_createPrevNavArrow:function(){var e=this.element,t=this._isHorizontal()?q:K,i=this._createNavigationArrowContainer(t);this.options.arrowPlacement===Q?e.append(i):e.prepend(i);var s=le(this.getTranslatedString("labelAccArrowPreviousPage")),n=le(this.getTranslatedString("tipArrowPreviousPage")),a=this._createNavigationArrow(i,t,s,n),r=this;return a.on("click",function(){r._prevPage()}),a},_createNextNavArrow:function(){var e=this.element,t=this._isHorizontal()?C:w,i=this._createNavigationArrowContainer(t);e.append(i);var s=le(this.getTranslatedString("labelAccArrowNextPage")),n=le(this.getTranslatedString("tipArrowNextPage")),a=this._createNavigationArrow(i,t,s,n),r=this;return a.on("click",function(){r._nextPage()}),a},_createNavigationArrowContainer:function(e){var i=t(document.createElement("div"));return i.addClass(F+" "+e),this.options.arrowPlacement===Q&&(i.addClass("oj-filmstrip-arrow-container-overlay"),this._navArrowsShownOnHover()&&i.addClass(I)),i},_createNavigationArrow:function(e,t,s,n){var a="<div class='"+y+" oj-default oj-enabled "+t+"' role='button' tabindex='-1'";a+="><span class='oj-filmstrip-arrow-icon "+t+" oj-component-icon'></span></div>",e.append(a);var r=e.children(Z+y).eq(0);r.uniqueId();var o=r.attr("id");s&&r.attr("aria-label",s),n&&r.attr("title",n);var l=this._pageInfoElem.attr("id");return r.attr("aria-labelledby",l+" "+o),this._AddHoverable(r),this._AddActiveable(r),this.options.arrowPlacement===i&&this._navArrowsShownOnHover()&&r.addClass(I),r},_getItemContainers:function(){return this._pagesWrapper.find(Z+E).filter(this._filterNestedFilmStripsFunc)},_getItems:function(){return this._pagesWrapper.find(Z+T).filter(this._filterNestedFilmStripsFunc)},_getPages:function(){return this._pagesWrapper.children(Z+j)},_clearCalculatedSizes:function(){var e=this._pagesWrapper;this._getPages().css(_,h).css(ne,h),this._getItemContainers().css(_,h).css(ne,h),e.css(this._getCssSizeAttr(),h)},_adjustSizes:function(n){this._clearCalculatedSizes();var r=this.options,o=this._isHorizontal(),l=r.maxItemsPerPage,u=l<1,g=this.element,d=this._getItemContainers();if(this._itemSize<0){var p=this._getItemIndex(r.currentItem),c=t(d[p]),f=c.children(Z+T);f.css(a,h),e.Components.subtreeShown(f[0]),this._itemSize=o?c.width():c.height()}var v=o?g.width():g.height();if(r.arrowVisibility!==m&&r.arrowPlacement===i){var P=g.children(Z+F).eq(0);v-=2*(o?P.width():P.height())}if(this._componentSize=v,!u){var b=Math.max(Math.floor(v/this._itemSize),1);b<l&&(l=b)}var w=u?Math.max(Math.floor(v/this._itemSize),1):l,C=v/w;d.css(_,C+$).css(ne,C+$);var y=Math.ceil(d.length/w),I=this._getPages(),M=!1,E=this._pagingModel;if(E.getPageCount()!=y||this._itemsPerPage!=w||!I||I.length<1){if(M=!0,n)for(var N=0;N<d.length;N++)e.Components.subtreeDetached(d[N]);I&&I.length>0&&d.unwrap();for(N=0;N<d.length;N+=w){d.slice(N,N+w).wrapAll("<div class='"+z+" "+j+"' style='"+a+": "+S+";' "+s+"='true'></div>")}if(n)for(N=0;N<d.length;N++)e.Components.subtreeAttached(d[N])}(I=this._getPages()).css(_,v+$).css(ne,v+$);var x=this._pagesWrapper,A=this._contentWrapper;x.css(this._getCssSizeAttr(),v),A&&A.css(this._getCssSizeAttr(),v);var D=0;if(r.currentItem&&(D=this._findPage(r.currentItem,w)),E.getPageCount()!=y||this._itemsPerPage!=w||E.getPage()!=D)E.setPage(D,{pageSize:w});else if(M){var H=E.getPage();this._handlePage({previousPage:H,page:H})}},_handlePage:function(e){var i=e.page,s=e.loopDirection,n=e.previousPage,a=this._pagesWrapper,r=this._getPages(),o=this._pagingModel,l=o.getPageSize(),h=o.getPageCount(),u=n<0||n==i||this._itemsPerPage!=l,g=this._isLoopingPage();this._itemsPerPage=l;var d=null;u||(d=t(r[n]));var p=this._getCssPositionAttr(),c=t(r[i]),_=c.is(f);_&&this._unhidePage(c);var m=this._bDragInit;if(n>-1&&!u){var v=i>n;g&&s&&(v=s===J);var P=g&&!v&&h>1&&0==n,b=g&&v&&h>1&&n==h-1;m=!0,a.css(this._getCssSizeAttr(),2*this._componentSize),v||_&&a.css(p,-this._componentSize+$),v?(d.addClass(D),c.addClass(A),b&&c.addClass(W)):(d.addClass(L),c.addClass(H),P&&c.addClass(V))}if(this._busyStateResolveFunc=this._addBusyState("scrolling"),m){var S=this,w=this._bDragInit;if(w&&n<0)r.filter(se).addClass(x);setTimeout(function(){S._finishHandlePage(i,n,v,u,w)},25)}else this._finishHandlePage(i,n,v,u)},_finishHandlePage:function(e,i,s,n,a){var r=this._pagesWrapper;if(n||(this._bPageChangeTransition=!0,r.on("transitionend"+this.eventNamespace+" webkitTransitionEnd"+this.eventNamespace,this._handleTransitionEndFunc)),n)this._handleTransitionEnd();else{var o=this._getPages();if(a&&oe(o),i>-1){var l=t(o[i]),h=t(o[e]);l.addClass(x),h.addClass(x),s?(l.removeClass(D),h.removeClass(A),l.addClass(k),h.addClass(R)):(l.removeClass(L),h.removeClass(H),l.addClass(U),h.addClass(B))}else if(a){var u=o.filter(se);re(u,"translate3d(0, 0, 0)")}}},_handleTransitionEnd:function(){this._bPageChangeTransition=!1;var i=this._pagesWrapper,s=this._getCssPositionAttr();i.off(this.eventNamespace).css(this._getCssSizeAttr(),this._componentSize).css(s,"0px");var n=null;(e.FocusUtils.containsFocus(i[0])||this._nextButton&&e.FocusUtils.containsFocus(this._nextButton[0])||this._prevButton&&e.FocusUtils.containsFocus(this._prevButton[0]))&&(n=document.activeElement);for(var a=this._pagingModel.getPage(),r=this._getPages(),o=0;o<r.length;o++)o!=a&&this._hidePage(t(r[o]));if(r.removeClass(x+" "+k+" "+R+" "+U+" "+B+" "+V+" "+W),oe(r),this._updateNavigationArrowsDisplay(),n&&t(n).is(f)){var l=this.element,h=e.FocusUtils.getFirstTabStop(r[a]);h?e.FocusUtils.focusElement(h):e.FocusUtils.focusElement(l[0])}var u=this.options;if(this._findPage(u.currentItem)!=a){var g=this._getFirstItemOnPage(a);g&&this.option(b,g,{_context:{writeback:!0}})}this._deferredHandleResize&&(this._deferredHandleResize=!1,this._handleResize()),this._updatePageInfoElem(),this._resolveBusyState()},_getItemIndex:function(t){var i=-1;if(t){var s=this._getItems();if(t.id&&e.DomUtils.isValidIdentifier(t.id))for(var n=0;n<s.length;n++){var a=s[n].id;if(a&&a.length>0&&a===t.id){i=n;break}}else null!=t.index&&t.index>=0&&t.index<s.length&&(i=t.index)}return i},_convertItemToObj:function(e){var t=null;return"object"==typeof e?t=e:"number"==typeof e?t={index:e}:"string"==typeof e&&(t={id:e}),t},_populateItemObj:function(e){if(e&&this._pagingModel.getPage()>=0){var t=this._getItemIndex(e);if(e.index=t,null==e.id&&-1!==t){var i=this._getItems();e.id=i[t].id}}},_findPage:function(e,t){var i=this._getItemIndex(e),s=-1;return i>-1&&(void 0===t&&(t=this._itemsPerPage),s=Math.floor(i/t)),s},_getFirstItemOnPage:function(e,t,i){var s=this._pagingModel;if(void 0===t&&(t=s.getPageCount()),e>=0&&e<t){var n=this._getItems();void 0===i&&(i=this._itemsPerPage);var a=e*i;if(a<n.length)return{id:n[a].id,index:a}}return null},_hidePage:function(t){e.Components.subtreeHidden(t[0]),t.css(a,S).attr(s,"true"),t.find(Z+T).filter(this._filterNestedFilmStripsFunc).css(a,S)},_unhidePage:function(t){t.css(a,h).removeAttr(s),t.find(Z+T).filter(this._filterNestedFilmStripsFunc).css(a,h),e.Components.subtreeShown(t[0])},_addKeyListeners:function(){this.element.on("keydown"+this.keyEventNamespace,this._handleKeyDownFunc)},_removeKeyListeners:function(){this.element.off(this.keyEventNamespace)},_addMouseListeners:function(){this.element.on("mousedown"+this.mouseEventNamespace,this._handleMouseDownFunc).on("mousemove"+this.mouseEventNamespace,this._handleMouseMoveFunc).on("mouseup"+this.mouseEventNamespace,this._handleMouseUpFunc)},_removeMouseListeners:function(){this.element.off(this.mouseEventNamespace)},_addTouchListeners:function(){this.element.on("touchstart"+this.touchEventNamespace,this._handleTouchStartFunc).on("touchmove"+this.touchEventNamespace,this._handleTouchMoveFunc).on("touchend"+this.touchEventNamespace,this._handleTouchEndFunc).on("touchcancel"+this.touchEventNamespace,this._handleTouchEndFunc)},_removeTouchListeners:function(){this.element.off(this.touchEventNamespace)},_handleKeyDown:function(e){var i=this._pagingModel,s=i.getPage(),n=i.getPageCount(),a=-2;switch(e.keyCode){case t.ui.keyCode.RIGHT:a=this._bRTL?s-1:s+1;break;case t.ui.keyCode.LEFT:a=this._bRTL?s+1:s-1;break;case t.ui.keyCode.DOWN:a=s+1;break;case t.ui.keyCode.UP:a=s-1;break;case t.ui.keyCode.HOME:a=0;break;case t.ui.keyCode.END:a=n-1;break;default:return}if(a>-1&&a<n)i.setPage(a);else if(this._isLoopingPage()&&n>1){var r={};a==n&&(a=0,r.loopDirection=J),-1==a&&(a=n-1,r.loopDirection=G),i.setPage(a,r)}e.preventDefault()},_handleMouseDown:function(e){var t=e.originalEvent;this._dragScrollStart(t)},_handleMouseMove:function(e){var t=e.originalEvent;this._dragScrollMove(e,t)},_handleMouseUp:function(e){this._dragScrollEnd()},_handleTouchStart:function(e){var t=e.originalEvent.touches;if(1===t.length){var i=t[0];this._dragScrollStart(i)}},_handleTouchMove:function(e){var t=e.originalEvent.touches[0];this._dragScrollMove(e,t),(this._bTouch||this._scrolledForThisTouch)&&e.preventDefault()},_handleTouchEnd:function(e){this._dragScrollEnd()},_dragScrollStart:function(e){if(this._pagingModel.getPageCount()>1&&!this._bPageChangeTransition){this._bTouch=!0,this._bDragInit=!1,this._bFirstToLast=!1,this._bLastToFirst=!1;var t=this._isHorizontal();this._touchStartCoord=t?e.pageX:e.pageY,this._touchStartCoord2=t?e.pageY:e.pageX}},_initDragScroll:function(e,i,s){var n=this._isHorizontal();this._touchStartCoord=n?e.pageX:e.pageY,this._touchStartCoord2=n?e.pageY:e.pageX;var a=this._getCssPositionAttr(),r=this._pagesWrapper,o=this._pagingModel,l=o.getPage(),h=o.getPageCount(),u=this._getPages(),g=1;i||s?(i&&(this._unhidePage(t(u[h-1])),r.css(a,-this._componentSize+$),g++,t(u[h-1]).addClass(V)),s&&(this._unhidePage(t(u[0])),g++,t(u[0]).addClass(W))):(l>0&&(this._unhidePage(t(u[l-1])),r.css(a,-this._componentSize+$),g++),l<h-1&&(this._unhidePage(t(u[l+1])),g++)),g>1&&r.css(this._getCssSizeAttr(),g*this._componentSize),this._touchStartScroll=parseInt(r.css(a),10)},_dragScrollMove:function(e,i){if(this._bTouch){var s=this._isHorizontal(),n=(s?i.pageX:i.pageY)-this._touchStartCoord,a=(s?i.pageY:i.pageX)-this._touchStartCoord2,h=s&&this._bRTL?n>0:n<0,u=this._pagingModel,g=u.getPage(),d=u.getPageCount(),p=this._isLoopingPage(),c=p&&!h&&d>1&&0==g,_=p&&h&&d>1&&g==d-1;if(!this._bDragInit)return Math.abs(a)>Math.abs(n)&&(this._bTouch=!1,this._scrolledForThisTouch=!1),Math.abs(n)>r&&(this._initDragScroll(i,c,_),this._bDragInit=!0),this._bFirstToLast=c,void(this._bLastToFirst=_);if(c==this._bFirstToLast&&_==this._bLastToFirst||(this._dragScrollResetPages(),this._initDragScroll(i,c,_),this._bFirstToLast=c,this._bLastToFirst=_),h&&g<u.getPageCount()-1||!h&&g>0||p){var m=this.element[0],f=Math.min(o*(s?m.offsetWidth:m.offsetHeight),l),v=this._getCssPositionAttr(),P=this._pagesWrapper,b=this._getPages();if(Math.abs(n)>=f){var S,w,C={};if(c||_?(c?(S=d-1,w=d>2?1:-1):_&&(S=0,w=d>2?d-2:-1),C.loopDirection=h?J:G):(S=h?g+1:g-1,w=h?g-1:g+1),w>-1&&w<u.getPageCount()&&this._hidePage(t(b[w])),h&&w>-1&&!_){var y=parseInt(P.css(v),10);P.css(v,y+this._componentSize+$)}P.css(this._getCssSizeAttr(),2*this._componentSize),this._bTouch=!1,u.setPage(S,C)}else{var F=s?"translate3d("+n+"px, 0, 0)":"translate3d(0, "+n+"px, 0)";re(b.filter(se),F)}this._scrolledForThisTouch=!0}this._scrolledForThisTouch&&(e.preventDefault(),e.stopPropagation())}},_dragScrollEnd:function(){if(this._bTouch&&this._bDragInit){var e=this._pagingModel.getPage();this._handlePage({previousPage:e,page:e})}this._bTouch=!1,this._bDragInit=!1,this._bFirstToLast=!1,this._bLastToFirst=!1,this._scrolledForThisTouch=!1},_dragScrollResetPages:function(){for(var e=this._pagesWrapper,i=this._getCssPositionAttr(),s=this._pagingModel,n=s.getPage(),a=s.getPageCount(),r=this._getPages(),o=0;o<r.length;o++)o!=n&&this._hidePage(t(r[o]));e.css(i,"0px"),t(r[0]).removeClass(W),t(r[a-1]).removeClass(V)},_addBusyState:function(t){var i=this.element,s=e.Context.getContext(i[0]).getBusyContext(),n="FilmStrip";n+=" (id='"+i.attr("id")+"')";var a={description:n+=": "+t};return s.addBusyState(a)},_resolveBusyState:function(){this._busyStateResolveFunc&&(this._busyStateResolveFunc(),this._busyStateResolveFunc=null)},getNodeBySubId:function(e){if(null==e)return this.element?this.element[0]:null;var t=e.subId;return"oj-filmstrip-start-arrow"===t?this.widget().find(Z+y+Z+q).filter(this._filterNestedFilmStripsFunc)[0]:"oj-filmstrip-end-arrow"===t?this.widget().find(Z+y+Z+C).filter(this._filterNestedFilmStripsFunc)[0]:"oj-filmstrip-top-arrow"===t?this.widget().find(Z+y+Z+K).filter(this._filterNestedFilmStripsFunc)[0]:"oj-filmstrip-bottom-arrow"===t?this.widget().find(Z+y+Z+w).filter(this._filterNestedFilmStripsFunc)[0]:null},getSubIdByNode:function(e){for(var t=this.getNodeBySubId({subId:"oj-filmstrip-start-arrow"}),i=this.getNodeBySubId({subId:"oj-filmstrip-end-arrow"}),s=this.getNodeBySubId({subId:"oj-filmstrip-top-arrow"}),n=this.getNodeBySubId({subId:"oj-filmstrip-bottom-arrow"}),a=e,r=this.element[0];a&&a!=r;){if(a===t)return{subId:"oj-filmstrip-start-arrow"};if(a===i)return{subId:"oj-filmstrip-end-arrow"};if(a===s)return{subId:"oj-filmstrip-top-arrow"};if(a===n)return{subId:"oj-filmstrip-bottom-arrow"};a=a.parentElement}return null},_CompareOptionValues:function(t,i,s){return"currentItem"==t?e.Object.compareValues(i,s):this._super(t,i,s)}});var i="adjacent",s="aria-hidden",n="auto",a="display",r=3,o=.33,l=100,h="",u="JET FilmStrip: Value of 'currentItem' property not found: ",g="JET FilmStrip: Unsupported value set as 'orientation' property: ",d="Unsupported value set as 'arrowPlacement' property: ",p="Unsupported value set as 'arrowVisibility' property: ",c="Unsupported value set as 'looping' property: ",_="flex-basis",m="hidden",f=":hidden",v="horizontal",P="hover",b="currentItem",S="none",w="oj-bottom",C="oj-end",y="oj-filmstrip-arrow",F="oj-filmstrip-arrow-container",I="oj-filmstrip-arrow-transition",z="oj-filmstrip-container",M="oj-filmstrip-hover",T="oj-filmstrip-item",E="oj-filmstrip-item-container",j="oj-filmstrip-page",N="oj-filmstrip-pages-container",x="oj-filmstrip-transition",A="oj-filmstrip-transition-next-newpage-from",D="oj-filmstrip-transition-next-oldpage-from",H="oj-filmstrip-transition-prev-newpage-from",L="oj-filmstrip-transition-prev-oldpage-from",R="oj-filmstrip-transition-next-newpage-to",k="oj-filmstrip-transition-next-oldpage-to",B="oj-filmstrip-transition-prev-newpage-to",U="oj-filmstrip-transition-prev-oldpage-to",V="oj-filmstrip-transition-display-as-firstpage",W="oj-filmstrip-transition-display-as-lastpage",O="oj-filmstrip-vertical",q="oj-start",K="oj-top",X="off",Y="page",J="next",G="prev",Q="overlay",Z=".",$="px",ee=25,te="vertical",ie="visible",se=":visible",ne="-webkit-flex-basis",ae="JET FilmStrip: 'disabled' property not supported",re=function(e,t){e.css("-webkit-transform",t).css("-ms-transform",t).css("transform",t)},oe=function(e){e.css("-webkit-transform",h).css("-ms-transform",h).css("transform",h)},le=function(e){var i=t("<div></div>");return i.text(e),i[0].innerHTML}}(),e.CustomElementBridge.registerMetadata("oj-film-strip","baseComponent",{properties:{arrowPlacement:{type:"string",enumValues:["adjacent","overlay"]},arrowVisibility:{type:"string",enumValues:["visible","hidden","hover","auto"]},currentItem:{type:"object",writeback:!0,properties:{id:{type:"string"},index:{type:"number"}}},maxItemsPerPage:{type:"number"},orientation:{type:"string",enumValues:["horizontal","vertical"]},looping:{type:"string",enumValues:["off","page"]},translations:{type:"Object",properties:{labelAccFilmStrip:{type:"string",value:"Displaying page {pageIndex} of {pageCount}"},labelAccArrowNextPage:{type:"string",value:"Select Next to display next page"},labelAccArrowPreviousPage:{type:"string",value:"Select Previous to display previous page"},tipArrowNextPage:{type:"string",value:"Next"},tipArrowPreviousPage:{type:"string",value:"Previous"}}}},methods:{getItemsPerPage:{},getPagingModel:{}},extension:{_WIDGET_NAME:"ojFilmStrip"}}),e.CustomElementBridge.register("oj-film-strip",{metadata:e.CustomElementBridge.getMetadata("oj-film-strip")})});