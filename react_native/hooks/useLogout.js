import { useAuthContext } from './useAuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    // Remove user from AsyncStorage
    await AsyncStorage.removeItem('user');

    // Dispatch logout action
    dispatch({ type: 'LOGOUT' });
  };

  return { logout };
};
