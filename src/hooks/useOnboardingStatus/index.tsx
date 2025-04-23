import {useEffect, useState} from 'react';
import {getData} from '../../utils/asyncStorage';
import {storageKeys} from '../../constants/storageKeys';

export function useOnboardingStatus() {
  const [status, setStatus] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const storedValue = await getData(storageKeys.ONBOARDING);
      setStatus(storedValue === 'seen');
    };

    checkOnboardingStatus();
  }, []);

  return status;
}
