// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _storage: {},
  currentRoom: null,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRoom: function(data) {
    // console.log('data', data);
    for (var i = 0; i < data.length; i++) {
      if (!this._storage[data[i].roomname]) {
        this._storage[data[i].roomname] = data[i].roomname;
      }
    }
    // console.log('roomnames', this._storage);
    return this._storage;
  }

};