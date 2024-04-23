import styled from '@emotion/styled';

import SliderImg from '@/common/components/Carousel/SliderImg';
import Container from '@/common/components/Container';

import { DetailData } from './detailData';

const DetailPage = () => {
    return (
        <Container>
            <SliderImg />
            <StoreName>{DetailData[0].storeName}</StoreName>
            <Product>{DetailData[0].product}</Product>
            <Address>{DetailData[0].address}</Address>
        </Container>
    );
};

const StoreName = styled.div``;
const Product = styled.div``;
const Address = styled.div``;

export default DetailPage;
