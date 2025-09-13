export const formatAmountParts = (
  amount: string
): {
  mainPart: string;
  decimalPart: string;
  isZero: boolean;
} => {
  const numericAmount = parseFloat(amount.replace(/[^0-9.-]+/g, '')) || 0;
  const isZero = numericAmount === 0;
  const display = isZero ? '$0' : amount;

  const hasDecimal = display.includes('.');
  const [mainPart, decimalPart] = hasDecimal
    ? display.split('.')
    : [display, ''];

  return { mainPart, decimalPart, isZero };
};
