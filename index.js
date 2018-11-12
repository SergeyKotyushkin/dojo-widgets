require([
    // dojo
    'dojo/dom',
    'dojo/dom-construct',
    
    // custom
    'widgets/SimpleWidget',
  ], function(
    // dojo
    dojoDom,
    dojoDomConstruct,
    
    // custom
    SimpleWidget
  ) {
    var simpleWidget = new SimpleWidget();
    
    var pageWrapperNode = dojoDom.byId('widgets-container');
    dojoDomConstruct.place(simpleWidget.domNode, pageWrapperNode, 'last');
    dojoDomConstruct.place('<hr/>', pageWrapperNode, 'last');
  }
)