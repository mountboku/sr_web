import {
  createContext,
  useContext,
  useState,
} from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

interface ProductProviderProps {
  children: any;
}

export const ProductProvider = ({
  children,
}: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProducts must be used inside ProductProvider"
    );
  }

  return context;
};