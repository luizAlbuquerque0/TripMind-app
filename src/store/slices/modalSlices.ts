import {StoreSlice} from '../Store';

type modalStore = {
  isSignInModalOpen: boolean;
};

type modalActions = {
  toogleSignInModalOpen: () => void;
};

const initialState: modalStore = {
  isSignInModalOpen: false,
};

export type ModalSlice = modalStore & modalActions;

export const createModalSlice: StoreSlice<ModalSlice> = set => ({
  ...initialState,
  toogleSignInModalOpen: () =>
    set(prevState => {
      prevState.modals.isSignInModalOpen = !prevState.modals.isSignInModalOpen;
    }),
});
