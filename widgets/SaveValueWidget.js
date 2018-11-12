define([
  // dojo
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/aspect',

  // dijit
  'dijit/_Widget',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  "dijit/form/TextBox",
  "dijit/form/Select",

  // custom
  'dojo/text!./templates/SaveValueWidget.html'
], function(
  // dojo
  declare,
  dojoLang,
  dojoAspect,

  // dijit
  _Widget,
  _TemplatedMixin,
  _WidgetsInTemplateMixin,
  dijitTextBox,
  dijitSelect,

  // custom
  template
) {
  return declare([
    _Widget, _TemplatedMixin, _WidgetsInTemplateMixin
  ], {
    templateString: template,

    startup: function() {
      this.inherited(arguments);

      this._disposeAll();

      var onChangeFunction = dojoLang.hitch(this, this._afterControlChanged);
      this._nameOnChangeSubscription = dojoAspect.after(
        this.nameTextBox,
        'onChange',
        onChangeFunction
      );

      this._colorOnChangeSubscription = dojoAspect.after(
        this.colorSelect,
        'onChange',
        onChangeFunction
      );
    },

    destroy: function() {
      this._disposeAll();

      this.inherited(arguments);
    },

    _disposeAll: function() {
      if (this._nameOnChangeSubscription) {
        this._nameOnChangeSubscription.remove();
      }

      if (this._colorOnChangeSubscription) {
        this._colorOnChangeSubscription.remove();
      }
    },

    _afterControlChanged: function(returnValue, originArguments) {
      this._saveValue();
      return returnValue;
    },

    _saveValue: function() {
      var valueForSave = this._getValueForSave();
      var copyOfValueForSave = JSON.parse(JSON.stringify(valueForSave));

      this.onFocus();
      this._set('value', copyOfValueForSave);
      this.onChange(copyOfValueForSave);
      this.onBlur();
    },

    _getValueForSave: function() {
      return {name: this.nameTextBox.get('value'), color: this.colorSelect.get('value')};
    }
  });
});
