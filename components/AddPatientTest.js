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

const AddPatientTest = () => {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const category = [
    { label: "Blood Pressure" },
    { label: "Emergency", value: "1" },
    { label: "Cardiology", value: "2" },
    { label: "Neurology", value: "3" },
  ];

  const critical = [
    { label: "Yes", value: "1" },
    { label: "No", value: "2" },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Test for a patient</Text>
        </View>

        <View style={styles.firstName}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            // onChangeText={text => setFirstName(text)}
          />
        </View>

        <View style={styles.firstName}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={address}
            // onChangeText={text => setLastName(text)}
          />
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            value={address}
            // onChangeText={text => setLastName(text)}
          />
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Category</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={category}
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
          <Text style={[styles.label, styles.phone]}>Type</Text>
          <TextInput
            style={styles.input}
            // value={firstName}
            // onChangeText={text => setFirstName(text)}
          />
        </View>
        <View style={styles.firstName}>
          <Text style={[styles.label, styles.phone]}>Doctor Name</Text>
          <TextInput
            style={styles.input}
            // value={firstName}
            // onChangeText={text => setFirstName(text)}
          />
        </View>

        <View style={styles.firstName}>
          <Text style={styles.label}>patient_id</Text>
          <TextInput
            style={styles.input}
            // value={address}
            // onChangeText={text => setLastName(text)}
          />
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Diastolic</Text>
          <TextInput
            style={styles.input}
            // value={firstName}
            // onChangeText={text => setFirstName(text)}
          />
        </View>

        <View style={styles.firstName}>
          <Text style={styles.label}>Systolic</Text>
          <TextInput
            style={styles.input}
            // value={address}
            // onChangeText={text => setLastName(text)}
          />
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Critical</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={critical}
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
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  header: {
    backgroundColor: "blue",
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
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

export default AddPatientTest;
