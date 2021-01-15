import React, { FC, RefObject } from "react";
import LibrarySong from "./LibrarySong";
import { IList } from "../interfaces/list";

type SongsProps = {
  songs: IList[];
  selectedSong: (song: IList) => void;
  audioRef: RefObject<HTMLAudioElement>;
  isPlaying: boolean;
};
const Library: FC<SongsProps> = ({
  songs,
  isPlaying,
  selectedSong,
  audioRef,
}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            currentSong={song}
            setCurrentSong={selectedSong}
            songs={songs}
            isPlaying={isPlaying}
            audioRef={audioRef}
            id={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
