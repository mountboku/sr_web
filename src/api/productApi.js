const PRODUCTS_URL = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/productList.json"
const Client_Url = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/client_company_list/client_list.json"
const clinet_base_url = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/client_company_list/client_logo/"
export const getProductData = async () => {
    try {
        const response = await fetch(`${PRODUCTS_URL}?v=${Date.now()}`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        return data

    } catch (error) {
        throw error
    }
}

export const getClientList = async () => {
    try {
        const response = await fetch(`${Client_Url}?v=${Date.now()}`);
        if (!response.ok) {
            throw new Error("Failed to fetch client list");
        }

        const data = await response.json();
        const updatedData = data.map((item) => {
            return {
                ...item,
                client_logo: clinet_base_url + item.client_logo
            }
        })
        return updatedData

    } catch (error) {
        throw error
    }
}

// module.exports = { getProductData }