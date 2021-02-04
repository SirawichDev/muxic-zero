import { RefObject } from "react";
export const audioPlay = (
  isPlaying: boolean,
  audioRef: RefObject<HTMLAudioElement>
) => {
  if (isPlaying) {
    const play = audioRef.current?.play();
    if (play !== undefined) {
      play.then(() => {
        audioRef.current?.play();
      });
    }
  }
};
