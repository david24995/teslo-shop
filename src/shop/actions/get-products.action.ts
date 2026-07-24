import { tesloApi } from '@/api/tesloApi';
import type { ProductResponse } from '@/interfaces/Products.response';

const BASE_URL = import.meta.env.VITE_API_URL;

type Options = {
  limit?: number | string;
  offset?: number | string;
  gender?: string;
  sizes?: string;
  minPrice?: number;
  maxPrice?: number;
  q?: string;
};

export const getProductAction = async (options: Options) => {
  const { limit, offset, gender, sizes, minPrice, maxPrice, q } = options;

  const { data } = await tesloApi.get<ProductResponse>('/products', {
    params: {
      limit,
      offset,
      gender,
      sizes,
      minPrice,
      maxPrice,
      q,
    },
  });

  const productsWithUrl = data.products.map((p) => ({
    ...p,
    images: p.images.map((i) => `${BASE_URL}/files/product/${i}`),
  }));

  return {
    ...data,
    products: productsWithUrl,
  };
};
