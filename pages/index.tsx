import Song from "../components/Song";
import Player from "../components/Player";

import SongList from "../utils/song-list";
import { useState } from "react";
import { IList } from "../interfaces";

const IndexPage = () => {
  const [songs, setSongs] = useState<IList[]>(SongList());
  const [currentSong, setCurrentSongs] = useState<IList>(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
    </>
  );
};

export default IndexPage;
