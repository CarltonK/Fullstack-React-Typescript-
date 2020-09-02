import {Product, products} from './product'

// CREATE
export const createProduct = async (product: Product): Promise<void> => {
    products.push(product)
}

// READ
export const getAllProducts = async (): Promise<Product[]> => {
    return products
}

// UPDATE
export const updateProducts = async (product: Product): Promise<void> => {
    const index = products.findIndex(i => i.id === product['id'])
    if (index > 0 || index == 0)
        {
            products[index]['productName'] = product['productName']
            products[index]['productPrice'] = product['productPrice']
            products[index]['prodRating'] = product['prodRating']
        }
}

// DELETE
export const deleteProducts = async (id: number): Promise<void> => {
    const index = products.findIndex(d => d.id === id)
    if (index > 0 || index == 0)
        products.splice(index, 1)
}