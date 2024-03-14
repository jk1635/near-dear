import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';

const SignUpPage = () => {
    const handleSignUp = () => {};

    return (
        <Container>
            <h1>SignUp</h1>
            <FixedBottom onClick={handleSignUp}>가입완료</FixedBottom>
        </Container>
    );
};

export default SignUpPage;
