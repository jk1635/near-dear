import React from 'react';
import styled from '@emotion/styled';
import SelectedList from './SelectedList';

const List = () => {
    const category = ['상품', '당일예약', '클래스'];

    return (
        <div>
            <Menu>
                {category.map(itm => (
                    <MenuItem>{itm}</MenuItem>
                ))}
            </Menu>
            <SelectedList_CSS>
                {SelectedList.map(itm => (
                    <ListItem>{itm.상점이름}</ListItem>
                ))}
            </SelectedList_CSS>
        </div>
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
