import styled from '@emotion/styled';

import Button from '@common/components/Button.tsx';
import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';
import Input from '@common/components/Input.tsx';

const AddCardPage = () => {
    const handleCardSave = () => {};

    return (
        <Container>
            <Input label="카드 유형" />
            <Input label="카드 번호" />
            <ValidWrapper>
                <Input label="유효기간 (월/년)" />
                <Input label="비밀번호" />
            </ValidWrapper>
            <Input label="생년월일 6자리" />
            <FixedBottom>
                <Button onClick={handleCardSave}>등록하기</Button>
            </FixedBottom>
        </Container>
    );
};

const ValidWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export default AddCardPage;
