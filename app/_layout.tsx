import { SplashScreen, Stack } from "expo-router";
import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { NAV_THEME } from "@/lib/constants";
import { useColorScheme } from "@/lib/hooks";
import { FC, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "@/global.css";

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: NAV_THEME.light,
};

const DARK_THEME: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: NAV_THEME.dark,
};

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const RootLayout: FC = () => {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem("theme");

      if (!theme) {
        AsyncStorage.setItem("theme", colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }

      const colorTheme = theme === "dark" ? "dark" : "light";
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);
      }

      setIsColorSchemeLoaded(true);
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isColorSchemeLoaded) return null;

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"index"} />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
