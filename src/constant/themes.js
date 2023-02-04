const commonPalletePart = {
  brandColor: 'blue',
  brandSecondaryColor: 'orange',
}

export const LightTheme = {
  borderRadius: '4px',
  palette: {
    common: commonPalletePart,
    primary: {
      background: '#fff',
      textColor: '#000',
    },
    secondary: {
      background: '#fff',
      textColor: '#000'
    }
 }
}
export const DarkTheme = {
  borderRadius: '4px',
  palette: {
    common: commonPalletePart,
    primary: {
      background: '#333',
      textColor: '#fff',
    },
    secondary: {
      background: '#333',
      textColor: '#fff'
    }
 }
}

export const THEME_ID = {
  DEFAULT: "DEFAULT",
  LIGHT: "LIGHT",
  DARK: "DARK",
}

export const GLOBAL_THEME_KEY = 'GLOBAL_THEME';

export const DefaultThemeValue = LightTheme;

export const THEMES = new Map([
  [THEME_ID.DEFAULT, DefaultThemeValue],
  [THEME_ID.LIGHT, LightTheme],
  [THEME_ID.DARK, DarkTheme]
]);
export const GetTheme = (themeID) => THEMES.get(themeID) || DefaultThemeValue;