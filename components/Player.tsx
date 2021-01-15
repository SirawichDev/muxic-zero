import React, {
  FC,
  ReactNode,
  ReactPortal,
  RefObject,
  SyntheticEvent,
  useRef,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IList } from "../interfaces/list";
import { useState } from "react";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

type PlayerProps = {
  currentSong: IList;
  setIsPlaying: (isPlaying: boolean) => void;
  isPlaying: boolean;
  songInfo: Record<string, any>;
  setSongInfo: (song: Record<string, any>) => void;
  audioRef: RefObject<HTMLAudioElement>;
};
const Player: FC<PlayerProps> = ({
  audioRef,
  currentSong,
  isPlaying,
  setSongInfo,
  songInfo,
  setIsPlaying,
}) => {
  // Volume Adjust props
  // if (audioRef.current) {
  //   audioRef.current.volume = .3;
  // }
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time: number) => {
    if (time) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
  };
  const dragHandler = (e: SyntheticEvent) => {
    let { value }: { value: string } = e.target as HTMLInputElement;
    if (audioRef.current) {
      audioRef.current.currentTime = Number(value);
    }
    setSongInfo({
      ...songInfo,
      currentTime: value,
    });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime) || "0:00"}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="play" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          className="skip-back"
          onClick={playHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon className="skip-next" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
