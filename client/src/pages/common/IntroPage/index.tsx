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
                <Text variant="title1" isCentered>
                    NEAR
                </Text>
                <Text variant="title2" isCentered>
                    특별한 하루를 선물하세요.
                </Text>
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

export default IntroPage;
