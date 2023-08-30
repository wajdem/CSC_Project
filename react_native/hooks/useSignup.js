import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NGROK_URL } from '@env';

export const useSignup = () => {
  // const [uri, setUri] = useState(`${NGROK_URL}/api/user/signup`)
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  // console.log("NGROK_URL",NGROK_URL)
  // const url =`${NGROK_URL}/api/user/signup`
  // console.log(url)

  const signup = async (username, email, password, confPassword) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://d1ab-109-107-236-124.ngrok.io/api/user/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, email, password, confPassword })
      });
      
      
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      } else {
        // Save the user to AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(json));

        // Update the auth context
        dispatch({ type: 'LOGIN', payload: json });

        // Update loading state
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError('An error occurred');
    }
  };

  return { signup, isLoading, error };
};
