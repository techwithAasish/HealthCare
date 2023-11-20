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

function ViewPatientInfo({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const genders = [
    { label: "Select Gender" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
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
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.labelSecond}>Female</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Phone number:</Text>
          <Text style={styles.labelSecond}>4371098743</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Email address:</Text>
          <Text style={styles.labelSecond}>pam@gmail.com</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.labelSecond}>46 Progress Ave, M1E 2v1</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.labelSecond}>11/12/1998</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Department:</Text>
          <Text style={styles.labelSecond}>Emergency</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Doctor:</Text>
          <Text style={styles.labelSecond}>Alan Dice</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
          <View style={styles.buttonStyle}>
            <Button title="Edit" style={styles.button} onPress color="tomato" />
          </View>

          <View style={styles.buttonStyle}>
            <Button
              title="Cancel"
              style={styles.button}
              onPress
              color="tomato"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

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

export default ViewPatientInfo;
