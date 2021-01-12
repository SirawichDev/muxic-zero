import React, { ChangeEvent, FC, SyntheticEvent, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IList } from "../interfaces/list";
import { useState } from "react";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
type PlayerProps = {
  currentSong: IList;
  setIsPlaying: (isPlaying: boolean) => void;
  isPlaying: boolean;
};
const Player: FC<PlayerProps> = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e: SyntheticEvent) => {
    const {
      currentTime,
    }: { currentTime: number } = e.target as HTMLMediaElement;
    console.log(
      "🚀 ~ file: Player.tsx ~ line 31 ~ timeUpdateHandler ~ currentTime",
      currentTime
    );
  };
  const [songInfo, setSongInfo] = useState<Record<string, unknown>>({
    currentTime: null,
    duration: null,
  });
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="play" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          className="skip-back"
          onClick={playHandler}
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon className="skip-next" size="2x" icon={faAngleRight} />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
