import React from 'react';

import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

import { BestItemData } from './BestItemData';

const BestItem = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Scroll>
                {BestItemData.map(itm => (
                    <Item
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        <Img src="`/`"></Img>
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
    cursor: pointer;
`;

const Img = styled.img``;

const Scroll = styled.div`
    display: flex;
    white-space: nowrap;
    overflow: auto;
    -ms-overflow-style: none;
    gap: 10px;
`;

export default BestItem;
