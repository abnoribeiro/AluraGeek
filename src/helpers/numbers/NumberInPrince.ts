export const numberInPrince = (number: number): string => {
  const formattedNumber = number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formattedNumber.toString();
};
