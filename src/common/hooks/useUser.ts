import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { SignUpForm, PartnerSignUpForm, LoginForm } from '@common/types/user.ts';
import apiClient from '@common/utils/apiClient.ts';

// 일반 회원가입
const useSignUp = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (signup: SignUpForm) => apiClient.post('/auth/signup', signup),
        onSuccess: () => {
            navigate('/complete/user');
        },
        onError: error => {
            console.error('가입에 실패하였습니다.', error);
        },
    });
};

// 파트너 회원가입
const usePartnerSignUp = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (signup: PartnerSignUpForm) => apiClient.post('/auth/signup/partner', signup),
        onSuccess: () => {
            navigate('/complete/partner');
        },
        onError: error => {
            console.error('가입에 실패하였습니다.', error);
        },
    });
};

// 로그인
const useLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (login: LoginForm) => apiClient.post('/auth/login', login),
        onSuccess: () => {
            navigate('/main');
        },
        onError: error => {
            console.error('로그인에 실패하였습니다.', error);
        },
    });
};

export { useSignUp, usePartnerSignUp, useLogin };
