import { ReactNode } from "react"
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native"
import { microColors } from "../../colors"
import { ChevronRight } from "./Chevron"

interface Props {
  title: string
  subtitle?: string
  caption?: string
  style?: ViewStyle
  icon?: ReactNode
  borderBottom?: boolean
  showChevron?: boolean
  isExpandable?: boolean
  onPress?: () => void
}

export const StyledListItem = ({
  style,
  title,
  subtitle,
  caption,
  icon,
  borderBottom = false,
  showChevron = false,
  isExpandable = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, borderBottom ? styles.borderBottom : {}, style]}
    >
      <View style={{ flexDirection: "row" }}>
        {icon}
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.text}>{title}</Text>
          {subtitle && <Text style={styles.text}>{subtitle}</Text>}
        </View>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 16 }}>
        {caption && <Text>{caption}</Text>}
        {(showChevron || isExpandable) && (
          <View
            style={isExpandable ? { transform: [{ rotate: "90deg" }] } : {}}
          >
            <ChevronRight />
          </View>
        )}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  borderBottom: {
    borderColor: microColors.darkGrey,
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    marginLeft: 16,
  },
})
