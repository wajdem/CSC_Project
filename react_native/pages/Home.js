// import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import {useAuthContext} from "../hooks/useAuthContext";


const Home = ({}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState()
  const [titelSubject, setTitelSubject] = useState()
  const [passingGrade, setPassingGrade] = useState()
  const [studentsGrade, setStudentsGrade] = useState()
  const { user } = useAuthContext();



  useEffect(() => {
    fetch(` https://d1ab-109-107-236-124.ngrok.io/api/subjects/`,{
      headers: {
        Authorization: `Bearer ${user.token}`,
     },
    })
      .then(response => response.json())

      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Username</Text>
          <Text style={styles.headerCell}>Subject</Text>
          <Text style={styles.headerCell}>Passing Grade</Text>
          <Text style={styles.headerCell}>Students Grade</Text>
        </View>
        {data.map((subject, index) => (
          <View key={index} style={styles.dataRow}>
            <Text style={styles.dataCell}>{data.username}</Text>
            <Text style={styles.dataCell}>{data.titelSubject}</Text>
            <Text style={styles.dataCell}>{data.passingGrade}%</Text>
            <Text style={styles.dataCell}>{dataubject.studentsGrade}%</Text>
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
