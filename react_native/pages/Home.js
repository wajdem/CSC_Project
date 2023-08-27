import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Subject</Text>
          <Text style={styles.tableHeader}>Passing Grade</Text>
          <Text style={styles.tableHeader}>Student's Grade</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Math</Text>
          <Text style={styles.tableCell}>60</Text>
          <Text style={styles.tableCell}>75</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Science</Text>
          <Text style={styles.tableCell}>50</Text>
          <Text style={styles.tableCell}>65</Text>
        </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingVertical: 5,
  },
  tableHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Home;
