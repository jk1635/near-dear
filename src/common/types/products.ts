interface ProductList {
    productName: string;
    regionName: string;
    price: number;
}

interface ProductDetail {
    merchantName: string;
    productName: string;
    regionName: string;
    price: number;
    quantity: number;
    thumbNails: Array<string>;
    category: string;
    createTime: string;
}

interface ProductForm {
    productName: string;
    retailPrice: number;
    discountRate: number;
    quantity: number;
    thumbNails: Array<string>;
    category: string;
}

export type { ProductList, ProductDetail, ProductForm };
