import {useEffect, useState} from 'react';
import {getData} from '../../utils/asyncStorage';
import {storageKeys} from '../../constants/storageKeys';

export function useOnboardingStatus() {
  const [status, setStatus] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const storedValue = await getData(storageKeys.ONBOARDING);
      setStatus(storedValue === 'seen');
      setIsLoading(false);
    };

    checkOnboardingStatus();
  }, []);

  return {
    status,
    isLoading,
  };
}
