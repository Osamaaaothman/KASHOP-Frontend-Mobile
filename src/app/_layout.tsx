import { Stack } from "expo-router";
import { createTamagui, TamaguiProvider, Theme } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v5' // for quick config install this
import {useTheme} from "../Stores/Theme";
const config = createTamagui(defaultConfig)
export default function RootLayout() {
  const theme=useTheme((state)=>state.theme);


  return <TamaguiProvider  defaultTheme={"light"} config={config}>
    <Theme name={theme}>

    <Stack />
    </Theme>
  </TamaguiProvider>
}
