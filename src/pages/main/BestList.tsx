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
                        {itm.이름}
                        {itm.지역}
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

const BestItem = styled.div`
    width: 150px;
    height: 150px;
    background-color: #faf0e6;
    margin-right: 10px;
    min-width: 150px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
`;
export default BestList;
