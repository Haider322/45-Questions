function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
      artist,
      title,
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  // Create three albums
  const album1 = make_album("Queen", "A Night at the Opera");
  const album2 = make_album("The Beatles", "Abbey Road");
  const album3 = make_album("Metallica", "Master of Puppets", 8); // Including tracks
  
  // Print the albums
  console.log(album1);
  console.log(album2);
  console.log(album3);