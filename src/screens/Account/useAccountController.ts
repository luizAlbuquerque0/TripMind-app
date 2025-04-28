import {useShallow} from 'zustand/shallow';
import {useStore} from '../../store';

export function useAccountController() {
  const {openSignInModal, openSignUpModal} = useStore(
    useShallow(state => ({
      openSignInModal: state.modals.toogleSignInModalOpen,
      openSignUpModal: state.modals.toogleSignUpModalOpen,
    })),
  );

  return {
    openSignInModal,
    openSignUpModal,
  };
}
