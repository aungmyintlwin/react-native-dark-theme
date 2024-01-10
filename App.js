import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme } from '@rneui/themed';
import MainNavigation from './src/navigations';
import lightColorsTheme from './src/theme/lightColors';
import darkColorsTheme from './src/theme/darkColors';

const theme = createTheme({
  lightColors: {
    ...lightColorsTheme
  },
  darkColors: {
    ...darkColorsTheme
  },
  mode: 'light',
});
const App = () => {
  return (
    <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <MainNavigation/>
        </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App