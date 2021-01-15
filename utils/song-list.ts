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
    {
      name: "Our Star",
      artist: "niquo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FBB866", "#5567A4"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10328",
    },
    {
      name: "The Noise in Pictures",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      id: uuidv4(),
      color: ["#86453A", "#55737F"],
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10035",
    },
    {
      name: "Aerials",
      artist: "No Spirit, dryhope",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/04/478079cd16fca3ef62a4667dff1673e96e2b635f-1024x1024.jpg",
      id: uuidv4(),
      color: ["#407558", "#5E99BD"],
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9423",
    },
    {
      name: "Happy Place",
      artist: "Philanthrope, Sitting Duck, squeeda ",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#619088", "#6CCBBC"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9781",
    },
    {
      name: "Yesterday",
      artist: "Mo Anando",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/b6e48e6cfb2a90723b9cf1b108a6d305f9204eb4-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FAA9B0", "#9CE5C7"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9281",
    },
    {
      name: "Calm",
      artist: "ØDYSSEE, Florent Garcia",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/d9d8ae69141cb7838e3c53bbf393c6218285e384-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FFC8BD", "#0A1A4E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9285",
    },
    {
      name: "Clocks Forward",
      artist: "Psalm Trees, Guillaume Muschalle",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/db956cc3e3bb2d3725d0ce3f9aaf7190671c9451-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F1D1A6", "#BC9A2B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7814",
    },
    {
      name: "Eternal now",
      artist: "less.people",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/0b601886865a922eb60035bc92f123f425806ca6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#4F2C28", "#E3D3BE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7965",
    },
    {
      name: "Alwayshere",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#CB7672", "#3B3287"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7963",
    },
  ];
}
