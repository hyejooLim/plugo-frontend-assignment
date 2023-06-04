import { atom } from 'recoil';
import { SelectedOption } from '../types';

export const selectedOptionsState = atom<SelectedOption[]>({
  key: 'selectedOptions',
  default: [],
  dangerouslyAllowMutability: true,
});
