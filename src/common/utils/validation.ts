import * as yup from 'yup';

const userSchema = yup.object().shape({
    email: yup.string().email('유효한 이메일 주소를 입력해주세요.').required('이메일을 입력해주세요.'),
    password: yup.string().required('비밀번호를 입력해주세요').min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], '패스워드가 일치하지 않습니다.')
        .required('비밀번호 확인은 필수입니다.'),
    nickname: yup
        .string()
        .required('닉네임은 필수입니다.')
        .matches(/^[가-힣a-zA-Z]+([가-힣a-zA-Z\s]*[가-힣a-zA-Z])?$/, '닉네임을 올바르게 입력해주세요.')
        .max(50, '닉네임은 50자를 초과할 수 없습니다.'),
    phoneNumber: yup
        .string()
        .required('휴대폰 번호는 필수입니다.')
        .test('isValidPhoneNumber', '올바른 휴대폰 번호를 입력하세요.', value => {
            const filteredValue = value.replace(/[^0-9]/g, '');
            return filteredValue.startsWith('010') && filteredValue.length === 11;
        }),
});

const partnerSchema = yup.object().shape({
    email: yup.string().email('유효한 이메일 주소를 입력해주세요.').required('이메일을 입력해주세요.'),
    password: yup.string().required('비밀번호를 입력해주세요').min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], '패스워드가 일치하지 않습니다.')
        .required('비밀번호 확인은 필수입니다.'),
    phoneNumber: yup
        .string()
        .required('휴대폰 번호는 필수입니다.')
        .test('isValidPhoneNumber', '올바른 휴대폰 번호를 입력하세요.', value => {
            const filteredValue = value.replace(/[^0-9]/g, '');
            return filteredValue.startsWith('010') && filteredValue.length === 11;
        }),
    merchantName: yup
        .string()
        .required('상호명을 입력해주세요.')
        .matches(/^[가-힣a-zA-Z]+([가-힣a-zA-Z\s]*[가-힣a-zA-Z])?$/, '상호명을 올바르게 입력해주세요.')
        .max(50, '상호명은 50자를 초과할 수 없습니다.'),
    merchantAddress: yup
        .string()
        .required('상점 주소를 입력해주세요.')
        .matches(/^[가-힣a-zA-Z]+([가-힣a-zA-Z\s]*[가-힣a-zA-Z])?$/, '상점 주소를 올바르게 입력해주세요.')
        .max(50, '상점 주소는 50자를 초과할 수 없습니다.'),
    businessNumber: yup.string().required('사업자 등록번호를 입력해주세요.'),
    businessContactNumber: yup.string().required('상점 연락처를 입력해주세요.'),
});

export { userSchema, partnerSchema };
