import {useShallow} from 'zustand/shallow';
import {useStore} from '../../store';

export function useAccountController() {
  const {openSignInModal} = useStore(
    useShallow(state => ({
      openSignInModal: state.modals.toogleSignInModalOpen,
    })),
  );

  return {
    openSignInModal,
  };
}
