import { useState } from 'react';

import { useParams } from 'react-router-dom';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import Input from '@common/components/Input.tsx';
import { initialPartnerSignUpForm, initialSignUpForm } from '@common/constants';
import { useSignUp, usePartnerSignUp } from '@common/hooks/useUser.ts';

const SignUpPage = () => {
    const { type } = useParams();

    const userMutation = useSignUp();
    const partnerMutation = usePartnerSignUp();

    const [form] = useState(initialSignUpForm);
    const [partnerForm] = useState(initialPartnerSignUpForm);

    const handleSignUp = () => {
        if (type === 'user') {
            userMutation.mutate(form);
        } else if (type === 'partner') {
            partnerMutation.mutate(partnerForm);
        }
    };

    return (
        <Container>
            <Input label="이메일" />
            <Input label="패스워드" />
            <Input label="패스워드 확인" />
            {type === 'user' && <Input label="닉네임" />}
            <Input label="휴대폰 번호" />
            {type === 'partner' && (
                <>
                    <Input label="상점 이름" />
                    <Input label="상점 주소" />
                    <Input label="사업자 등록 번호" />
                    <Input label="상점 연락처" />
                </>
            )}
            <FixedBottom>
                <Button onClick={handleSignUp}>가입하기</Button>
            </FixedBottom>
        </Container>
    );
};

export default SignUpPage;
