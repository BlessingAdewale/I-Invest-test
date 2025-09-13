export const formatCurrency = (text: string, maxDecimals = 2): string => {
  const cleaned = text.replace(/[^\d.]/g, '');

  if (cleaned === '') return ''; // ⬅️ Allow empty input

  const parts = cleaned.split('.');
  if (parts.length > 2) return text;

  const integerPart = parts[0];
  const decimalPart = parts[1] ?? '';

  const formattedInt = Number(integerPart || '0').toLocaleString('en-NG', {
    useGrouping: true,
    maximumFractionDigits: 0,
  });

  return decimalPart.length
    ? `${formattedInt}.${decimalPart.slice(0, maxDecimals)}`
    : formattedInt;
};
