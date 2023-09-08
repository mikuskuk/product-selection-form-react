import React from "react";

interface Product {
    code: string;
    description: string;
}

interface ProductSelectionProps {
    products: Product[];
    selectedProduct: Product | undefined;
    handleProductChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ProductSelection: React.FC<ProductSelectionProps> = ({
    products,
    selectedProduct,
    handleProductChange,
}) => {
    return (
        <div>
            <label htmlFor="product">Select a Product:</label>
            <select id="product" onChange={handleProductChange} value={selectedProduct?.code || ''}>
                <option value="" disabled>
                    Select a Product
                </option>
                {products.map((product) => (
                    <option key={product.code} value={product.code}>
                        {product.description}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProductSelection;