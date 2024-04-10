import { useState } from 'react';

import Container from '@common/components/Container.tsx';
import { initialProductForm } from '@common/constants';
import { useProduct, useProductDetail, useProductRegister } from '@common/hooks/useProduct.ts';

const ListPage = () => {
    // TODO: 상품 목록 조회 예시
    const { data: Products } = useProduct(1, 10);

    // TODO: 상품 상세 조회 예시
    const { data: ProductDetail } = useProductDetail(1);

    // TODO: 상품 등록 기능 예시
    const productMutation = useProductRegister();

    const [form] = useState(initialProductForm);

    console.log(Products, ProductDetail);

    return (
        <Container>
            <h1>ListPage</h1>
            <button onClick={() => productMutation.mutate(form)}>상품 등록</button>
        </Container>
    );
};

export default ListPage;
