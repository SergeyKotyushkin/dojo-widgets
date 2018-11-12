define([
    // dojo
    'dojo/_base/declare',
    
    // dijit
    'dijit/_Widget',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin'
  ], 
  function(
    // dojo
    declare,
    
    // dijit
    _Widget,
    _TemplatedMixin,
    _WidgetsInTemplateMixin
  ) {
    return declare([_Widget, _TemplatedMixin, _WidgetsInTemplateMixin],
      {
        templateString: '<div>Simple widget!</div>'
      }
    );
  }
);