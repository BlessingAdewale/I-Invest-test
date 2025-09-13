import { StyleSheet } from 'react-native'
import React from 'react'
import { Box } from '@/src/components/Box'
import { tokens } from '@/src/constants/tokens'
import { Typography } from '@/src/components/Typography'
import { MarketIcon } from '@/assets/svgs/MarketIcon'

const MarketInformation = () => {
  return (
<Box 
marginLeft={6}
marginRight={10}
marginBottom={36}
flexDirection='row' alignItems='center' 
style={{
    backgroundColor: tokens.colors.pinkBackground,
    borderRadius: tokens.borderRadius[12]
}} >
    <Box
    paddingLeft={12}
    >
     < MarketIcon />
    </Box>

<Box 
paddingY={8}
paddingLeft={8}
>

    <Typography
    variant='sourceSansBold13'
    >
        Market Closed:
    </Typography>
    <Typography
    variant='tiktokBodyRegular12'
    >
    Market opens between 12:30 pm - 7pm WAT
    </Typography>
</Box>
</Box>
  )
}

export default MarketInformation

const styles = StyleSheet.create({})