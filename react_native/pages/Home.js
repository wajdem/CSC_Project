import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const StudentTable = () => {
  const [subjects, setSubjects] = useState([]);
  const { user } = useAuthContext();

  console.log(subjects);

  useEffect(() => {
    if (!user) {
      // User is not logged in, handle this case
      return;
    }

    axios
      .get(`https://5619-109-107-236-124.ngrok.io/api/subjects`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setSubjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Subject</Text>
        <Text style={styles.headerCell}>Passing Grade</Text>
        <Text style={styles.headerCell}>Students Grade</Text>
      </View>
      {subjects.map((subject) => (
        <View key={subject._id} style={styles.dataRow}>
          <Text style={styles.dataCell}>{subject.username}</Text>
          <Text style={styles.dataCell}>{subject.titelSubject}</Text>
          <Text style={styles.dataCell}>{subject.passingGrade}</Text>
          <Text style={styles.dataCell}>{subject.studentsGrade}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
    width: '100%',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
    width: '100%',
  },
  dataCell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default StudentTable;
