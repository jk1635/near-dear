import React, { useState } from 'react';
import styled from '@emotion/styled';
import { SelectedList } from './SelectedList';
import Button from '@/common/components/Button';

const List = () => {
    const category = ['상품', '당일예약', '클래스'];
    const [categoryState, setCategoryState] = useState('상품');
    const [clicked, setClicked] = useState(false);

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
                          if (itm.type === '일반')
                              return (
                                  <ListItem>
                                      <Img></Img>
                                      <Name>{itm.name}</Name>
                                      <Price>{itm.discount}</Price>
                                      <Location>
                                          {itm.location} {itm.store}
                                      </Location>
                                  </ListItem>
                              );
                      })
                    : ''}
                {categoryState === '당일예약'
                    ? SelectedList.map(itm => {
                          if (itm.당일예약가능여부 === 'yes') return <ListItem>{itm.type}</ListItem>;
                      })
                    : ''}
                {categoryState === '클래스'
                    ? SelectedList.map(itm => {
                          if (itm.type === '클래스') return <ListItem>{itm.type}</ListItem>;
                      })
                    : ''}
            </SelectedList_CSS>
            <Button>전체보기</Button>
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
    height: 120px;
    border: 1px solid lightgray;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
`;

const Img = styled.img``;

const Price = styled.div``;
const Location = styled.div``;
const Name = styled.div``;
export default List;
