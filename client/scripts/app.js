// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    console.log('hello');
    FormView.initialize();
    RoomsView.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    MessagesView.initialize();
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    // debugger;
    return Parse.readAll((data) => {
      console.log('inside parse.readAll');
      // examine the response from the server request:
      // console.log(data);
      return Messages.retrieveFrom(data);
      // return data;
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
// App.initialize();

