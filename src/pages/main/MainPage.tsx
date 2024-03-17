import Container from '@common/components/Container.tsx';
import List from './List';
import Banner from './Banner';
import BestList from './BestList';

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
