import React, { useEffect, useState } from 'react';
import './App.css';
import ProductSelection from './components/ProductSelection';
import VariationDropdown from './components/VariationDropdown';
import CompositeCodeDisplay from './components/CompositeCodeDisplay';
import productData from './productData.json'

interface Product {
  code: string;
  description: string;
  varieties: string[];
}

interface VarietyOption {
  code: string;
  description: string;
}

interface Variety {
  code: string;
  description: string;
  options: VarietyOption[];
}

const initialProduct: Product = {
  code: '',
  description: 'Select a Product',
  varieties: [],
}

function App() {
  const [products, setProducts] = useState<Product[]>(productData.items);
  const [selectedProduct, setSelectedProduct] = useState<Product>(initialProduct);
  const [selectedVarieties, setSelectedVarieties] = useState<string[]>([]);
  const [compositeCode, setCompositeCode] = useState<string>('');

  const varietyData: Variety[] = productData.varieties;

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const productCode = event.target.value;
    const selectedProduct = products.find((product) => product.code === productCode) || initialProduct;
    setSelectedProduct(selectedProduct);
    setSelectedVarieties([]);
    setCompositeCode('');
  };

  const handleVarietyChange = (varietyCode: string, optionCode: string) => {
    const index = selectedVarieties.findIndex((v) => v.startsWith(varietyCode));
    if (index === -1) {
      setSelectedVarieties([...selectedVarieties, `${varietyCode}.${optionCode}`]);
    } else {
      selectedVarieties[index] = `${varietyCode}.${optionCode}`;
      setSelectedVarieties([...selectedVarieties]);
    }
  };

  useEffect(() => {
    const productCode = selectedProduct.code;
    const codeString = selectedVarieties.length > 0 ? `.${selectedVarieties.join('.')}` : '';
    setCompositeCode(`${productCode}${codeString}`);
  }, [selectedProduct, selectedVarieties]);

  return (
    <div className="App">
      <h1>Product Selection Form</h1>
      <div className="ProductSelection">
        <ProductSelection
          products={products}
          selectedProduct={selectedProduct}
          handleProductChange={handleProductChange}
          />
      </div>

      <div className="VariationDropdown">
        {selectedProduct.varieties.map((variety) => (
          <VariationDropdown
            key={variety}
            variety={variety}
            varietyData={varietyData.find((v) => v.code === variety) || { code: '', description: '', options: [] }}
            handleVarietyChange={handleVarietyChange}
          />
        ))}
      </div>

      <div className="CompositeCodeDisplay">
        <CompositeCodeDisplay compositeCode={compositeCode} generateCompositeCode={() => {}} />
      </div>
    </div>
  );
}

export default App;
