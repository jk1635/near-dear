import Container from '@common/components/Container.tsx';

import Banner from './Banner';
import BestList from './BestList';
import List from './List';

const MainPage = () => {
    return (
        <Container>
            <Banner />
            <List />
            <BestList />
        </Container>
    );
};

export default MainPage;
