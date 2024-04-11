import styled from '@emotion/styled';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';

const PaymentPage = () => {
    return (
        <Container>
            <span>상점이름</span>
            <h2>상품이름</h2>
            <p>수량 or 인원 / 시간 / 방문 or 퀵</p>
            <p>요청사항 있으면 노출</p>
            <PriceWrapper>
                <span>총 결제금액</span>
                <span>50,000원</span>
            </PriceWrapper>
            <PaymentMethod>
                <Button>카드결제</Button>
                <Button>네이버페이</Button>
                <Button>토스간편결제</Button>
            </PaymentMethod>
        </Container>
    );
};

const PriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PaymentMethod = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default PaymentPage;
