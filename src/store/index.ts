import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {Store} from './Store';
import {createModalSlice} from './slices/modalSlices';

export const useStore = create<Store>()(
  immer((...params) => ({
    modals: createModalSlice(...params),
  })),
);
