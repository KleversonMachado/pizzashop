import { http, HttpResponse } from 'msw';

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details';

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '0123456789',
    },
    createdAt: new Date().toISOString(),
    status: 'delivered',
    totalInCents: 81222 * 2 + 16990 * 3,
    orderItems: [
      {
        id: 'custom-product-id-1',
        product: { name: 'Pizza Margherita' },
        priceInCents: 81222,
        quantity: 2,
      },
      {
        id: 'custom-product-id-2',
        product: { name: 'Coca-Cola 1.5L' },
        priceInCents: 16990,
        quantity: 3,
      },
    ],
  });
});
