interface SignUpForm {
    email: string;
    password: string;
    passwordConfirm: string;
    nickname: string;
    phoneNumber: string;
}

interface PartnerSignUpForm {
    email: string;
    password: string;
    passwordConfirm: string;
    phoneNumber: string;
    merchantName: string;
    merchantAddress: string;
    businessNumber: string;
    businessContactNumber: string;
}

interface LoginForm {
    email: string;
    password: string;
}

export type { SignUpForm, PartnerSignUpForm, LoginForm };
