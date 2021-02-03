import React, { FC, RefObject, SyntheticEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IList } from "../interfaces/list";
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
  songs: IList[];
  setCurrentSong: (song: IList) => void;
};
const Player: FC<PlayerProps> = ({
  audioRef,
  isPlaying,
  setSongInfo,
  currentSong,
  songInfo,
  setCurrentSong,
  songs,
  setIsPlaying,
}) => {
  // Volume Adjust props
  if (audioRef.current) {
    audioRef.current.volume = 0.2;
  }
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
  const skipTrackHandler = (di: String) => {
    let currenIndex: number = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    if (di === "skip-forward") {
      if ((currenIndex + 1) % songs.length >= songs.length) {
        setCurrentSong(songs[songs.length + 1]);
        return;
      }
      setCurrentSong(songs[(currenIndex + 1) % songs.length]);
    }
    if (di === "skip-back") {
      if ((currenIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[(currenIndex - 1) % songs.length]);
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime) || "0:00"}</p>
        <input
          min={0}
          max={songInfo.duration.toString()}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="play"
          onClick={() => skipTrackHandler("skip-back")}
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="skip-back"
          onClick={playHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-next"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
