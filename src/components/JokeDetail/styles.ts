import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 20,
  },
  jokeContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 20,
  },
  subtitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: "#",
    fontSize: 16,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
