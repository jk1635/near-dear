import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';

const NotFoundPage = () => {
    const handleConfirm = () => {};

    return (
        <Container isCentered={true}>
            <h1>페이지를 찾을 수 없습니다.</h1>
            <FixedBottom onClick={handleConfirm}>확인</FixedBottom>
        </Container>
    );
};

export default NotFoundPage;
