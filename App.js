import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/Navigation";
import AddPatientInfo from "./components/AddPatientInfo";
import AddPatientTest from "./components/AddPatientTest";
import ViewPatientInfo from "./components/ViewPatientInfo";
import UpdatePatientInfo from "./components/UpdatePatientInfo";

export default function App() {
  return <AppNavigator />;
}
