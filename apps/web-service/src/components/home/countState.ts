import { atom } from 'recoil';

export const CountState = atom<number>({
  key: 'CountState',
  default: 0,
});
