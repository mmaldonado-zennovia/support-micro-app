import { useRouter } from "expo-router"
import { StyleSheet } from "react-native"
import { Widget } from "./Widget"
import { StyledListItem } from "../components/StyledListItem"
import { StyledIcon } from "../components/StyledIcon"
import { microColors } from "../colors"

export const ContactUsWidget = () => {
  const router = useRouter()
  return (
    <Widget style={{ marginTop: 16 }}>
      <StyledListItem
        title="Call us"
        borderBottom
        showChevron
        icon={<StyledIcon name="call" color={microColors.blue} />}
        onPress={() => router.navigate("/modal")}
      />
      <StyledListItem
        title="Chat with us"
        icon={<StyledIcon name="chat" color={microColors.blue} />}
        showChevron
        style={{ marginTop: 16 }}
        onPress={() => router.navigate("/chat-with-us")}
      />
    </Widget>
  )
}

const styles = StyleSheet.create({
  firstListItem: {
    marginBottom: 16,
  },
})
