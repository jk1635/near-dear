import { useRecoilState } from 'recoil';

import Container from '@common/components/Container.tsx';

import { userTypeState } from '@/common/stores/atoms';

const MyPage = () => {
    const userTaye = useRecoilState(userTypeState);
    return (
        <Container>
            <h1>MyPage</h1>
        </Container>
    );
};

export default MyPage;
