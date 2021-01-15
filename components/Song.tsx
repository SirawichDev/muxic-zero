import React, { FC } from "react";
import { IList } from "../interfaces";
import styled, { keyframes } from "styled-components";

type SongProps = {
  currentSong: IList;
};

const rotate = keyframes`
    from {
    opacity: 1;
    transform: scale3d(0.75,0.75,1);
  }
  
  to {
    opacity: 0;
    transform: scale3d(1.5,1.5,1);
  }
`;

const Rotate = styled.div`
  .request-loader {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    top: 50%;
    left: 40%;
    width: 20%;
    border-radius: 50%;
    z-index: -10;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);

    &::after {
      opacity: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -8px;
      left: -8px;
      right: 0;
      bottom: 0;
      content: "";
      border: 8px solid ${({ theme }) => theme.toggleBorder};
      border-radius: 100%;
      animation-name: ${rotate};
      animation-duration: 3s;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
      z-index: -1;
    }

    &::before {
      opacity: 0;
      position: absolute;
      top: -8px;
      left: -8px;
      right: 0;
      bottom: 0;
      content: "";
      border: 8px solid ${({ theme }) => theme.toggleBorder};
      border-radius: 100%;
      animation-name: ${rotate};
      animation-duration: 3s;
      animation-delay: 0.5s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
      z-index: -1;
    }
  }
`;

const Song: FC<SongProps> = ({ currentSong }) => {
  return (
    <div className="song-container">
      <Rotate>
        <div className="request-loader">
          <img alt={currentSong.name} src={currentSong.cover} />
        </div>
      </Rotate>

      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};
export default Song;
