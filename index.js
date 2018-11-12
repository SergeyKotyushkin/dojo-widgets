require([
  // dojo
  'dojo/dom',
  'dojo/dom-construct',

  // custom
  'widgets/SimpleWidget',
  'widgets/ButtonAndDialogWidget',
  'widgets/SaveValueObserverWidget',

  'dojo/domReady!'
], function(
  // dojo
  dojoDom,
  dojoDomConstruct,

  // custom
  SimpleWidget,
  ButtonAndDialogWidget,
  SaveValueObserverWidget,

  dojoDomReady
) {
  var widgets = [];
  widgets.push(new SimpleWidget());
  widgets.push(new ButtonAndDialogWidget());
  widgets.push(new SaveValueObserverWidget());

  var pageWrapperNode = dojoDom.byId('widgets-container');
  widgets.forEach(function(widget) {
    widget.placeAt(pageWrapperNode);
    widget.startup();
    dojoDomConstruct.place('<hr/>', pageWrapperNode);
  });
})
