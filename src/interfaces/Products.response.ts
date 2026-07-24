import type { Product } from './Product.interface';

export interface ProductResponse {
  count: number;
  pages: number;
  products: Product[];
}
