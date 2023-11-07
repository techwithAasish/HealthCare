import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddPatientInfo from "../components/AddPatientInfo";
import { View, Text } from "react-native";
import ViewPatientInfo from "../components/ViewPatientInfo";

function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <View>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="addPatientInfo"
          component={AddPatientInfo}
          options={{ headerTitle: "Register Here" }}
        />
        <Stack.Screen
          name="Home"
          component={ViewPatientInfo}
          options={{ headerTitle: "Welcome" }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default AppNavigator;
