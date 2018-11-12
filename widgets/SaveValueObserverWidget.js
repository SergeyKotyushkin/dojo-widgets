define([
  // dojo
  'dojo/_base/declare',
  'dojo/_base/lang',
  "dojo/dom-construct",

  // dijit
  'dijit/_Widget',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dijit/form/Button',

  // custom
  './SaveValueWidget',
  'dojo/text!./templates/SaveValueObserverWidget.html'
], function(
  // dojo
  declare,
  dojoLang,
  domConstruct,

  // dijit
  _Widget,
  _TemplatedMixin,
  _WidgetsInTemplateMixin,
  dijitButton,

  // custom
  SaveValueWidget,
  template
) {
  return declare([
    _Widget, _TemplatedMixin, _WidgetsInTemplateMixin
  ], {
    templateString: template,

    onSaveValueWidgetChange: function(value) {
      var node = domConstruct.toDom('<div>' + JSON.stringify(value) + '</div>');
      domConstruct.place(node, this.logContainer);
    }
  });
});
