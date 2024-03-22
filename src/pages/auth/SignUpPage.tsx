import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import Input from '@common/components/Input.tsx';

const SignUpPage = () => {
    const handleSignUp = () => {};

    return (
        <Container>
            <Input label="이메일" />
            <Input label="패스워드" />
            <Input label="패스워드 확인" />
            <Input label="닉네임" />
            <Input label="휴대폰 번호" />
            <FixedBottom onClick={handleSignUp}>가입완료</FixedBottom>
        </Container>
    );
};

export default SignUpPage;
