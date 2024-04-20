import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

const Search = () => {
    const location = useLocation();
    console.log('location', location.pathname);
    const [search, setSearch] = useState('');
    console.log('search', search);
    return (
        <>
            {(location.pathname === '/main' || location.pathname === '/search') && (
                <Container>
                    <SearchDiv>
                        <Input
                            onChange={e => setSearch(e.target.value)}
                            placeholder="지역, 상품, 매장명 검색해보세요"
                        />
                    </SearchDiv>
                </Container>
            )}
        </>
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
    &::placeholder {
        display: flex;
        align-items: center;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.gray};
    }
`;

export default Search;
