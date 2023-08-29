import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const Home = ({}) => {
  
  const subjects = [

    { username: 'Adam', titelSubject: 'maths', passingGrade: 100 , studentsGrade: 95 },
    { username: 'Aysar', titelSubject: 'Math', passingGrade: 100, studentsGrade: 85 },
    { username: 'John', titelSubject: 'Math', passingGrade: 80, studentsGrade: 85 },
    { username: 'John', titelSubject: 'Math', passingGrade: 80, studentsGrade: 85 },
    { username: 'John', titelSubject: 'Math', passingGrade: 80, studentsGrade: 85 },
    { username: 'John', titelSubject: 'Math', passingGrade: 80, studentsGrade: 85 },
    { username: 'John', titelSubject: 'Math', passingGrade: 80, studentsGrade: 85 },
  ];

  return (
    <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Username</Text>
          <Text style={styles.headerCell}>Subject</Text>
          <Text style={styles.headerCell}>Passing Grade</Text>
          <Text style={styles.headerCell}>Students Grade</Text>
        </View>
        {subjects.map((subject, index) => (
          <View key={index} style={styles.dataRow}>
            <Text style={styles.dataCell}></Text>
            <Text style={styles.dataCell}></Text>
            <Text style={styles.dataCell}></Text>
            <Text style={styles.dataCell}></Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 4,
  },
  dataCell: {
    flex: 1,
    fontSize: 16,
    color: '#666',
    paddingVertical: 8,
  },
});

export default Home;
