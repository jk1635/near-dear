import { useState } from 'react';

import Container from '@common/components/Container.tsx';
import { useProduct, useProductDetail, useProductRegister } from '@common/hooks/useProduct.ts';
import { ProductForm } from '@common/types/products.ts';

const initialForm: ProductForm = {
    productName: '',
    retailPrice: 0,
    discountRate: 0,
    quantity: 0,
    thumbNails: [''],
    category: '',
};

const ListPage = () => {
    // TODO: 상품 목록 조회 예시
    const { data: Products } = useProduct(1, 10);

    // TODO: 상품 상세 조회 예시
    const { data: ProductDetail } = useProductDetail(1);

    // TODO: 상품 등록 기능 예시
    const productMutation = useProductRegister();

    const [form] = useState(initialForm);

    console.log(Products, ProductDetail);

    return (
        <Container>
            <h1>ListPage</h1>
            <button onClick={() => productMutation.mutate(form)}>상품 등록</button>
        </Container>
    );
};

export default ListPage;
