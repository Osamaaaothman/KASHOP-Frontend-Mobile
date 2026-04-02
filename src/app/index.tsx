import { Text, View } from "react-native";
import { useTheme } from "../Stores/Theme";
import { Button } from "tamagui";

export default function Index() {
  const theme=useTheme((state)=>state.theme);
  const toggleTheme=useTheme((state)=>state.toggleTheme);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
<Button
onPress={toggleTheme}
>
  {theme}
</Button>
    </View>
  );
}
