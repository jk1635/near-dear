import { useNavigate } from 'react-router-dom';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import Text from '@common/components/Text.tsx';

const PaymentStatusPage = () => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        navigate('/main');
    };

    return (
        <Container isCentered>
            <Text variant="title2" isCentered>
                결제가 완료되었습니다.
            </Text>
            <FixedBottom>
                <Button onClick={handleConfirm}>홈으로 이동</Button>
            </FixedBottom>
        </Container>
    );
};

export default PaymentStatusPage;
