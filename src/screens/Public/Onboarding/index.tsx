import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { AnimatedDot } from '@/src/components/AnimatedDot';
import { Box } from '@/src/components/Box';
import { Button } from '@/src/components/Button';
import SafeScreenView from '@/src/components/SafeAreaScreen';
import { Typography } from '@/src/components/Typography';
import { PADDING_HORIZONTAL } from '@/src/constants/globalStyles';
import { tokens } from '@/src/constants/tokens';

export default function Onboarding() {
  const { width, height } = useWindowDimensions();
  const offsetX = useSharedValue(0);

  const navigateToSignIn = () => {
    router.replace('/sign-in');
  };

  const navigateToCreateAccount = () => {
    router.replace('/sign-up');
  };
  const data = [
    {
      id: '1',
      title: 'Access predefined estate project projects.',
      uri: require('../../../../assets/images/onboarding/one.png'),
    },
    {
      id: '2',
      title: 'Bringing Transparency to Estate Finances.',
      uri: require('../../../../assets/images/onboarding/two.png'),
    },
    {
      id: '3',
      title: 'Easily track and manage estate projects',
      uri: require('../../../../assets/images/onboarding/three.png'),
    },
  ];
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      offsetX.value = event.contentOffset.x;
    },
  });

  return (
    <SafeScreenView>
      <Animated.ScrollView
        pagingEnabled
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        contentContainerStyle={styles.container}
      >
        {data.map(({ title, id, uri }) => {
          return (
            <Box
              key={id}
              alignItems="center"
              justifyContent="center"
              style={{ width }}
            >
              <Image
                source={uri}
                contentFit="contain"
                transition={200}
                style={{
                  width,
                  height: height / 2,
                }}
              />
              <Typography
                variant="headingSemiBold24"
                paddingTop={24}
                paddingX={16}
                textAlign="center"
              >
                {title}
              </Typography>
            </Box>
          );
        })}
      </Animated.ScrollView>
      <Box>
        <Box marginY={24} flexDirection="row" justifyContent="center">
          {data.map((item, index) => {
            return (
              <AnimatedDot key={item.id} offsetX={offsetX} index={index} />
            );
          })}
        </Box>
        <Box gap={16} paddingBottom={16} paddingX={PADDING_HORIZONTAL}>
          <Button
            title="Create Account"
            outlined
            onPress={navigateToCreateAccount}
          />
          <Button title="Sign In" onPress={navigateToSignIn} />
        </Box>
      </Box>
    </SafeScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: tokens.spacing['16'],
  },
});
