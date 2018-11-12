require([
    // dojo
    'dojo/dom',
    'dojo/dom-construct',
    
    // custom
    'widgets/SimpleWidget',
    'widgets/ButtonAndDialogWidget',

    'dojo/domReady!'
  ], function(
    // dojo
    dojoDom,
    dojoDomConstruct,

    // custom
    SimpleWidget,
    ButtonAndDialogWidget,

    dojoDomReady
  ) {
    var widgets = [];
    widgets.push(new SimpleWidget());
    widgets.push(new ButtonAndDialogWidget());
    
    var pageWrapperNode = dojoDom.byId('widgets-container');
    widgets.forEach(function(widget) {
        widget.placeAt(pageWrapperNode);
        dojoDomConstruct.place('<hr/>', pageWrapperNode);
    });
  }
)