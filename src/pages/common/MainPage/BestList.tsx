import styled from '@emotion/styled';

import { SelectedList } from './SelectedList';

const BestList = () => {
    return (
        <Container>
            <Title>구매율 best</Title>
            <Scroll>
                {SelectedList.map(itm => (
                    <BestItem>
                        <Img />
                        <Name> {itm.name}</Name>
                        <Location>
                            {itm.location} / {itm.store}
                        </Location>
                        <Price> {itm.price}원</Price>
                    </BestItem>
                ))}
            </Scroll>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: auto;
    margin-top: 10px;
`;

const Title = styled.div`
    ${({ theme }) => theme.typography.title2};
`;
const Scroll = styled.div`
    display: flex;
    margin-top: 10px;
    white-space: nowrap;
    overflow: auto;
    -ms-overflow-style: none;
`;

const Img = styled.img`
    width: 150px;
    height: 150px;
    background-color: ${({ theme }) => theme.colors.primary};
    min-width: 150px;
    min-height: 150px;
`;
const BestItem = styled.div`
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    gap: 3px;
`;

const Name = styled.div`
    margin-top: 5px;
    ${({ theme }) => theme.typography.title2}
`;
const Location = styled.div`
    ${({ theme }) => theme.typography.small_text};
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 550;
`;
const Price = styled.div``;
export default BestList;
