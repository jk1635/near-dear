import React, { useState } from 'react';
import styled from '@emotion/styled';
import { SelectedList } from './SelectedList';

const List = () => {
    const category = ['상품', '당일예약', '클래스'];
    const [categoryState, setCategoryState] = useState('상품');

    const categoryOnClick = (itm: string) => {
        if (itm === '상품') {
            setCategoryState('상품');
        }
        if (itm === '당일예약') {
            setCategoryState('당일예약');
        }
        if (itm === '클래스') {
            setCategoryState('클래스');
        }
    };

    const isToday = () => {};

    return (
        <>
            <Menu>
                {category.map(itm => (
                    <MenuItem onClick={() => categoryOnClick(itm)}>{itm}</MenuItem>
                ))}
            </Menu>
            <SelectedList_CSS>
                {categoryState === '상품'
                    ? SelectedList.map(itm => {
                          if (itm.유형 === '일반') return <ListItem>{itm.유형}</ListItem>;
                      })
                    : ''}
                {categoryState === '당일예약'
                    ? SelectedList.map(itm => {
                          if (itm.유형 === '당일예약') return <ListItem>{itm.유형}</ListItem>;
                      })
                    : ''}
                {categoryState === '클래스'
                    ? SelectedList.map(itm => {
                          if (itm.유형 === '클래스') return <ListItem>{itm.유형}</ListItem>;
                      })
                    : ''}
            </SelectedList_CSS>
        </>
    );
};

const Menu = styled.div`
    display: flex;
`;
const MenuItem = styled.div`
    padding: 15px;
    box-sizing: border-box;
`;

const SelectedList_CSS = styled.div`
    display: flex;
    flex-direction: column;
`;
const ListItem = styled.div`
    padding: 15px;
    box-sizing: border-box;
    height: 80px;
`;

export default List;
