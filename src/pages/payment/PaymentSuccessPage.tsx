import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';

const PaymentSuccessPage = () => {
    const handleConfirm = () => {};

    return (
        <Container isCentered={true}>
            <h1>결제가 완료되었습니다.</h1>
            <FixedBottom onClick={handleConfirm}>확인</FixedBottom>
        </Container>
    );
};

export default PaymentSuccessPage;
