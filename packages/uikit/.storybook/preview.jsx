import React, { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import ResetCSS from "../src/ResetCSS";
import { ModalProvider } from "../src/widgets/Modal";
import { MatchBreakpointsProvider } from "../src";
import light from "../src/theme/light";
import dark from "../src/theme/dark";
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from "next-themes";

/* snipped for brevity */
const globalDecorator = (StoryFn) => (
  <MatchBreakpointsProvider>
    <ModalProvider>
      <ResetCSS />
      {/* <ThemeProvider> */}
        <StoryFn />
      {/* </ThemeProvider> */}
    </ModalProvider>
  </MatchBreakpointsProvider>
);

const StyledThemeProvider = (props) => {
  const { setTheme } = useNextTheme();

  useEffect(() => {
    setTheme(props.theme.name);
  }, [props.theme.name]);

  return <ThemeProvider {...props}>{props.children}</ThemeProvider>;
};

const StorybookThemeProvider = (props) => {
  return (
    <NextThemeProvider>
      <StyledThemeProvider {...props} />
    </NextThemeProvider>
  );
};


export const decorators = [
  globalDecorator,
  withThemeFromJSXProvider({
  themes: {
    light: {name:'light', ...light},
    dark: {name:'dark', ...dark},
  },
  defaultTheme: 'light',
  Provider: StorybookThemeProvider,
})];