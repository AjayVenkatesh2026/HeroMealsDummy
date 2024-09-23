import {useCallback, useState} from 'react';

import {dummyProducts} from 'src/constants/dummyData';
import type {IProduct} from 'src/types/ordering';

const useGetProducts = ({restaurantId}: {restaurantId: string}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(
        dummyProducts.map(prd => ({
          ...prd,
          id: `${restaurantId}-${prd.id}`,
          restaurant_id: restaurantId,
        })),
      );
      setLoading(false);
    }, 2000);
  }, [restaurantId]);

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
            id: `${restaurantId}-prd-${prevProducts.length + idx + 1}`,
          }));

          return [...prevProducts, ...newProducts];
        }

        return prevProducts;
      });
      setLoading(false);
    }, 2000);
  }, [products.length, restaurantId]);

  return {
    products,
    loading,
    getProducts,
    getMoreProducts,
  };
};

export default useGetProducts;
