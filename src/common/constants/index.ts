import { CardRegisterForm } from '@common/types/payments.ts';
import { ProductForm } from '@common/types/products.ts';
import { LoginForm, PartnerSignUpForm, SignUpForm } from '@common/types/user.ts';

// 회원가입 폼 초기값
const initialSignUpForm: SignUpForm = {
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    phoneNumber: '',
};

// 파트너 회원가입 폼 초기값
const initialPartnerSignUpForm: PartnerSignUpForm = {
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    merchantName: '',
    merchantAddress: '',
    businessNumber: '',
    businessContactNumber: '',
};

// 로그인 폼 초기값
const initialLoginForm: LoginForm = {
    email: '',
    password: '',
};

// 상품 등록 폼 초기값
const initialProductForm: ProductForm = {
    productName: '',
    retailPrice: 0,
    discountRate: 0,
    quantity: 0,
    thumbNails: [''],
    category: '',
};

// 카드 등록 폼
const initialCardRegisterForm: CardRegisterForm = {
    cardType: 'personal',
    cardNumber: '',
    validDate: '',
    cardPassword: '',
    birthDate: '',
};

// 서울 이외의 지역번호
const areaCode = [
    '031',
    '032',
    '033',
    '041',
    '042',
    '043',
    '044',
    '051',
    '052',
    '053',
    '054',
    '055',
    '061',
    '062',
    '063',
    '064',
    '065',
];

export {
    initialPartnerSignUpForm,
    initialSignUpForm,
    initialProductForm,
    initialLoginForm,
    initialCardRegisterForm,
    areaCode,
};
