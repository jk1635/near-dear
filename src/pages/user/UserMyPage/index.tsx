import Container from '@common/components/Container.tsx';

import List from './List';
import UserCard from './UserCard';

const MyPage = () => {
    return (
        <Container>
            <UserCard />
            <List />
        </Container>
    );
};

export default MyPage;
