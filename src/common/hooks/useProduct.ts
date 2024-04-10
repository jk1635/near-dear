import { useMutation, useQuery } from '@tanstack/react-query';

import { ProductDetail, ProductForm, ProductList } from '@common/types/products.ts';
import apiClient from '@common/utils/apiClient.ts';

// 상품 목록 조회
const useProduct = (page: number, size: number) => {
    const productsList = useQuery({
        queryKey: ['product', page, size],
        queryFn: () => apiClient.get<Array<ProductList>>(`product?page=${page}&size=${size}`),
    });
    return { ...productsList };
};

// 상품 상세 조회
const useProductDetail = (productId: number) => {
    const productDetail = useQuery({
        queryKey: ['product', productId],
        queryFn: () => apiClient.get<ProductDetail>(`product/${productId}`),
    });
    return { ...productDetail };
};

// 상품 등록
const useProductRegister = () => {
    return useMutation({
        mutationFn: (productForm: ProductForm) => apiClient.post('/product', productForm),
        onSuccess: () => {
            console.log('상품 등록 성공');
        },
        onError: error => {
            console.error(error);
        },
    });
};

export { useProduct, useProductDetail, useProductRegister };
