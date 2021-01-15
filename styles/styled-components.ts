import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { StyledSongTheme } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<StyledSongTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;