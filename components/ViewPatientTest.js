import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const ViewPatientTest = () => {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const genders = [
    { label: "Select Gender" },
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Patient Information</Text>
        </View>

        <View style={styles.firstName}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.labelSecond}>Pam</Text>
        </View>

        <View style={styles.firstName}>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.labelSecond}>Macy</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.labelSecond}>12/12/2021</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.labelSecond}>Blood Pressure</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Type:</Text>
          <Text style={styles.labelSecond}>Test</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Doctor Name:</Text>
          <Text style={styles.labelSecond}>Emillia Johnson</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Patient_id:</Text>
          <Text style={styles.labelSecond}>13</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Diastolic:</Text>
          <Text style={styles.labelSecond}>80</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Systolic:</Text>
          <Text style={styles.labelSecond}>120</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Condition Critical:</Text>
          <Text style={styles.labelSecond}>No</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
          <View style={styles.buttonStyle}>
            <Button title="Edit" style={styles.button} onPress color="tomato" />
          </View>

          <View style={styles.buttonStyle}>
            <Button
              title="Delete"
              style={styles.button}
              onPress
              color="tomato"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  header: {
    backgroundColor: "blue", // Background color of the header
    height: 60, // Height of the header
    justifyContent: "space-around", // Center text vertically
    alignItems: "center", // Center text horizontally
    marginBottom: 20,
    flexDirection: "row",
  },
  headerText: {
    color: "white", // Text color
    fontSize: 20, // Text font size
    fontWeight: "bold", // Text font weight
  },
  firstName: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  dropdown: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 5,
    marginBottom: 9,
    marginTop: 4,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  buttons: {
    marginTop: 20,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyle: {
    paddingLeft: 20,
    width: 150, // this way it works
  },
  button: {
    height: 20,
  },

  inputSearchStyle: {
    height: 14,
    fontSize: 14,
  },

  label: {
    fontSize: 18,
    marginBottom: 5,
    width: 110,
  },
  labelSecond: {
    fontSize: 18,
    marginBottom: 5,
    width: 200,
  },
  phone: {
    marginTop: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

export default ViewPatientTest;
