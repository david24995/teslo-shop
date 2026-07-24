import { useQuery } from '@tanstack/react-query';

import { getProductAction } from '../actions/get-products.action';
import { useParams, useSearchParams } from 'react-router';

const useProducts = () => {
  // TODO: viene lógica
  const [searchParams, setSearchParams] = useSearchParams();
  const { gender = '' } = useParams();

  const currentPage = searchParams.get('page') || 1;
  const limit = searchParams.get('limit') || 9;
  const sizes = searchParams.get('sizes') || undefined;

  const offset = (+currentPage - 1) * +limit;

  const price = searchParams.get('price') || 'any';

  const query = searchParams.get('query') || '';

  let minPrice = undefined;
  let maxPrice = undefined;

  switch (price) {
    case 'any':
      break;
    case '0-50':
      minPrice = 0;
      maxPrice = 50;
      break;
    case '50-100':
      minPrice = 50;
      maxPrice = 100;
      break;
    case '100-200':
      minPrice = 100;
      maxPrice = 200;
      break;
    case '200+':
      minPrice = 200;
      maxPrice = undefined;
      break;
  }

  return useQuery({
    queryKey: [
      'products',
      { offset, limit, gender, sizes, minPrice, maxPrice, query },
    ],
    queryFn: () =>
      getProductAction({
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
        gender,
        sizes,
        minPrice,
        maxPrice,
        q: query,
      }),
    staleTime: 1000 * 60 * 5,
  });
};

export default useProducts;
