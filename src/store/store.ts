import {StateCreator} from 'zustand';
import {ModalSlice} from './slices/modalSlices';

export type Store = {
  modals: ModalSlice;
};

export type StoreSlice<TSlice> = StateCreator<
  Store,
  [['zustand/immer', never]],
  [],
  TSlice
>;
