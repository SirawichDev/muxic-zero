import React, { FC, RefObject } from "react";
import { IList } from "../interfaces";
import { audioPlay } from "../utils/playAudio";
type SongProps = {
  currentSong: IList;
  setCurrentSong: (song: IList) => void;
  songs: IList[];
  id: string;
  isPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
};
const LibrarySong: FC<SongProps> = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  audioRef,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(currentSong);
    console.log("isPlaying", isPlaying);
    audioPlay(isPlaying, audioRef);
  };
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img alt={currentSong.name} src={currentSong.cover} />
      <div className="song-description">
        <h3>{currentSong.name}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
