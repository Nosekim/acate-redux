import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 22,
    width: "100%",
  },
  closeBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#023",
  },
  item: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderColor: "#023",
    borderRadius: 10,
    width: "100%",
    marginBottom: 6,
  },
  textContainer: {
    width: "100%",
  },
});

export default styles;
