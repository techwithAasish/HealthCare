import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";

const ViewPatientTest = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.patientId}</Text>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.nurse_name}</Text>
      <Text style={styles.cell}>{item.diastolic}</Text>
      <Text style={styles.cell}>{item.systolic}</Text>
      <Text style={styles.cell}>{item.condition_critical}</Text>
    </View>
  );

  const [patientTest, setPatientTest] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.2.95:3000/patients/65595b710981aaa0c732aafa/tests")
      .then((response) => {
        if (response) {
          const data = response.data;
          setPatientTest(data);
          console.log("The id is", data);
        } else {
          console.log("No data");
        }
      })
      .catch((error) => {
        console.error("Error listing patient:", error);
        // Handle the error, show an alert, or other error handling logic
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerTopBar}>
        <Text style={styles.headerTopBarText}>Users</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.heading}>Patient Id</Text>
        <Text style={styles.heading}>Date</Text>
        <Text style={styles.heading}>Nurse Name</Text>
        <Text style={styles.heading}>Diastolic</Text>
        <Text style={styles.heading}>Systolic</Text>
        <Text style={styles.heading}>Critical Condition</Text>
      </View>
      <FlatList
        data={patientTest}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  headerTopBar: {
    backgroundColor: "#6AB7E2",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 2,
    marginBottom: 15,
  },
  headerTopBarText: {
    color: "#fff",
    // fontFamily: FontFamily.poppinsMedium,
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: 350,
  },

  heading: {
    flex: 1,
    // fontFamily: FontFamily.poppinsMedium,
    fontSize: 12,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
    marginHorizontal: 3,
    elevation: 1,
    borderRadius: 3,
    borderColor: "#fff",
    padding: 13,
    backgroundColor: "#fff",
  },
  cell: {
    fontSize: 12,
    // fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    flex: 1,
  },
});

export default ViewPatientTest;
