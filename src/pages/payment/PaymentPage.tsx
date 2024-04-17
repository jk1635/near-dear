import styled from '@emotion/styled';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import Text from '@common/components/Text.tsx';

const PaymentPage = () => {
    return (
        <Container>
            <Text>상점이름</Text>
            <Text variant="title1">상품이름</Text>
            <Text>수량 or 인원 / 시간 / 방문 or 퀵</Text>
            <Text>요청사항 있으면 노출</Text>
            <PriceWrapper>
                <Text bold>총 결제금액</Text>
                <Text variant="title1">50,000원</Text>
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
    align-items: center;
`;

const PaymentMethod = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default PaymentPage;
