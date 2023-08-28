import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuthContext } from "./hooks/useAuthContext";

import { StatusBar,View, Text } from "react-native";

import { AuthContextProvider } from "./context/AuthContext";
import Navigator from "./Navigator";
import Nav from "./components/Nav"


const App = () => {
  

  return (
    <AuthContextProvider>
      <NavigationContainer>
      <Nav/>
          <StatusBar />
          <Navigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;

