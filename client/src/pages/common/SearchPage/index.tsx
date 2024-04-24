import styled from '@emotion/styled';

import Container from '@common/components/Container.tsx';

import BestItem from './BestItem';
import BestTags from './BestTags';
import SearchTags from './SearchTags';

const SearchPage = () => {
    return (
        <Container>
            <Content>
                <Title>최근검색어</Title>
                <SearchTags></SearchTags>
            </Content>
            <Content>
                <Title>인기검색어</Title>
                <BestTags />
            </Content>
            <Content>
                <Title>어떤 제품을 찾으세요?</Title>
                <BestItem />
            </Content>
        </Container>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 40px;
`;

const Title = styled.div`
    ${({ theme }) => theme.typography.title3}
`;

export default SearchPage;
