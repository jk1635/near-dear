import { useNavigate } from 'react-router-dom';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import Text from '@common/components/Text.tsx';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        // TODO: 비회원일 시 intro 로 이동
        navigate('/main');
    };

    return (
        <Container isCentered={true}>
            <Text>페이지를 찾을 수 없습니다.</Text>
            <FixedBottom>
                <Button onClick={handleConfirm}>홈으로 가기</Button>
            </FixedBottom>
        </Container>
    );
};

export default NotFoundPage;
