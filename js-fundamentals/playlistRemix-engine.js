const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  
  let result = [];
  
  for(let i = 0; i < arr.length; i++) {
    let list = arr[i];

    for(let j = 0; j < list.length; j++) {
      let track = list[j];

      let newTrack = {
        trackId: track.trackId,
        artist: track.artist,
        title: track.title,
        votes: track.votes,
        bpm: track.bpm,
        source: [i, j]
      };
      result.push(newTrack);
    }
  }
  return result;
}

function scoreTracks (tracks) {
  let scoredList = [];

  for (let i = 0; i < tracks.length; i++){
    let track = tracks[i];

    let trackScore = track.votes * 10 - Math.abs(track.bpm - 120);

    let scoredTrack = {
      trackId: track.trackId,
      artist: track.artist,
      title: track.title,
      votes: track.votes,
      bpm: track.bpm,
      source: track.source,
      score: trackScore
    }
    scoredList.push(scoredTrack);
  }
  return scoredList;
}

//TO BE CONTINUED STORY 4