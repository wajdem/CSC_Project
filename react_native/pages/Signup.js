import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useSignup } from "../hooks/useSignup";
// import { NGROK_URL } from '@env';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async () => {
    // Perform password match validation
    if (password !== confPassword) {
      alert("Passwords do not match");
      return;
    }

    await signup(username, email, password, confPassword);
  };

  return (
    <View style={styles.signup}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.username}>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <Text style={styles.email}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <Text style={styles.password}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Text style={styles.text}>Confirm Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setConfPassword}
        value={confPassword}
        secureTextEntry
      />
      <Button color="#1aac83" title="Sign up" onPress={handleSubmit} disabled={isLoading} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  signup: {
    marginBottom:75,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text:{
    marginBottom:10,
    fontSize: 20,
    marginRight: 135,
  },
  username:{
   marginBottom:10,
   fontSize: 20,
   marginRight: 215,

  },
  email:{
    marginBottom:10,
    fontSize: 20,
    marginRight: 250,

  },
  password:{
    marginBottom:10,
    fontSize: 20,
    marginRight: 215,
  },
  title: {
    fontSize: 50,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 40,
    gap:10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:8,
  },
  error: {
    color: "red",
    marginTop: 10,
  },

});

export default Signup;
