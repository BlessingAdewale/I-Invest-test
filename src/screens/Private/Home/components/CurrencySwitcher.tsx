import React from 'react'
import { Box } from '@/src/components/Box'
import { Tabs } from '@/src/components/Tabs';
import { currencyTabState } from '@/src/constants/recoil/recoilAtom';
import { useRecoilState } from 'recoil';

const USD_TAB = 'USD';
const NGN_TAB = 'NGN';

const CurrencySwitcher = () => {

  const [activeTab, setActiveTab] = useRecoilState(currencyTabState);

  return (
   <Box paddingX={4}>
    <Tabs
    tabs={[
    { key: USD_TAB, label: 'USD' },
    { key: NGN_TAB, label: 'NGN' },
    ]}
    activeTab={activeTab}
    setTab={setActiveTab}
/>
    </Box>
  )
}

export default CurrencySwitcher
