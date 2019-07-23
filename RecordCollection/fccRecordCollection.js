let collection = {
  '2548': {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  '2468': {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  '1245': {
    artist: 'Robert Palmer',
    tracks: []
  },
  '5439': {
    album: 'ABBA Gold'
  }
};

function updateRecords(id, prop, value) {
  if (!collection[id][prop]) {
    collection[id][prop] = value;
  } else if (collection[id][prop] && value !== '') {
    collection[id]['tracks'].push(value);
  }
  return collection;
}

// If prop does not exist, add new prop and value to object
updateRecords(1245, 'album', 'Riptide');
updateRecords(5439, 'artist', 'ABBA');
// If value is blank do not allow add
updateRecords(2548, 'artist', '');
updateRecords(2548, 'tracks', '');
// Add new track to array 3/3
updateRecords(5439, 'tracks', 'Take a Chance on Me');
updateRecords(1245, 'tracks', 'Addicted to Love');
updateRecords(2468, 'tracks', 'Free');

console.log(collection);
