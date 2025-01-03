export function priceFormatter(price: number) {
  const formatted = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatted;
}
