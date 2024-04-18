interface Option {
    value: string;
    label: string;
}

interface CardRegisterForm {
    cardType: string;
    cardNumber: string;
    validDate: string;
    cardPassword: string;
    birthDate: string;
}

export type { Option, CardRegisterForm };
