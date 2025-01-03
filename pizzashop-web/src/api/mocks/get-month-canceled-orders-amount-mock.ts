import { http, HttpResponse } from 'msw';

import { GetMonthCanceledOrdersAmountResponse } from '../get-canceled-orders-amount';

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 13,
    diffFromLastMonth: 7,
  });
});
