import { expect, test } from '@playwright/test';

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true })
  ).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Customer 10' })).toBeVisible();
});

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Próxima página' }).click();

  await expect(page.getByRole('cell', { name: 'Customer 11' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Customer 20' })).toBeVisible();

  await page.getByRole('button', { name: 'Última página' }).click();

  await expect(page.getByRole('cell', { name: 'Customer 51' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Customer 60' })).toBeVisible();

  await page.getByRole('button', { name: 'Página anterior' }).click();

  await expect(page.getByRole('cell', { name: 'Customer 41' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Customer 50' })).toBeVisible();

  await page.getByRole('button', { name: 'Primeira página' }).click();

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true })
  ).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Customer 10' })).toBeVisible();
});

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByPlaceholder('ID do pedido').fill('order-54');
  await page.getByRole('button', { name: 'Filtrar resultados' }).click();

  await expect(page.getByRole('cell', { name: 'order-54' })).toBeVisible();
});

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByPlaceholder('Nome do cliente').fill('Customer 38');
  await page.getByRole('button', { name: 'Filtrar resultados' }).click();

  await expect(page.getByRole('cell', { name: 'Customer 38' })).toBeVisible();

  await page.waitForTimeout(250);
});

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('combobox').click();
  await page.getByLabel('Entregue').click();

  await page.getByRole('button', { name: 'Filtrar resultados' }).click();

  await page.waitForLoadState('networkidle');

  await expect(page.getByRole('cell', { name: 'Entregue' })).toHaveCount(10);
});
