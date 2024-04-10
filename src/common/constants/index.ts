import { ProductForm } from '@common/types/products.ts';
import { PartnerSignUpForm, SignUpForm } from '@common/types/user.ts';

// 회원가입 폼 초기값
const initialSignUpForm: SignUpForm = {
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    phoneNumber: '',
};

const initialPartnerSignUpForm: PartnerSignUpForm = {
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    merchantName: '',
    businessNumber: '',
    businessContactNumber: '',
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

export { initialPartnerSignUpForm, initialSignUpForm, initialProductForm };
