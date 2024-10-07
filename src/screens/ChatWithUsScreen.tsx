import { useNavigation } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

import { useEffect } from "react"

export const ChatWithUsScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Chat with Us",
      headerBackTitleVisible: false,
    })
  }, [navigation])

  return (
    <View>
      <Text style={styles.title}>All our agents are busy right now</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
})
