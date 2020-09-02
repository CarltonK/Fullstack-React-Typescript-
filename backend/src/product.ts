// General Product Object
export interface Product {
    id: number | null
    productName: string
    productCode: string
    productPrice: number
    proddescription?: string
    prodRating?: number
}

// List of products
export const products: Product[] = [
    {
        id: 1,
        productName: 'Samsung Galaxy A50',
        productCode: 'SMA50',
        productPrice: 23000,
        proddescription: 'Phone',
        prodRating: 4.0
    },
    {
        id: 2,
        productName: 'Samsung Galaxy A51',
        productCode: 'SMA51',
        productPrice: 30000,
        proddescription: 'Phone',
        prodRating: 4.5
    },
    {
        id: 3,
        productName: 'Samsung Galaxy A70',
        productCode: 'SMA70',
        productPrice: 25000,
        proddescription: 'Phone',
        prodRating: 4.2
    },
    {
        id: 4,
        productName: 'Samsung Galaxy A71',
        productCode: 'SMA71',
        productPrice: 35000,
        proddescription: 'Phone',
        prodRating: 4.7
    },
    {
        id: 5,
        productName: 'Samsung Galaxy Note 10',
        productCode: 'SMN10',
        productPrice: 100000,
        proddescription: 'Phone',
        prodRating: 4.7
    },
    {
        id: 6,
        productName: 'Samsung Galaxy Note 20',
        productCode: 'SMN20',
        productPrice: 120000,
        proddescription: 'Phone',
        prodRating: 4.9
    },
]