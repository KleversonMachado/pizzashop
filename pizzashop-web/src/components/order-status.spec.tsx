import { render } from '@testing-library/react';

import { OrderStatus } from './order-status';

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />);

    // wrapper.debug(); // Função mostra todo o HTML gerado pelo componente

    const statusText = wrapper.getByText('Pendente');
    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeVisible();
    expect(badgeElement).toHaveClass('bg-yellow-500');
  });

  it('should display the right text when order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />);

    const statusText = wrapper.getByText('Cancelado');
    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeVisible();
    expect(badgeElement).toHaveClass('bg-rose-500');
  });

  it('should display the right text when order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />);

    const statusText = wrapper.getByText('Em entrega');
    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeVisible();
    expect(badgeElement).toHaveClass('bg-purple-500');
  });

  it('should display the right text when order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />);

    const statusText = wrapper.getByText('Em preparo');
    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeVisible();
    expect(badgeElement).toHaveClass('bg-blue-500');
  });

  it('should display the right text when order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />);

    const statusText = wrapper.getByText('Entregue');
    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeVisible();
    expect(badgeElement).toHaveClass('bg-emerald-500');
  });
});
