import styled from '@emotion/styled';

import Container from '@common/components/Container.tsx';

const UserTypePage = () => {
    return (
        <Container isCentered={true}>
            <UserTypeWrapper>
                <UserTypeButton>상품 구매를 원하시는 고객</UserTypeButton>
                <UserTypeButton>상품 판매를 원하시는 파트너사</UserTypeButton>
            </UserTypeWrapper>
        </Container>
    );
};

const UserTypeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const UserTypeButton = styled.button`
    margin-bottom: 0.5rem;
    padding: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    :hover {
        background-color: ${({ theme }) => theme.colors.gray};
    }
`;

export default UserTypePage;
