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

function AddPatientInfo({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const genders = [
    { label: "Select Gender" },
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
  ];

  const handleButton = () => {
    navigation.navigate("viewPatient");
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            {/* <FontAwesomeIcon icon="fa-regular fa-arrow-left" /> */}
            {/* <FontAwesomeIcon icon={faCoffee} /> */}
            <Text style={styles.headerText}>Add Patient Information</Text>
          </View>

          <View style={styles.firstName}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              value={firstName}
              // onChangeText={text => setFirstName(text)}
            />
          </View>

          <View style={styles.firstName}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              value={address}
              // onChangeText={text => setLastName(text)}
            />
          </View>
          <View style={styles.firstName}>
            <Text style={styles.label}>Gender</Text>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={genders}
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>

          <View style={styles.firstName}>
            <Text style={[styles.label, styles.phone]}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              // value={firstName}
              // onChangeText={text => setFirstName(text)}
            />
          </View>

          <View style={styles.firstName}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              // value={address}
              // onChangeText={text => setLastName(text)}
            />
          </View>
          <View style={styles.firstName}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              // value={firstName}
              // onChangeText={text => setFirstName(text)}
            />
          </View>

          <View style={styles.firstName}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              // value={address}
              // onChangeText={text => setLastName(text)}
            />
          </View>
          <View style={styles.firstName}>
            <Text style={styles.label}>Department</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the department"
              // value={firstName}
              // onChangeText={text => setFirstName(text)}
            />
          </View>

          <View style={styles.firstName}>
            <Text style={styles.label}>Doctor</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the name of doctor"
              // value={address}
              // onChangeText={text => setLastName(text)}
            />
          </View>
          <View style={styles.firstName}>
            <Text style={styles.label}>Patient id</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter patient id"
              // value={address}
              // onChangeText={text => setLastName(text)}
            />
          </View>

          {/* Buttons */}
          <Button title="Save" onPress={handleButton} />
        </View>
      </ScrollView>
      {/* <NavigationContainer>
        <NavBar />
      </NavigationContainer> */}
    </>
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

  inputSearchStyle: {
    height: 14,
    fontSize: 14,
  },

  label: {
    fontSize: 18,
    marginBottom: 5,
    width: 110,
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

export default AddPatientInfo;
