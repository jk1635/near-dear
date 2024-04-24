import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// TODO: 삭제 필요
export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export const userTypeState = atom({
    key: 'userTypeState',
    default: 'user',
});

export const keywordState = atom({
    key: 'keyword',
    default: '',
    effects_UNSTABLE: [persistAtom],
});
