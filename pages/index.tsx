import Song from "../components/Song";
import Player from "../components/Player";
import Library from "../components/Library";
import SongList from "../utils/song-list";
import { useEffect, useRef, useState, SyntheticEvent } from "react";
import { IList } from "../interfaces";
import { ThemeProvider, createGlobalStyle } from "../styles/styled-components";
import Toggle from "../components/ThemeToggle/ThemeToggle";
import { StyledSongTheme } from "../styles/theme";

const GlobalStyles = createGlobalStyle`

    body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      transition: all 0.25s linear;
    }

    small {
      display: block;
    }

    .library {
      background-color: ${({ theme }) => theme.body};
      box-shadow: ${({ theme }) => theme.boxShadow};
    }

    h1,
    h2,
    h3 {
      color: ${({ theme }) => theme.text};
    }
    button {
      display: block;
    }

    a {
      color: ${({ theme }) => theme.text};
    }
  `;
const lightTheme: StyledSongTheme = {
  body: "white",
  text: "#363537",
  toggleBorder: "#9fe6f8",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

const darkTheme: StyledSongTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#af60e4",
  gradient: "linear-gradient(#091236, #1E215D)",
};
const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem("theme", "light");
    }
  });

  return [theme, toggleTheme];
};
const IndexPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [songs, setSongs] = useState<IList[]>(SongList());
  console.log(
    "🚀 ~ file: index.tsx ~ line 82 ~ IndexPage ~ setSongs",
    setSongs
  );
  const [currentSong, setCurrentSong] = useState<IList>(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [theme, toggleTheme] = useDarkMode();
  console.log(
    "🚀 ~ file: index.tsx ~ line 89 ~ IndexPage ~ toggleTheme",
    toggleTheme
  );
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [songInfo, setSongInfo] = useState<Record<string, any>>({
    currentTime: 0,
    duration: 0,
  });
  const timeUpdateHandler = (e: SyntheticEvent) => {
    const {
      currentTime,
      duration,
    }: { currentTime: number; duration: number } = e.target as HTMLMediaElement;
    setSongInfo({ ...songInfo, currentTime: currentTime, duration: duration });
  };
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </>
        <Song currentSong={currentSong} />
        <Player
          audioRef={audioRef}
          currentSong={currentSong}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          songs={songs}
          setCurrentSong={setCurrentSong}
        />
        <Library
          songs={songs}
          audioRef={audioRef}
          selectedSong={setCurrentSong}
          isPlaying={isPlaying}
        />
        <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
