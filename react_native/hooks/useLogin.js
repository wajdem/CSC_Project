import { useEffect, useState } from 'react';
import { useAuthContext } from './useAuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NGROK_URL } from '@env';

export const useLogin = () => {
  // const [uri, setUri] = useState(`${NGROK_URL}/api/user/login`)
  // useEffect(() => {
  //   let uri = `${NGROK_URL}/api/user/login`
  // })
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://1b30-109-107-236-124.ngrok.io/api/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      console.log(response.json())

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

  return { login, isLoading, error };
};
