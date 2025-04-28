import {StoreSlice} from '../Store';

type modalStore = {
  isSignInModalOpen: boolean;
  isSignUpModalOpen: boolean;
};

type modalActions = {
  toogleSignInModalOpen: () => void;
  toogleSignUpModalOpen: () => void;
};

const initialState: modalStore = {
  isSignInModalOpen: false,
  isSignUpModalOpen: false,
};

export type ModalSlice = modalStore & modalActions;

export const createModalSlice: StoreSlice<ModalSlice> = set => ({
  ...initialState,
  toogleSignInModalOpen: () =>
    set(prevState => {
      prevState.modals.isSignInModalOpen = !prevState.modals.isSignInModalOpen;
    }),
  toogleSignUpModalOpen: () =>
    set(prevState => {
      prevState.modals.isSignUpModalOpen = !prevState.modals.isSignUpModalOpen;
    }),
});
