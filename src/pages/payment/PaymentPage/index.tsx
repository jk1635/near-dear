import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import Text from '@common/components/Text.tsx';

const PaymentPage = () => {
    const navigate = useNavigate();

    const [showSlides, setShowSlides] = useState(false);

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
                <Button onClick={() => setShowSlides(!showSlides)}>카드결제</Button>
                {showSlides && (
                    <CardSlides>
                        <CardBox>
                            <Text>등록된 카드 1</Text>
                        </CardBox>
                        <CardBox onClick={() => navigate('/payment/card')}>
                            <Text isCentered>+</Text>
                        </CardBox>
                    </CardSlides>
                )}
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

const CardSlides = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`;

const CardBox = styled.div`
    width: 10rem;
    padding: 2rem 2rem;
    border: 1px solid #000;
    white-space: nowrap;
`;

const PaymentMethod = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3.5rem;
`;

export default PaymentPage;
