import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async () => {
    await login(email, password);
  };

  return (
    <View style={styles.login}>
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.email}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      <Text style={styles.text}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <Button color="#1aac83" title="Log in" onPress={handleSubmit} disabled={isLoading} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    marginBottom:75,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 20 ,
    marginRight: 205,
    marginBottom: 10,
  },
  email: {
    fontSize: 20 ,
    marginRight: 250,
    marginBottom: 10,
  },
  button: {
    color: "#1aac83",
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 40,
    gap: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default Login;
