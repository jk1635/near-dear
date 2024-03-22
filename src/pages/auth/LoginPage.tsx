import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import Input from '@common/components/Input.tsx';

const LoginPage = () => {
    const handleLogin = () => {};

    return (
        <Container>
            <Input label="이메일" />
            <Input label="패스워드" />
            <FixedBottom onClick={handleLogin}>로그인</FixedBottom>
        </Container>
    );
};

export default LoginPage;
