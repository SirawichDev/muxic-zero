import React, { FC } from "react";
import styled from "styled-components";
type ToggleProps = {
  theme: string | (() => void);
  toggleTheme: string | (() => void);
};
type BtnToggleProps = {
  children?: HTMLCollection | string,
  lightTheme: string | (() => void);
  onClick: ((e?: React.MouseEvent) => void);
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ToggleContainer = styled.button<BtnToggleProps>`
position: absolute;
display: flex;
right: 0;
justify-content: space-between;
background: ${({ theme }) => theme.gradient};
width: 8rem;
height: 3.5rem;
margin: 0 auto;
border-radius: 30px;
border: 2px solid ${({ theme }) => theme.toggleBorder};
font-size: 0.5rem;
padding: 0.5rem;
overflow: hidden;
outline: none;
cursor: pointer;

img {
  max-width: 2.5rem;
  height: auto;
  transition: all 2s linear;

  &:first-child {
    transform: ${({ lightTheme }) => lightTheme ? "translateY(0)" : "translateY(100px)"};
  }

  &:nth-child(2) {
    transform: ${({ lightTheme }) => lightTheme ? "translateY(-100px)" : "translateY(0)"};
  }
}
`;

const Toggle: FC<ToggleProps> = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img
        src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
        width="224"
        height="224"
        alt="Sun free icon"
        title="Sun free icon"
      />
      <img
        src="https://image.flaticon.com/icons/svg/2033/2033921.svg"
        width="224"
        height="224"
        alt="Moon free icon"
        title="Moon free icon"
      />
    </ToggleContainer>
  );
};

export default Toggle;
