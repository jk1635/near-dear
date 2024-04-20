import { useState } from 'react';

import styled from '@emotion/styled';

import Button from '@common/components/Button';

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
                                      <Content>
                                          <Name>{itm.name}</Name>
                                          <Location>
                                              {itm.location} / {itm.store}
                                          </Location>
                                          <Price>{itm.discount}원</Price>
                                      </Content>
                                  </ListItem>
                              );
                      }).slice(0, 6)
                    : ''}
                {categoryState === '당일예약'
                    ? SelectedList.map(itm => {
                          if (itm.당일예약가능여부)
                              return (
                                  <ListItem>
                                      {' '}
                                      <Img></Img>
                                      <Content>
                                          <Name>{itm.name}</Name>
                                          <Location>
                                              {itm.location} / {itm.store}
                                          </Location>
                                          <Price>{itm.discount}원</Price>
                                      </Content>
                                  </ListItem>
                              );
                      }).slice(0, 6)
                    : ''}
                {categoryState === '클래스'
                    ? SelectedList.map(itm => {
                          if (itm.type === '클래스')
                              return (
                                  <ListItem>
                                      <Img></Img>
                                      <Content>
                                          <Name>{itm.name}</Name>
                                          <Location>
                                              {itm.location} / {itm.store}
                                          </Location>
                                          <Price>{itm.discount}원</Price>
                                      </Content>
                                  </ListItem>
                              );
                      }).slice(0, 6)
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
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
`;

const SelectedList_CSS = styled.div`
    display: flex;
    flex-direction: column;
`;
const ListItem = styled.div`
    display: flex;
    padding: 10px 10px;
    height: 120px;
    border: 1px solid lightgray;
    margin-bottom: 10px;
    gap: 15px;
`;

const Img = styled.div`
    width: 100px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const Price = styled.div`
    ${({ theme }) => theme.typography.title3}
`;
const Location = styled.div`
    ${({ theme }) => theme.typography.small_text}
`;
const Name = styled.div`
    ${({ theme }) => theme.typography.title2}
`;
export default List;
