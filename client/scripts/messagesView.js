// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // iterate over the messages._data
    // call renderMessage(i)
    debugger;
    console.log('inside render function', App.fetch());
    for (var i = 0; i < Messages._data.length; i++) {

      MessagesView.renderMessage(Messages._data[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // takes a message 'the result of calling render function'
    // appends to a div on DOM
    var rendered = MessageView.render(message);
    $chats.append(rendered);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};