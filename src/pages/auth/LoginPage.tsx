import { useNavigate } from 'react-router-dom';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import Input from '@common/components/Input.tsx';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/main');
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
