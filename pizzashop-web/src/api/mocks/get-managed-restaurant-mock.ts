import { http, HttpResponse } from 'msw';

import { GetManagedRestaurantResponse } from '../get-managed-restaurant';

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'The best pizza in town',
    managerId: 'custom-manager-id',
    createdAt: new Date(),
    updatedAt: null,
  });
});
