import React from 'react';
import styled from '@emotion/styled';
import { BestListData } from './BestListData';

const BestList = () => {
    return (
        <Container>
            <Title>구매율 best</Title>
            <Scroll>
                {BestListData.map(itm => (
                    <BestItem>
                        <Img />
                        <Name> {itm.이름}</Name>
                        <Location> {itm.지역}</Location>
                        <Price> {itm.가격}원</Price>
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
`;

const Title = styled.div``;
const Scroll = styled.div`
    display: flex;
    margin-top: 10px;
    white-space: nowrap;
    overflow: auto;
    /* -webkit-overflow-scrolling: touch; */
    -ms-overflow-style: none;
`;

const Img = styled.img`
    width: 150px;
    height: 150px;
    background-color: #faf0e6;
    min-width: 150px;
    min-height: 150px;
`;
const BestItem = styled.div`
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    gap: 10px;
`;

const Name = styled.div``;
const Location = styled.div``;
const Price = styled.div``;
export default BestList;
