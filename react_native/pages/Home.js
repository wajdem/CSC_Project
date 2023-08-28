import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Email</Text>
          <Text style={styles.tableHeader}>User Name</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>wajde@gmail.com</Text>
          <Text style={styles.tableCell}>Wajde</Text>
        </View>
      </View>
      <View style={styles.containertwo}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Course Name</Text>
          <Text style={styles.headerCell}>Passing Mark</Text>
          <Text style={styles.headerCell}>Student's Mark</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataCell}>Math</Text>
          <Text style={styles.dataCell}>90 %</Text>
          <Text style={styles.dataCell}>80 %</Text>
        </View>{" "}
        <View style={styles.dataRow}>
          <Text style={styles.dataCell}>history</Text>
          <Text style={styles.dataCell}>100 %</Text>
          <Text style={styles.dataCell}>70 %</Text>
        </View>{" "}
        <View style={styles.dataRow}>
          <Text style={styles.dataCell}>physics</Text>
          <Text style={styles.dataCell}>75 %</Text>
          <Text style={styles.dataCell}>75 %</Text>
        </View>{" "}
        <View style={styles.dataRow}>
          <Text style={styles.dataCell}>chemistry</Text>
          <Text style={styles.dataCell}>95 %</Text>
          <Text style={styles.dataCell}>90 %</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    padding: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "black",
    paddingVertical: 5,
  },
  tableHeader: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
  containertwo: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
  },
  dataRow: {
    flexDirection: "row",
    padding: 10,
  },
  dataCell: {
    flex: 1,
  },
});

export default Home;
