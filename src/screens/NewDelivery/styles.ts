import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 24,
    marginTop: 59
  },

  timeAndIdDelivery: {
    flexDirection: "row",
    paddingHorizontal: 40,
    justifyContent: 'space-between'
  },
  timeOrId: {
    alignItems: 'center',

  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.gray
  },
  timeOrIdValues: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.primary
  },

  deliveryPrice: {
    alignItems: 'center',
    marginTop: 20
  },

  price: {
    fontFamily: theme.fonts.bold,
    fontSize: 35,
    color: theme.colors.primary
  }



});
