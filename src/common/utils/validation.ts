import * as yup from 'yup';

const userSchema = yup.object().shape({
    email: yup.string().email('유효한 이메일 주소를 입력해주세요.').required('이메일을 입력해주세요.'),
    password: yup.string().required('비밀번호를 입력해주세요.').min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
        .required('비밀번호 확인을 입력해주세요.'),
    nickname: yup
        .string()
        .required('닉네임을 입력해주세요.')
        .matches(/^[가-힣a-zA-Z]+([가-힣a-zA-Z\s]*[가-힣a-zA-Z])?$/, '닉네임을 올바르게 입력해주세요.')
        .max(50, '닉네임은 50자를 초과할 수 없습니다.'),
    phoneNumber: yup
        .string()
        .required('휴대폰 번호를 입력해주세요.')
        .test('isValidPhoneNumber', '휴대폰 번호를 올바르게 입력해주세요.', value => {
            const filteredValue = value.replace(/[^0-9]/g, '');
            return filteredValue.startsWith('010') && filteredValue.length === 11;
        }),
});

const partnerSchema = yup.object().shape({
    email: yup.string().email('유효한 이메일 주소를 입력해주세요.').required('이메일을 입력해주세요.'),
    password: yup.string().required('비밀번호를 입력해주세요.').min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
        .required('비밀번호 확인을 입력해주세요.'),
    phoneNumber: yup
        .string()
        .required('휴대폰 번호를 입력해주세요.')
        .test('isValidPhoneNumber', '휴대폰 번호를 올바르게 입력해주세요.', value => {
            const filteredValue = value.replace(/[^0-9]/g, '');
            return filteredValue.startsWith('010') && filteredValue.length === 11;
        }),
    merchantName: yup
        .string()
        .required('상점 이름을 입력해주세요.')
        .matches(/^[가-힣a-zA-Z]+([가-힣a-zA-Z\s]*[가-힣a-zA-Z])?$/, '상점 이름을 올바르게 입력해주세요.'),
    merchantAddress: yup
        .string()
        .required('상점 주소를 입력해주세요.')
        .matches(/^[가-힣a-zA-Z]+([가-힣a-zA-Z\s]*[가-힣a-zA-Z])?$/, '상점 주소를 올바르게 입력해주세요.'),
    businessNumber: yup.string().required('사업자 등록번호를 입력해주세요.'),
    businessContactNumber: yup.string().required('상점 연락처를 입력해주세요.'),
});

const cardValidationSchema = yup.object({
    cardType: yup.string().required('카드 타입을 선택해주세요.'),
    cardNumber: yup.string().required('카드 번호를 입력해주세요.').max(16, '카드 번호는 최대 16자리입니다.'),
    validDate: yup.string().required('유효기간을 입력해주세요.').max(4, '유효기간은 4자리로 입력해주세요.'),
    cardPassword: yup.string().required('카드 비밀번호를 입력해주세요.').max(4, '카드 비밀번호는 4자리입니다.'),
    birthDate: yup.string().required('생년월일 6자리를 입력해주세요.').max(6, '생년월일은 6자리로 입력해주세요.'),
});

export { userSchema, partnerSchema, cardValidationSchema };
