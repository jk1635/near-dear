import Container from '@common/components/Container.tsx';
import List from './List';
import Banner from './Banner';

const MainPage = () => {
    return (
        <Container>
            <Banner />
            <List />
        </Container>
    );
};

export default MainPage;
