// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // working on the handle click for adding a room
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
      //$('#select option[value='roomname']').length > 0;
      RoomsView.renderRoom(roomname);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    $('#rooms select').append(`<option value ="${roomname}" id = '${roomname}'>${roomname}</option>`);
  },

  handleChange: function() {
    // TODO: Handle a user selecting a different room.
    //when select is clicked
    // rooms.currentRoom = new val
    var x = document.getElementById('select').value;
    // console.log(x);
    Rooms.currentRoom = x;
    RoomsView.render();
  },

  handleClick: function() {
    // TODO: Handle the user clicking the "Add Room" button.
    var newRoom = document.getElementById('addroom').value;
    Rooms._storage[newRoom] = newRoom;
    document.getElementById('addroom').value = '';
    RoomsView.renderRoom();
  }

};
