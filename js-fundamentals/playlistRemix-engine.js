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

function dedupeTracks(tracks) {
  if (!Array.isArray(tracks)) {
    return [];
  }

  const seenIds = new Set();

  return tracks.filter(track => {
    if (seenIds.has(track.trackId)) {
      return false;
    }
    seenIds.add(track.trackId);
    return true;
  })
}

function enforceArtistQuota(tracks, maxQuota) {
  if (!Array.isArray(tracks)) {
    return [];
  }

  const artistCounts = {};

  return tracks.filter(track => {
    const artist = track.artist;

    if (!artistCounts[artist]) {
      artistCounts[artist] = 0;
    }

    if (artistCounts[artist] >= maxQuota) {
      return false;
    }

    artistCounts[artist]++;
    return true;
  });
}

function buildSchedule(tracks) {
  if (!Array.isArray(tracks)) {
    return [];
  }

  return tracks.map((track, index) => {
    return {
      slot: index + 1,
      trackId: track.trackId
    };
  });
}

function remixPlaylist(playlists, maxQuota) {
  const flat = flattenPlaylists(playlists);

  const scored = scoreTracks(flat);

  const deduped = dedupeTracks(scored);

  const quota = enforceArtistQuota(deduped, maxQuota);

  const final = buildSchedule(quota);

  return final;
}
