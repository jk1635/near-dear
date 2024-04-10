import { useState } from 'react';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import Input from '@common/components/Input.tsx';
import { initialLoginForm } from '@common/constants';
import { useLogin } from '@common/hooks/useUser.ts';

const LoginPage = () => {
    const [loginForm] = useState(initialLoginForm);

    const loginMutation = useLogin();

    const handleLogin = () => {
        loginMutation.mutate(loginForm);
    };

    return (
        <Container>
            <Input label="이메일" />
            <Input label="패스워드" />
            <FixedBottom>
                <Button onClick={handleLogin}>로그인</Button>
            </FixedBottom>
        </Container>
    );
};

export default LoginPage;
