import {useCallback, useState} from 'react';

import {dummyProducts} from 'src/constants/dummyData';
import type {IProduct} from 'src/types/ordering';

const useGetProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 2000);
  }, []);

  const getMoreProducts = useCallback(() => {
    if (products.length >= 10) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setProducts((prevProducts = []) => {
        if (prevProducts.length < 10) {
          const newProducts = prevProducts.slice(0, 3).map((res, idx) => ({
            ...res,
            id: `prd-${prevProducts.length + idx + 1}`,
          }));

          return [...prevProducts, ...newProducts];
        }

        return prevProducts;
      });
      setLoading(false);
    }, 2000);
  }, [products.length]);

  return {
    products,
    loading,
    getProducts,
    getMoreProducts,
  };
};

export default useGetProducts;
