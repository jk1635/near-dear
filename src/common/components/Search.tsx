import React, { useState } from 'react';

import styled from '@emotion/styled';

const Search = () => {
    const [search, setSearch] = useState('');
    console.log('search', search);
    return (
        <Container>
            <SearchDiv>
                <Input onChange={e => setSearch(e.target.value)} placeholder="지역, 상품, 매장명 검색" />
            </SearchDiv>
        </Container>
    );
};

const Container = styled.div`
    width: 90%;
    height: 100%;
    padding: 10px 20px;
`;

const SearchDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    background-color: transparent;
`;

export default Search;
