import React from 'react';
import styled from '@emotion/styled';
import { BestTagsData } from './BestTagsData';

const BestTags = () => {
    return (
        <Container>
            {BestTagsData.map(itm => (
                <Item>
                    <Ranking>{itm.ranking}</Ranking>
                    <Tag>{itm.tag}</Tag>
                </Item>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    width: 48%;
    padding: 5px 0px;
    gap: 20px;
    height: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray};
`;

const Ranking = styled.div`
    ${({ theme }) => theme.typography.normal_text};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary3};
`;
const Tag = styled.div``;

export default BestTags;
