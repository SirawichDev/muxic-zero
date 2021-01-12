import { v4 as uuidv4 } from "uuid";
import { IList } from "../interfaces";
// *  Obj Data
// * {
// *    name: "",
// *    artist: "",
// *    cover: "",
// *    id: uuidv4(),
// *    active: false,
// *    color: [],
// *    audio: ""
// * }

export default function relaxSong(): IList[] {
  return [
    {
      name: "Wildlife",
      artist: "Philanthrope, chromonicci",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#825346", "#EF6936"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10263",
    },
    {
      name: "Harbor",
      artist: "Stan Forebee, The Field Tapes, azula, Francis",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#3C4256", "#DBE8DF"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11245",
    },
    {
      name: "What Was Before",
      artist: "Philanthrope, Leavv",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#7FB390", "#A9C4A0"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9923",
    },
    {
      name: "Melancholy",
      artist: "Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FBB866", "#5567A4"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11778",
    },
  ];
}
