import { useRecoilState } from 'recoil';

import Container from '@common/components/Container.tsx';

import { UserInformation } from './UserData';

import { userTypeState } from '@/common/stores/atoms';

import UserCard from './UserCard';
import List from './List';

const MyPage = () => {
    // const userTaye = useRecoilState(userTypeState);
    return (
        <Container>
            <UserCard />
            <List />
        </Container>
    );
};

export default MyPage;
