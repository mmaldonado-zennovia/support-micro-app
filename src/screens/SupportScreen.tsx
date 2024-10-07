import { StyleSheet, Text, View } from "react-native"
import { ContactUsWidget } from "../widgets/ContactUsWidget"

export const SupportScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Support</Text>
      <ContactUsWidget />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
})
