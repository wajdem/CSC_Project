import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigation } from "@react-navigation/native";



const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigation = useNavigation();
  const handleClick = () => {
    logout();
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.title}>CSC</Text>
        </TouchableOpacity>
        <View style={styles.nav}>
          {user ? (
            <View style={styles.userInfo}>
              <TouchableOpacity onPress={handleClick} style={styles.logoutButton}>
                <Text>Log out</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.authButtons}>
              <TouchableOpacity
                style={[styles.authButton, { marginRight: 10 }]}
                onPress={() => navigation.navigate("Login")}
              >
                <Text>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.authButton}
                onPress={() => navigation.navigate("Signup")}
              >
                <Text>Signup</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1aac83',
    paddingVertical: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoText: {
    color: 'white',
    marginRight: 10,
  },
  logoutButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  authButtons: {
    flexDirection: 'row',
  },
  authButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default Navbar;
