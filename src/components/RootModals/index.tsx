import {useShallow} from 'zustand/shallow';
import {useStore} from '../../store';
import {SignInModal} from '../Modals/SignInModal';
import {SignUpModal} from '../Modals/SignUpModal';
import {useAuth} from '../../hooks/useAuth';

export function RootModals() {
  const {signedIn} = useAuth();
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
      {!signedIn && (
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
      )}
    </>
  );
}
