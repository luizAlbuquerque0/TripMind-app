import React, {createContext, useCallback, useEffect, useState} from 'react';
import {storageKeys} from '../constants/storageKeys';
import {AuthService} from '../services/Auth.service';
import {getData, storeData, removeData} from '../utils/asyncStorage';

interface IAuthContextValue {
  signedIn: boolean;
  signIn(credentials: {email: string; password: string}): Promise<void>;
  signOut(): Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const token = await getData(storageKeys.accessToken);
      setSignedIn(!!token);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(
    async ({email, password}: {email: string; password: string}) => {
      const {accessToken, refreshToken} = await AuthService.signIn({
        email,
        password,
      });

      await storeData(storageKeys.accessToken, accessToken);
      await storeData(storageKeys.refreshToken, refreshToken);

      setSignedIn(true);
    },
    [],
  );

  const signOut = useCallback(async () => {
    await removeData(storageKeys.accessToken);
    await removeData(storageKeys.refreshToken);
    setSignedIn(false);
  }, []);

  const value: IAuthContextValue = {
    signedIn,
    signIn,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
