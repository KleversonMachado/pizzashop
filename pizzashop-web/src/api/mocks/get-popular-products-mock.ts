import { http, HttpResponse } from 'msw';

import { GetPopularProductsResponse } from '../get-popular-products';

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { amount: 10, product: 'Coca-Cola' },
    { amount: 5, product: 'Fanta' },
    { amount: 3, product: 'Guaraná' },
    { amount: 2, product: 'Sprite' },
    { amount: 1, product: 'Pepsi' },
  ]);
});
