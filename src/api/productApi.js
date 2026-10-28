const PRODUCTS_URL = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/productList.json"

export const getProductData = async () => {
    try {
        const response = await fetch(`${PRODUCTS_URL}?v=${Date.now()}`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        console.log("API data:", data);
        return data

    } catch (error) {
        throw error
    }
}

// module.exports = { getProductData }