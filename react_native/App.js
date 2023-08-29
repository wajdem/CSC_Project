import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar,View, Text } from "react-native";
import { AuthContextProvider } from "./context/AuthContext";


// import Navigator from "./Navigator";
import Nav from "./components/Nav"
import Home from "./pages/Home"; ;



const App = () => {



  return (

    <AuthContextProvider>
      <NavigationContainer>
          <Nav/>
          <Home/>
          <StatusBar />
          {/* <Navigator /> */}
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;

