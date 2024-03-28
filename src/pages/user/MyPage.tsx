import { useRecoilState } from 'recoil';

import Container from '@common/components/Container.tsx';

import { userTypeState } from '@/common/stores/atoms';
import UserCard from './UserCard';

const MyPage = () => {
    // const userTaye = useRecoilState(userTypeState);
    return (
        <Container>
            <UserCard />
        </Container>
    );
};

export default MyPage;
