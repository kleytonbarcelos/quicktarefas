import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#eee",
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 156,
    height: 63,
    marginBottom: 20,
  },
  containerLoading: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainerLoading: {
    marginTop: 20,
    fontSize: 16,
  },
  containerMessage: {
    justifyContent: "center",
    alignItems: "center",
  },
  textMessage: {
    fontSize: 16,
    color: "#000",
  },
  containerLists: {
    marginTop: 25,
  },
  taskContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  taskContainer: {
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "#00ccff10",
    borderWidth: 1,
    borderColor: "#00ccff50",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  taskContainerSelected: {
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "#06445C50",
    borderWidth: 1,
    borderColor: "#00ccff50",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  taskText: {
    marginLeft: 5,
    fontSize: 18,
    color: "#000",
  },
  header: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#00A9EC",
  },
  input: {
    paddingHorizontal: 10,
    height: 46,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    fontSize: 18,
  },
  buttonAddTask: {
    height: 46,
    marginTop: 10,
    backgroundColor: "#06445C",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    height: 100,
    width: "100%",
    backgroundColor: "#ccc",
    paddingHorizontal: 10,
    paddingBottom: 50,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  buttonRemoveTasks: {
    alignSelf: "stretch",
    height: 46,
    marginTop: 10,
    backgroundColor: "#cc0000",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRemoveTasksDisable: {
    alignSelf: "stretch",
    height: 46,
    marginTop: 10,
    backgroundColor: "#cc0000",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.4,
  },
});
