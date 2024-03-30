import React from 'react';

import styled from '@emotion/styled';

import ProfileImg from './ProfileImg';

import { UserInformation } from './UserData';

const UserCard = () => {
    return (
        <UserCardContainer>
            <ProfileImg size={150} />
            <Information>
                <Name>
                    {UserInformation?.name} {UserInformation?.userType === 'seller' ? <Partner>Partner</Partner> : null}{' '}
                </Name>
                <Email>{UserInformation?.email}</Email>
            </Information>
        </UserCardContainer>
    );
};

const UserCardContainer = styled.div`
    display: flex;
    gap: 50px;
`;

const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const Partner = styled.div`
    padding: 5px 5px;
    box-sizing: border-box;
    font-weight: 600;
    background-color: rgb(252, 252, 252);
`;

const Name = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
`;
const Email = styled.div``;

export default UserCard;
