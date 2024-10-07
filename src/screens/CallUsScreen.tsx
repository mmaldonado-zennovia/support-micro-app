import { StyleSheet, Text, View } from "react-native"

import { useNavigation } from "expo-router"
import { useEffect } from "react"

export const CallUsScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Call Us",
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
