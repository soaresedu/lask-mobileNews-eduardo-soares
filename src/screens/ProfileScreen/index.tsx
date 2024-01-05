import { View } from "react-native";

import { ButtonInput } from "../../components/Button";

export function ProfileScreen(){

  const handlePress = () => {
    console.log("aajaj")
  }

    return(
        <View>
            <ButtonInput onPress={handlePress} title="Login"></ButtonInput>
        </View>
    )
}

