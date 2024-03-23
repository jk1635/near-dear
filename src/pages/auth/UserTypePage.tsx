import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';

const UserTypePage = () => {
    const navigate = useNavigate();

    return (
        <Container isCentered={true}>
            <UserTypeWrapper>
                <Button
                    onClick={() => {
                        navigate('/signUp/user');
                    }}
                    variant="outline"
                >
                    상품 구매를 원하는 고객
                </Button>
                <Button
                    onClick={() => {
                        navigate('/signUp/partner');
                    }}
                    variant="outline"
                >
                    상품 판매를 원하는 파트너사
                </Button>
            </UserTypeWrapper>
        </Container>
    );
};

const UserTypeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5.5rem;
`;

export default UserTypePage;
