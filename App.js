import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/Navigation";
import AddPatientInfo from "./components/AddPatientInfo";
import AddPatientTest from "./components/AddPatientTest";
import ViewPatientInfo from "./components/ViewPatientInfo";
import UpdatePatientInfo from "./components/UpdatePatientInfo";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <AddPatientInfo /> */}
        {/* <AddPatientTest /> */}
        {/* <ViewPatientInfo /> */}
        <UpdatePatientInfo />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
