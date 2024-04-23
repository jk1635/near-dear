import React from 'react';
import styled from '@emotion/styled';

import { BestItemData } from './BestItemData';

const BestItem = () => {
    return (
        <Container>
            <Scroll>
                {BestItemData.map(itm => (
                    <Item>
                        {itm.ranking} {itm.tag}
                    </Item>
                ))}
            </Scroll>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
`;

const Item = styled.div`
    min-width: 130px;
    height: 130px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
`;

const Scroll = styled.div`
    display: flex;
    white-space: nowrap;
    overflow: auto;
    -ms-overflow-style: none;
    gap: 10px;
`;

export default BestItem;
