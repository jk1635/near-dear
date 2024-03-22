import styled from '@emotion/styled';

import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';

const LoginPage = () => {
    const handleLogin = () => {};

    return (
        <Container>
            <h1>LoginPage</h1>

            <LoginInputWrapper>
                <Label>이메일</Label>
                <Input type="text" />
                <Label>패스워드</Label>
                <Input type="text" />
            </LoginInputWrapper>

            <FixedBottom onClick={handleLogin}>로그인</FixedBottom>
        </Container>
    );
};

const LoginInputWrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    border: 1px solid rgb(223, 226, 229);
`;

const Input = styled.input`
    border: 1px solid rgb(223, 226, 229);
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 4px;
`;

export default LoginPage;
