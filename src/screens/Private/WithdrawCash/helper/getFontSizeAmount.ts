import { tokens } from '@/src/constants/tokens';

export const getFontSizeForAmount = (text: string = '') => {
  const maxFontSize = tokens.spacing[48] + 8; // 48 + 8 = 56
  const minFontSize = tokens.spacing[32] + 4; // 32 + 4 = 36
  const fullSizeLength = tokens.spacing[8]; // 8 digits full size
  const maxLength = tokens.spacing[14]; // start shrinking after 8, finish at 14 digits

  const length = text.length;

  if (length <= fullSizeLength) return maxFontSize;

  if (length >= maxLength) return minFontSize;

  const size =
    maxFontSize -
    ((length - fullSizeLength) / (maxLength - fullSizeLength)) *
      (maxFontSize - minFontSize);

  return size;
};
