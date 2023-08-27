import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useSignup } from "../hooks/useSignup";
import { NGROK_URL } from '@env';

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
      <Text>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Text>Confirm Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setConfPassword}
        value={confPassword}
        secureTextEntry
      />
      <Button title="Sign up" onPress={handleSubmit} disabled={isLoading} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default Signup;
