import React from 'react';

import { TextInput } from '@/src/components/TextInput';
import { tokens } from '@/src/constants/tokens';

import { formatCurrency } from '../helpers/formatCurrency';
import { getFontSizeForAmount } from '../helpers/getFontSizeForAmount';

type TCurrencyInputProps = {
  value: string;
  onChange: (formatted: string) => void;
};

export const CurrencyInput = ({ value, onChange }: TCurrencyInputProps) => {
  const handleChangeText = (text: string) => {
    const sanitized = text.replace(/[^0-9.]/g, '');

    // Avoid double-dot edge case
    const parts = sanitized.split('.');
    const limited =
      parts.length > 2 ? `${parts[0]}.${parts.slice(1).join('')}` : sanitized;

    onChange(limited); // pass raw or lightly formatted value for now
  };

  return (
    <TextInput
      value={formatCurrency(value)}
      maxLength={16}
      onChangeText={handleChangeText}
      placeholder="0"
      disableBorder
      placeholderTextColor={tokens.colors.gray}
      height={74}
      keyboardType="numeric"
      containerStyle={{ paddingHorizontal: 0 }}
      style={{
        fontFamily: 'InterTight-Medium',
        fontSize: getFontSizeForAmount(value),
        lineHeight: getFontSizeForAmount(value) + 8,
        color: tokens.colors.black,
      }}
    />
  );
};
