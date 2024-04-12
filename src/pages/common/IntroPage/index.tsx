import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import Text from '@common/components/Text.tsx';

const IntroPage = () => {
    const navigate = useNavigate();

    const googleLogin = () => {};

    const emailLogin = () => {
        navigate('/login');
    };

    const signUp = () => {
        navigate('/accountType');
    };

    return (
        <Container>
            <TitleWrapper>
                <Logo>NEAR</Logo>
                <Text variant="t1">특별한 하루를 선물하세요.</Text>
            </TitleWrapper>
            <FixedBottom>
                <Button onClick={googleLogin}>Google로 시작하기</Button>
                <Button onClick={emailLogin}>이메일로 로그인하기</Button>
                <Button onClick={signUp} variant="gray" fullWidth={false}>
                    회원가입
                </Button>
            </FixedBottom>
        </Container>
    );
};

const TitleWrapper = styled.div`
    margin-top: 7.5rem;
`;

const Logo = styled.h1`
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;
    font-size: 2rem;
    font-weight: 700;
`;

export default IntroPage;
