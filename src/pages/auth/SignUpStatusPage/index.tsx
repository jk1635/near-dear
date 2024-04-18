import { useNavigate, useParams } from 'react-router-dom';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import Text from '@common/components/Text.tsx';

const SignUpStatusPage = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    const handleStart = () => {
        if (type === 'user') {
            navigate('/main');
        } else if (type === 'partner') {
            navigate('/main');
        }
    };

    return (
        <Container isCentered>
            {type === 'user' && (
                <Text variant="title2" isCentered>
                    회원가입이 완료되었습니다.
                </Text>
            )}
            {type === 'partner' && (
                <>
                    <Text variant="title2" isCentered>
                        회원가입이 완료되었습니다.
                    </Text>
                    <Text>승인 완료 후 서비스를 이용할 수 있습니다.</Text>
                </>
            )}
            <FixedBottom>
                <Button onClick={handleStart}>시작하기</Button>
            </FixedBottom>
        </Container>
    );
};

export default SignUpStatusPage;
