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
    businessNumber: string;
    businessContactNumber: string;
}

export type { SignUpForm, PartnerSignUpForm };
