define([
    // dojo
    'dojo/_base/declare',

    // dijit
    'dijit/_Widget',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dijit/form/Button',
    'dijit/Dialog',

    // epi
    'epi-cms/widget/_HasChildDialogMixin',

    // custom
    'dojo/text!./templates/ButtonAndDialogWidget.html'
  ], 
  function(
    // dojo
    declare,

    // dijit
    _Widget,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    dijitButton,
    dijitDialog,

    // epi
    _HasChildDialogMixin,

    // custom
    template
  ) {
    return declare([_Widget, _TemplatedMixin, _WidgetsInTemplateMixin, _HasChildDialogMixin],
      {
        templateString: template,

        onShowDialogButtonClick: function() {
          var widgetContext = this;

          var dialog = new dijitDialog({
            title: 'Dialog message',
            content: 'Dialog content',
            style: 'width: 200px;',
            onClose: function() {
              widgetContext.isShowingChildDialog = false;
            }
          });

          widgetContext.isShowingChildDialog = true;
          dialog.show();
        }
      }
    );
  }
);