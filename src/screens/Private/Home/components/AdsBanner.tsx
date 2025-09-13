import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';

import { Box } from '@/src/components/Box';
import { tokens } from '@/src/constants/tokens';

import { AdsBannerCard, TAdsBannerCardProps } from './AdsBannerCard';

type AdWithColor = TAdsBannerCardProps & {
  backgroundColor: 'primary' | 'black';
};

const assignColors = (ads: TAdsBannerCardProps[]): AdWithColor[] => {
  return ads.map((ad, index) => ({
    ...ad,
    backgroundColor: index % 2 === 0 ? 'primary' : 'black',
  }));
};

export const AdsBanner = () => {
  const flatListRef = useRef<FlatList<AdWithColor>>(null);
  //   const [ads, setAds] = useState<AdWithColor[]>(assignColors(initialAds));
  const [ads] = useState<AdWithColor[]>(assignColors([]));

  const [currentIndex, setCurrentIndex] = useState(0);

  //   const handleClose = useCallback((id: string) => {
  //     setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
  //     setCurrentIndex(0);
  //   }, []);

  useEffect(() => {
    if (ads.length <= 1) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % ads.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, ads]);

  const renderItem = useCallback(
    ({ item }: { item: AdWithColor }) => (
      <Box
        style={{ borderRadius: tokens.borderRadius[16], overflow: 'hidden' }}
      >
        <AdsBannerCard
          {...item}
          backgroundColor={item.backgroundColor}
          //   onClose={handleClose}
          totalAdsCount={ads.length}
        />
      </Box>
    ),
    [ads.length]
  );

  return (
    <FlatList
      ref={flatListRef}
      data={ads}
      // keyExtractor={(item) => item}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <Box paddingX={16} />}
    />
  );
};

export default memo(AdsBanner);
