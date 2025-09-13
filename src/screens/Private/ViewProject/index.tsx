import { router, useNavigation } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import {
  BottomSheetWrapper,
  BottomSheetWrapperHandle,
} from '@/src/components/BottomSheetWrapper';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { ACTIVE_OPACITY, globalStyles } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';
import { useUser } from '@/src/hooks/useUser';

import { MakePaymentBottomSheet } from './components/MakePaymentBottomSheet';
import { PauseProjectBottomSheet } from './components/PauseProjectBottomSheet';
import { ViewProjectListHeader } from './components/ViewProjectListHeader';
import { EmptyTransactions } from '../AllTransactions/components/EmptyTransactions';
import {
  TransactionItem,
  TTransaction,
} from '../Home/components/TransactionItem';

export type TProjectViewData = {
  title: string;
  description: string;
  amount_that_has_been_contributed: string;
  amount_to_contribute: string;
  transaction: TTransaction[];
  project_paused: boolean;
};

export default function ViewProject() {
  const paymentSheetRef = useRef<BottomSheetWrapperHandle>(null);
  const pauseSheetRef = useRef<BottomSheetWrapperHandle>(null);

  const { isAdmin } = useUser();
  const admin = isAdmin;

  const data: TProjectViewData = {
    title: 'Security upgrade',
    description:
      'Improve security infrastructure, install cameras, gates, and lights.',
    amount_that_has_been_contributed: '$120',
    amount_to_contribute: '$6,550',
    transaction: [
      {
        id: 1,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
      {
        id: 2,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
      {
        id: 3,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
      {
        id: 4,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
      {
        id: 5,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
      {
        id: 6,
        first_name: 'Blessing',
        last_name: 'Adeleke',
        amount: '290',
        payment_type: 'credit',
        role: 'manager',
        profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
        date: '12-01-2024',
      },
    ],
    project_paused: false,
  };

  const numericContributed =
    parseFloat(
      data.amount_that_has_been_contributed.replace(/[^0-9.-]+/g, '')
    ) || 0;
  const numericGoal =
    parseFloat(data.amount_to_contribute.replace(/[^0-9.-]+/g, '')) || 1;
  const percentComplete = (numericContributed / numericGoal) * 100;

  const [isPaused, setPaused] = useState(false);

  const navigation = useNavigation();

  const handleContinue = useCallback(() => {
    setPaused(false);
  }, [setPaused]);

  const handleClosePauseSheet = useCallback(() => {
    pauseSheetRef.current?.dismiss();
  }, []);

  const handleOpenPaymentSheet = useCallback(() => {
    paymentSheetRef.current?.present();
  }, []);

  const handleSeeAllTransactionsPress = useCallback(() => {
    router.navigate('/view-project-transaction');
  }, []);

  const handleClosePaymentSheet = useCallback(() => {
    paymentSheetRef.current?.dismiss();
  }, []);

  const handlePauseOrContinuePress = useCallback(() => {
    if (isPaused) {
      handleContinue();
    } else {
      pauseSheetRef.current?.present();
    }
  }, [isPaused, handleContinue]);

  const confettiRef = useRef<LottieView>(null);

  useLayoutEffect(() => {
    setPaused(data.project_paused);
  }, [data.project_paused, setPaused]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:
        percentComplete >= 100
          ? undefined
          : () => {
              if (!admin) return null;
              return (
                <TouchableOpacity
                  activeOpacity={ACTIVE_OPACITY}
                  onPress={handlePauseOrContinuePress}
                  style={{ marginRight: tokens.spacing[16] }}
                >
                  <Typography variant="bodyMedium16" color="primary">
                    {isPaused ? 'Continue Project' : 'Pause Project'}
                  </Typography>
                </TouchableOpacity>
              );
            },
    });
  }, [
    navigation,
    admin,
    isPaused,
    percentComplete,
    handleContinue,
    handlePauseOrContinuePress,
  ]);

  return (
    <SafeScreenView
      edges={['bottom', 'right', 'left']}
      style={globalStyles.containerScroll}
    >
      {percentComplete >= 100 && (
        <LottieView
          ref={confettiRef}
          source={require('@/assets/lotties/confetti.json')}
          autoPlay
          loop={false}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 500,
            zIndex: -1,
          }}
        />
      )}

      <FlatList
        data={data.transaction}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TransactionItem item={item} />}
        ListEmptyComponent={<EmptyTransactions />}
        ListHeaderComponent={
          <ViewProjectListHeader
            data={data}
            admin={admin}
            isPaused={isPaused}
            percentComplete={percentComplete}
            onMakePayment={handleOpenPaymentSheet}
            onSeeAllTransactionsPress={handleSeeAllTransactionsPress}
          />
        }
        contentContainerStyle={{ paddingBottom: tokens.spacing[64] }}
      />

      <BottomSheetWrapper ref={paymentSheetRef}>
        <MakePaymentBottomSheet closeSheet={handleClosePaymentSheet} />
      </BottomSheetWrapper>

      <BottomSheetWrapper ref={pauseSheetRef}>
        <PauseProjectBottomSheet
          setPaused={setPaused}
          closeSheet={handleClosePauseSheet}
        />
      </BottomSheetWrapper>
    </SafeScreenView>
  );
}
