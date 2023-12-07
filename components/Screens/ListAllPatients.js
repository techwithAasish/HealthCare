import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import axios from "axios";

function ListAllPatients() {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.first_name}</Text>
      <Text style={styles.cell}>{item.last_name}</Text>
      <Text style={styles.cell}>{item.address}</Text>
      <Text style={styles.cell}>{item.date_of_birth}</Text>
      <Text style={styles.cell}>{item.department}</Text>
      {/* <Text style={styles.cell}>{item.doctor}</Text> */}
    </View>
  );

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      // .get(" http://192.168.2.95:3000/patients")
      .get(" https://patient-backend-krc3.onrender.com/patients")
      .then((response) => {
        if (response) {
          const data = response.data;
          setPatients(data);
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
        <Text style={styles.heading}>First Name</Text>
        <Text style={styles.heading}>Last Name</Text>
        <Text style={styles.heading}>Address</Text>
        <Text style={styles.heading}>DOB</Text>
        <Text style={styles.heading}>Department</Text>
      </View>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.patient_id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

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
    padding: 12,
    backgroundColor: "#fff",
  },
  cell: {
    fontSize: 12,
    // fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    flex: 1,
  },
});

export default ListAllPatients;
