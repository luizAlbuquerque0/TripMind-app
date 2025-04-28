import {useShallow} from 'zustand/shallow';
import {useStore} from '../../store';
import {SignInModal} from '../Modals/SignInModal';
import {SignUpModal} from '../Modals/SignUpModal';

export function RootModals() {
  const {
    isSignInModalOpen,
    isSignUpModalOpen,
    toogleSignInModalOpen,
    toogleSignUpModalOpen,
  } = useStore(
    useShallow(state => ({
      isSignInModalOpen: state.modals.isSignInModalOpen,
      isSignUpModalOpen: state.modals.isSignUpModalOpen,
      toogleSignInModalOpen: state.modals.toogleSignInModalOpen,
      toogleSignUpModalOpen: state.modals.toogleSignUpModalOpen,
    })),
  );
  return (
    <>
      <SignInModal
        open={isSignInModalOpen}
        closeModal={toogleSignInModalOpen}
      />
      <SignUpModal
        open={isSignUpModalOpen}
        closeModal={toogleSignUpModalOpen}
      />
    </>
  );
}
