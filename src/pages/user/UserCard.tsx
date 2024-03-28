import React from 'react';

import styled from '@emotion/styled';

const UserCard = () => {
    return (
        <UserCardContainer>
            <ProfileImg></ProfileImg>
            <Information>
                <Name></Name>
                <Email></Email>
            </Information>
        </UserCardContainer>
    );
};

const UserCardContainer = styled.div``;
const ProfileImg = styled.img`
    border-radius: 50%;
    object-fit: cover;
`;
const Information = styled.div``;
const Name = styled.div``;
const Email = styled.div``;

export default UserCard;
