import React, { createContext, useState, useEffect, useContext } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

import { GetTheme, GLOBAL_THEME_KEY, THEMES, THEME_ID } from "../constant/themes";

// interface ThemeContextValues {
//   themeID: THEME_ID,
//   themeValues: DefaultTheme,
//   changeTheme: (newTheme: THEME_ID) => boolean,
//   toggleTheme: () => void,
// }

// Actual context for theme propogation
const CustomThemeContext = createContext({
  themeID: THEME_ID.DEFAULT,
  themeValues: GetTheme(THEME_ID.DEFAULT),
  changeTheme: () => true,
  toggleTheme: () => {}
});

// Wrapper around StyledComponents' provider
const StyledThemeProvider = (props) => {
  const theme = useContext(CustomThemeContext);
  return (
    <StyledProvider theme={theme.themeValues}>
      { props.children }
    </StyledProvider>
  );
};


// Utility function
function prepareCssVariable(key, value){
  if(typeof(value) === 'string')
    return [{ key: '--' + key, value }];
  
  const arrayPrepared = [];
  for(const subEntry of Object.entries(value))
    arrayPrepared.push(...prepareCssVariable(key + '-' + subEntry[0], subEntry[1]));
  
  return arrayPrepared;
}

// Import this wherever you need the theme
export const useCustomTheme = () => React.useContext(CustomThemeContext);

// Import this in app.tsx or a root level component for your theme
export const CustomThemeProvider = (props) => {
  const [theme, setTheme] = useState({
    themeID: THEME_ID.DEFAULT,
    themeValues: GetTheme(THEME_ID.DEFAULT),
  });

  useEffect(() => {
    const cachedThemeID = THEME_ID[ localStorage.getItem(GLOBAL_THEME_KEY) ];
    const hasTheme = THEMES.has(cachedThemeID);
    if(hasTheme){
      setTheme({
        themeID: cachedThemeID,
        themeValues: GetTheme(cachedThemeID),
      });
      return;
    }

    // Either invalid themeID is set in localstorage, or 
    // actual theme isn't available corresponding to the intended themeID
    console.warn("Invalid cached theme, hence updating it !!!!");

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const newThemeID = prefersDarkMode ? THEME_ID.DARK : THEME_ID.DEFAULT;
    localStorage.setItem(GLOBAL_THEME_KEY, newThemeID);

    setTheme({
      themeID: newThemeID,
      themeValues: GetTheme(newThemeID)
    });
  }, []);



  useEffect(() => {
    // Set css variables based on theme
    const themeEntries = Object.entries(theme.themeValues);
    
    themeEntries.forEach((themeEntry) => {
      const cssVars = prepareCssVariable(themeEntry[0], themeEntry[1]);
      cssVars.forEach(cssVariable => {
        document.body.style.setProperty(
          cssVariable.key,
          cssVariable.value
        );
      })
    });
  }, [theme]);

  // Toggles through the themes available
  const toggleTheme = () => {
    const availableThemes = Object.values(THEME_ID);
    const currThemeIdx = availableThemes.findIndex(themeID => themeID === theme.themeID);
    const nextThemeIdx = currThemeIdx + 1 < availableThemes.length ? currThemeIdx + 1 : 1;
    changeTheme(THEME_ID[availableThemes[nextThemeIdx]]);
  }

  const changeTheme = (newTheme) => {
    if (!THEMES.has(newTheme)) {
      // If this is encountered, then the themeid is valid, but corresponding theme values aren't set
      console.warn("Invalid theme opted !!!!");
      return false;
    }
    localStorage.setItem(GLOBAL_THEME_KEY, newTheme);
    setTheme({
      themeID: newTheme,
      themeValues: GetTheme(newTheme)
    });
    return true;
  };

  return (
    <CustomThemeContext.Provider value={{ ...theme, changeTheme, toggleTheme }}>
      <StyledThemeProvider>
        {props.children}
      </StyledThemeProvider>
    </CustomThemeContext.Provider>
  );
};
