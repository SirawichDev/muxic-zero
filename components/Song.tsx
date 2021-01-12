import React, { FC } from "react";
import { IList } from "../interfaces";

type SongProps = {
  currentSong: IList;
};
const Song: FC<SongProps> = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};
export default Song;
