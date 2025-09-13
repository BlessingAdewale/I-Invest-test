import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Typography } from './Typography';
import { globalStyles } from '../constants/globalStyles';
import { tokens } from '../constants/tokens';

type TCopyTextProps = {
  textToCopy: string;
};

const CopyText = ({ textToCopy }: TCopyTextProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await Clipboard.setStringAsync(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // show "Copied" for 2s
  };

  return (
    <TouchableOpacity style={globalStyles.rowCenter} onPress={handleCopy}>
      {copied && (
        <Typography variant="bodyRegular14" color="primary" paddingRight={4}>
          Copied
        </Typography>
      )}
      <Feather name="copy" size={20} color={tokens.colors.darkGray} />
    </TouchableOpacity>
  );
};

export default CopyText;
