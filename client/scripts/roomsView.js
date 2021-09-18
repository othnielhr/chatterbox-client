// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('submit', RoomsView.handleClick);
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
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // when AddRoom is clicked (function() {
    // takes data from input and add value to rooms._storage object
    // })
    $('#addroom').click(function() {
      var newRoom = document.getElementById('addroom').value;
      Rooms._storage[newRoom] = newRoom;
    });
  }

};
