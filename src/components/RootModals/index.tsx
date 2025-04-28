import {useShallow} from 'zustand/shallow';
import {useStore} from '../../store';
import {SignInModal} from '../Modals/SignInModal';

export function RootModals() {
  const {isSignInModalOpen, toogleSignInModalOpen} = useStore(
    useShallow(state => ({
      isSignInModalOpen: state.modals.isSignInModalOpen,
      toogleSignInModalOpen: state.modals.toogleSignInModalOpen,
    })),
  );
  return (
    <SignInModal open={isSignInModalOpen} closeModal={toogleSignInModalOpen} />
  );
}
