/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['ojs/ojcore', 'ojs/ojcomponentcore', 'ojs/ojlabel'], 
       /*
        * @param {Object} oj 
        */
       function(oj)
{

/**
 * Copyright (c) 2017, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @ojcomponent oj.ojLabelValue
 * @since 5.1.0
 * @ojshortdesc Used to specify label element(s) and value element(s) in a single layout element.
 * @ojstatus preview
 * @ojsignature {target: "Type", value:"class ojLabelValue extends JetElement<ojLabelValueSettableProperties>"}
 *
 * @classdesc
 * <h3 id="optionOverview-section">
 *   JET LabelValue
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#optionOverview-section"></a>
 * </h3>
 * <p>The oj-label-value element is used to group label(s) and value(s) elements into a single
 * layout element that is most commonly a child of oj-form-layout.  This component gives some
 * flexibility to what shows up in the label portion and what shows up in the value portion of
 * an oj-form-layout element sequence of laid out elements (most commonly which are label/value pairs).
 * The 'label' and 'value' slots are used to add elements to either the 'label' or 'value' parts
 * of a label/value form layout item.
 *
 * <p>For example:
 * <pre class="prettyprint">
 * <code>
 * &lt;oj-form-layout max-columns='2' label-edge='start' label-width="50%">
 *   &lt;oj-label-value>
 *     &lt;my-label slot="label" for="my1">&lt;/my-label> 
 *     &lt;my-input slot="value" id="my1">&lt;/my-input>
 *   &lt;/oj-label-value>
 *   &lt;oj-label-value>
 *     &lt;my-label slot="label" for="my2">&lt;/my-label> 
 *   &lt;/oj-label-value>
 *   &lt;oj-label-value>
 *     &lt;my-input slot="value" id="my2">&lt;/my-input>
 *   &lt;/oj-label-value>
 * &lt;/oj-form-layout>
 * </code></pre>
 *
 * <p>Any slot child elements not in either a 'label' or 'value' slot will be removed from the DOM.
 * This includes the default slot.
 * </p>
 */

/**
 * @member
 * @name labelEdge
 * @expose
 * @memberof oj.ojLabelValue
 * @instance
 * @type {string}
 * @default "inherit"
 * @ojvalue {string} "start" Label is inline with the start of its value component
 * @ojvalue {string} "top" Label is on top of its value component
 * @desc Specifies how the label is aligned with its value component.
 * <p>If the value is 'inherit', it will inherit label-edge from it's closest custom element ancestor element.  If the ancestor doesn't have a label-width attribute, the default is "top".</p>
 *
 * @example <caption>Initialize the oj-label-value with the <code class="prettyprint">label-edge</code> attribute specified:</caption>
 * &lt;oj-label-value label-edge="top">
 *   &lt;oj-input-text id="inputcontrol" required value="text" label-hint="input 1">&lt;/oj-input-text>
 * &lt;/oj-label-value>
 *
 * @example <caption>Get or set the <code class="prettyprint">labelEdge</code> property after initialization:</caption>
 * // getter
 * var edge = myLabelValue.labelEdge;
 *
 * // setter
 * myLabelValue.labelEdge = 'start';
 */

/**
 * @member
 * @name labelWidth
 * @expose
 * @memberof oj.ojLabelValue
 * @instance
 * @type {string}
 * @default "inherit"
 * @desc Specifies the label width.
 * <p>This can be any legal <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">CSS width</a> or 'inherit',
 * which will inherit label-width from it's closest custom element ancestor element.  If the value is "inherit" and ancestor doesn't have a label-width attribute, the default is "33%".</p>
 *
 * @example <caption>Initialize the oj-form-layout with the <code class="prettyprint">label-width</code> attribute specified:</caption>
 * &lt;oj-form-layout label-width="50%">
 *   &lt;oj-input-text id="inputcontrol" required value="text" label-hint="input 1">&lt;/oj-input-text>
 *   &lt;oj-text-area id="textareacontrol" value='text' rows="6" label-hint="textarea">&lt;/oj-text-area>
 * &lt;/oj-form-layout>
 *
 * @example <caption>Get or set the <code class="prettyprint">labelWidth</code> property after initialization:</caption>
 * // getter
 * var width = myLabelValue.labelWidth;
 *
 * // setter
 * myLabelValue.labelWidth = '60px';
 */

/**
 * Sets a property or a single subproperty for complex properties and notifies the component
 * of the change, triggering a [property]Changed event.
 *
 * @function setProperty
 * @param {string} property - The property name to set. Supports dot notation for subproperty access.
 * @param {*} value - The new value to set the property to.
 * @return {void}
 *
 * @expose
 * @memberof oj.ojLabelValue
 * @instance
 *
 * @example <caption>Set a single subproperty of a complex property:</caption>
 * myComponent.setProperty('complexProperty.subProperty1.subProperty2', "someValue");
 */
/**
 * Retrieves a value for a property or a single subproperty for complex properties.
 * @function getProperty
 * @param {string} property - The property name to get. Supports dot notation for subproperty access.
 * @return {*}
 *
 * @expose
 * @memberof oj.ojLabelValue
 * @instance
 *
 * @example <caption>Get a single subproperty of a complex property:</caption>
 * var subpropValue = myComponent.getProperty('complexProperty.subProperty1.subProperty2');
 */
/**
 * Performs a batch set of properties.
 * @function setProperties
 * @param {Object} properties - An object containing the property and value pairs to set.
 * @return {void}
 * @expose
 * @memberof oj.ojLabelValue
 * @instance
 *
 * @example <caption>Set a batch of properties:</caption>
 * myComponent.setProperties({"prop1": "value1", "prop2.subprop": "value2", "prop3": "value3"});
 */
/**
 * Refreshes the visual state of the component.
 *
 * @function refresh
 *
 * @expose
 * @memberof oj.ojLabelValue
 * @return {void}
 * @instance
 */

/**
 * @ignore
 */
var ojLabelValueMeta = {
  properties: {
    labelEdge: {
      type: 'string',
      enumValues: ['start', 'top', 'inherit'],
      value: 'inherit'
    },
    labelWidth: {
      type: 'string',
      value: 'inherit'
    }    
  },
  extension: {
    _CONSTRUCTOR: ojLabelValue
  }
};
Object.freeze(ojLabelValueMeta);

/**
 * The _ojLabelValue constructor function. 
 *
 * @constructor
 * @private
 */
function ojLabelValue(context) {
  var self = this;
  var element = context.element;
  var labelOjFlexItem;
  var valueOjFlexItem;

  this.createDOM = function () {
    element.classList.add('oj-label-value', 'oj-form');
    var ojFlexDiv;

    // Create the flex wrapper div
    ojFlexDiv = document.createElement('div');
    ojFlexDiv.classList.add('oj-flex');
    ojFlexDiv.setAttribute('data-oj-context', '');
    ojFlexDiv.setAttribute('data-oj-internal', '');

    // Create the label div
    labelOjFlexItem = document.createElement('div');
    labelOjFlexItem.classList.add('oj-flex-item');
    labelOjFlexItem.setAttribute('data-oj-context', '');
    labelOjFlexItem.setAttribute('data-oj-internal', '');

    // Create the value div
    valueOjFlexItem = document.createElement('div');
    valueOjFlexItem.classList.add('oj-flex-item');
    valueOjFlexItem.setAttribute('data-oj-context', '');
    valueOjFlexItem.setAttribute('data-oj-internal', '');

    // move the slot children to the appropriate div
    while (element.firstElementChild) {
      var child = element.firstElementChild;
      switch (child.getAttribute("slot"))
      {
        case 'label':
          labelOjFlexItem.appendChild(child); // @HTMLUpdateOK reparenting child nodes
          break;
        case 'value':
          valueOjFlexItem.appendChild(child); // @HTMLUpdateOK reparenting child nodes
          break;
        default:
          element.removeChild(child); // @HTMLUpdateOK removing any non 'label'/'value' slot children
          break;
      }
    }

    ojFlexDiv.appendChild(labelOjFlexItem); // @HTMLUpdateOK appending internally created DOM element
    ojFlexDiv.appendChild(valueOjFlexItem); // @HTMLUpdateOK appending internally created DOM element
    element.appendChild(ojFlexDiv); // @HTMLUpdateOK appending internally created DOM element
  };

  /**
   * The main render function.  This function gets called on initial render,
   * when oj-label-value attributes are modified.
   *
   * @memberof oj.ojLabelValue
   * @instance
   * @private
   */
  this.updateDOM = function () {
    var customElementAncestor = _findClosestCustomElementAncestor();
    
    var labelEdge = _getLabelEdge(customElementAncestor);
    var labelWidth = labelEdge === 'start' ? _getLabelWidth(customElementAncestor) : '100%';    

    if (labelEdge === 'start') {
      element.classList.add("oj-formlayout-labels-inline");
    } else {
      element.classList.remove("oj-formlayout-labels-inline");
    }
    
    labelOjFlexItem.style.webkitFlex = "0 1 "+labelWidth;
    labelOjFlexItem.style.flex = "0 1 "+labelWidth;
    labelOjFlexItem.style.maxWidth = labelWidth;
    labelOjFlexItem.style.width = labelWidth;
    valueOjFlexItem.style.webkitFlex = "1 1 0";
    valueOjFlexItem.style.flex = "1 1 0";
  };
  
  function _getLabelEdge(customElementAncestor) {
    var labelEdge = "top"; // default value if "inherit" and ancestor doesn't support labelEdge
    
    if (element.labelEdge === "inherit") {
      // We will inherit from custom element if it supports labelEdge
      if (customElementAncestor && 'labelEdge' in customElementAncestor) {
        labelEdge = customElementAncestor.labelEdge;
      }
    } else {
      labelEdge = element.labelEdge;
    }
    
    return labelEdge;
  };
  
  function _getLabelWidth(customElementAncestor) {
    var labelWidth = "33%"; // default value if "inherit" and ancestor doesn't support labelWidth
    
    if (element.labelWidth === "inherit") {
      // We will inherit from custom element if it supports labelWidth
      if (customElementAncestor && 'labelWidth' in customElementAncestor) {
        labelWidth = customElementAncestor.labelWidth;
      }
    } else {
      labelWidth = element.labelWidth;
    }
    
    return labelWidth;
  };

  // searches ancestor elements, until and interesting tag-name is found,
  // returns null if no interesting element is found.
  function _findClosestCustomElementAncestor()
  {
    var ancestor = element.parentElement;
    // walk up parents until we find the first custom element
    for (; ancestor; ancestor = ancestor.parentElement) {
      // Is it a custom element?
      if (ancestor.tagName.indexOf('-') !== -1) {
        return ancestor;
      }
    }

    return null; // no custom element ancestor
  };
}

oj.CustomElementBridge.registerMetadata('oj-label-value', null, ojLabelValueMeta);
oj.CustomElementBridge.register('oj-label-value',
                                { metadata: oj.CustomElementBridge.getMetadata('oj-label-value') });

});