import { atom } from 'recoil';

// TODO: 삭제 필요
export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export const userTypeState = atom({
    key: 'userTypeState',
    default: 'user',
});
