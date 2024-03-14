import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';

const CompletePage = () => {
    const handleStart = () => {};

    return (
        <Container isCentered={true}>
            <h1>회원 가입이 완료되었습니다.</h1>
            <FixedBottom onClick={handleStart}>시작하기</FixedBottom>
        </Container>
    );
};

export default CompletePage;
