// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    $('#rooms select').empty();
    // TODO: Render out the list of rooms.
    for (var key in Rooms._storage) {
      var roomname = Rooms._storage[key];
      //   console.log($('#rooms select').find('#roomname'));
      //   if ($('#rooms select').find('#roomname')) {
      //   // if option value is not a child of the rooms select
      // }
      RoomsView.renderRoom(roomname);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    $('#rooms select').append(`<option value ="${roomname}" id = '${roomname}'>${roomname}</option>`);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
