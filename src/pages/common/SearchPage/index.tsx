import Container from '@common/components/Container.tsx';

import styled from '@emotion/styled';

const SearchPage = () => {
    return (
        <Container>
            <Content>
                <Title>최근검색어</Title>
            </Content>
        </Container>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    ${({ theme }) => theme.typography.title3}
`;

export default SearchPage;
