import { useAuth } from '@clerk/clerk-expo';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

const SKIP_AUTH = process.env.EXPO_PUBLIC_SKIP_AUTH === 'true';

export function useRoutesLogic() {
  const { isSignedIn, isLoaded } = useAuth();

  const isAuthenticated = isSignedIn || SKIP_AUTH;
  const isLoading = !isLoaded && !SKIP_AUTH;

  React.useEffect(() => {
    if (isLoaded || SKIP_AUTH) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  return {
    isAuthenticated,
    isLoading,
  };
}
