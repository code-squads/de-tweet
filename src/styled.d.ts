import 'styled-components';

interface IPalette {
  background: string,
  textColor: string,
  testLevel1?: {
    en1: '#fff',
    l2: {
      en2: '#ddd',
      en3: '#ccc',
      l3: {
        en4: '#bbb',
      },
      l3b: '#bba',
      l3c: {
        en5: '#baa'
      }
    }
  }
}

// Interface for theme
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string,
    palette: {
      common: {
        brandColor: string
        brandSecondaryColor: string
      }
      primary: IPalette
      secondary: IPalette
    }
  }
}