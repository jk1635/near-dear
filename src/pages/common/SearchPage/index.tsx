import Container from '@common/components/Container.tsx';

import styled from '@emotion/styled';

import SearchTags from './SearchTags';

const SearchPage = () => {
    return (
        <Container>
            <Content>
                <Title>최근검색어</Title>
                <SearchTags></SearchTags>
            </Content>
        </Container>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Title = styled.div`
    ${({ theme }) => theme.typography.title3}
`;

export default SearchPage;
