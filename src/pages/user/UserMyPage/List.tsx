import { useState } from 'react';

import styled from '@emotion/styled';
// import Button from '@common/components/Button';

import { ReservationData } from './ReservationData';
import { UserInformation } from './UserData';

const List = () => {
    const [isActive, setIsActive] = useState(false);
    // const [categoryState, setCategoryState] = useState('예약' || '구매내역');

    const UserMenu = ['구매내역', '좋아요'];
    const SellerMenu = ['예약', '완료', '내상품'];
    const [done, setDone] = useState(false);

    // const categoryOnClick = itm => {
    //     if (UserInformation.userType === 'user') {
    //         if (itm === '구매내역') {
    //             setCategoryState('구매내역');
    //         }
    //         if (itm === '좋아요') {
    //             setCategoryState('좋아요');
    //         }
    //     } else {
    //         if (itm === '예약') {
    //             setCategoryState('예약');
    //         }
    //         if (itm === '예약') {
    //             setCategoryState('완료');
    //         }
    //         if (itm === '예약') {
    //             setCategoryState('내상품');
    //         }
    //     }
    // };

    const activeHandler = (itm: string, idx: number) => {
        console.log(itm, idx);
        setIsActive(isActive);
    };

    return (
        <ListContainer>
            {UserInformation.userType === 'user' ? (
                <MenuContainer>
                    {UserMenu.map((itm, idx) => (
                        <Menu key={idx} onClick={() => activeHandler(itm, idx)} active={isActive}>
                            {itm}
                        </Menu>
                    ))}
                </MenuContainer>
            ) : (
                <MenuContainer>
                    {SellerMenu.map((itm, idx) => (
                        <Menu onClick={() => activeHandler(itm, idx)} active={isActive}>
                            {itm}
                        </Menu>
                    ))}
                </MenuContainer>
            )}
            <ReservationList>
                {ReservationData.map(reservationItm => (
                    <ListItem>
                        <ImportantMsg>
                            <DDay>D-30</DDay>
                            <Type>{reservationItm.howToFind}</Type>
                        </ImportantMsg>
                        <Content>
                            <Img></Img>
                            <Information>
                                <Product>
                                    {reservationItm.product} <Count>{reservationItm.count}</Count>
                                </Product>
                                <Name>{reservationItm.name}</Name>
                                <Time>{reservationItm.time}</Time>
                                <Count>{reservationItm.request}</Count>
                            </Information>
                        </Content>
                        {/* <Button onClick={() => setDone(!done)} done={done}>
                            완료 처리하기
                        </Button> */}
                        <Button done={reservationItm.complete}>
                            {reservationItm.complete ? '완료 처리하기' : '작업 완료'}
                        </Button>
                    </ListItem>
                ))}
            </ReservationList>
        </ListContainer>
    );
};

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const MenuContainer = styled.div`
    display: flex;
    gap: 10px;
`;
const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.light_gray};
    min-height: 180px;
    padding: 10px 10px;
    gap: 10px;
`;
const Content = styled.div`
    display: flex;
    gap: 15px;
    height: 100%;
`;

const DDay = styled.div`
    padding: 3px 3px;
    border: 1px solid ${({ theme }) => theme.colors.light_gray};
    border-radius: 5px;
`;
const Type = styled(DDay)``;

const ImportantMsg = styled.div`
    display: flex;
    gap: 5px;
`;

const Menu = styled.div<{ active: boolean }>`
    padding: 10px 10px;
    background-color: rgb(252, 252, 252);
    font-weight: ${props => (props.active ? 700 : 500)};
`;
const ReservationList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const Img = styled.div`
    min-width: 120px;
    min-height: 120px;
    background-color: rgb(252, 252, 252);
`;

const Information = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Product = styled.div`
    font-weight: 700;
    display: flex;
`;
const Name = styled.div``;
const Time = styled.div`
    color: ${({ theme }) => theme.colors.err};
`;
const Count = styled.div``;

const Button = styled.div<{ done: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${props => (props.done ? props.theme.colors.light_gray : props.theme.colors.light_gray)};
    padding: 10px 10px;
    font-weight: 600;
    background-color: ${props => (props.done ? props.theme.colors.white : props.theme.colors.primary)};
`;

export default List;
