import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';

const LoginPage = () => {
    const handleLogin = () => {};

    return (
        <Container>
            <h1>LoginPage</h1>
            <FixedBottom onClick={handleLogin}>로그인</FixedBottom>
        </Container>
    );
};

export default LoginPage;
