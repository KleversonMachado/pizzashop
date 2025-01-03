import { expect, test } from '@playwright/test';

test('update profile successfuly', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Pizza Shop' }).click();
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click();

  await page.getByLabel('Nome').fill('Athletico Pizza');
  await page.getByLabel('Descrição').fill('Another Description');

  await page.getByRole('button', { name: 'Salvar' }).click();
  await page.waitForLoadState('networkidle');
  const toast = page.getByText('Perfil atualizado com sucesso!');

  await expect(toast).toBeVisible();

  await page.getByRole('button', { name: 'Close' }).click();
  const newName = page.getByRole('button', { name: 'Athletico Pizza' });

  await expect(newName).toBeVisible();
});

test('error on update profile', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Pizza Shop' }).click();
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click();

  await page.getByLabel('Nome').fill('Invalid Name');
  await page.getByLabel('Descrição').fill('Invalid Description');

  await page.getByRole('button', { name: 'Salvar' }).click();
  await page.waitForLoadState('networkidle');
  const toast = page.getByText('Falha ao atualizar perfil, tente novamente!');

  await expect(toast).toBeVisible();

  await page.getByRole('button', { name: 'Close' }).click();
  const currentName = page.getByRole('button', { name: 'Pizza Shop' });

  await expect(currentName).toBeVisible();
});
