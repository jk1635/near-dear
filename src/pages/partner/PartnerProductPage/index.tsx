import Container from '@common/components/Container.tsx';
import FixedBottom from '@common/components/FixedBottom.tsx';

const PartnerProductPage = () => {
    const handleProductSave = () => {};

    return (
        <Container>
            <h1>PartnerAddProductPage</h1>
            <FixedBottom onClick={handleProductSave}>상품 등록하기</FixedBottom>
        </Container>
    );
};

export default PartnerProductPage;
