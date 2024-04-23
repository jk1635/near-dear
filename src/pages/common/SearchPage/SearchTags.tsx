import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

const SearchTags = () => {
    const [getTags, setGetTags] = useState(JSON.parse(localStorage.getItem('keywords')));

    useEffect(() => {}, [getTags]);

    return <Container>{getTags?.map(itm => <Tags>{itm}</Tags>)}</Container>;
};

const Container = styled.div`
    display: flex;
    gap: 3px;
`;

const Tags = styled.div`
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
`;

export default SearchTags;
