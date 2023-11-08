import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddPatientInfo from "../components/AddPatientInfo";
import { View, Text } from "react-native";
import ViewPatientInfo from "../components/ViewPatientInfo";
import HomeScreen from "../components/HomeScreen";
import AddPatientTest from "../components/AddPatientTest";
import ViewPatientTest from "../components/ViewPatientTest";

function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="AddPatientInfo" component={AddPatientInfo} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ViewPatientInfo" component={ViewPatientInfo} />
        <Stack.Screen name="AddPatientTest" component={AddPatientTest} />
        <Stack.Screen name="ViewPatientTest" component={ViewPatientTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
