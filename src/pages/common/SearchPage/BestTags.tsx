import React from 'react';
import styled from '@emotion/styled';
import { BestItemData } from './BestItemData';

const BestTags = () => {
    return (
        <Container>
            {BestItemData.map(itm => (
                <Item>{itm.ranking}</Item>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
export default BestTags;
