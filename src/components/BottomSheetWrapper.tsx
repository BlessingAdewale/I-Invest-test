import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import { BackdropPressBehavior } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import React, { forwardRef, useCallback, useImperativeHandle } from 'react';

type TBottomSheetWrapperProps = BottomSheetModalProps & {
  children: React.ReactNode;
  backdropPressBehavior?: BackdropPressBehavior;
  enablePanDownToClose?: boolean;
  enableDynamicSizing?: boolean;
};

export type BottomSheetWrapperHandle = {
  present: () => void;
  dismiss: () => void;
};

export const BottomSheetWrapper = forwardRef<
  BottomSheetWrapperHandle,
  TBottomSheetWrapperProps
>(
  (
    {
      children,
      backdropPressBehavior,
      enablePanDownToClose = true,
      enableDynamicSizing = true,
      snapPoints,
    },
    ref
  ) => {
    // 2. Create a backdrop with slight darkening (opacity 0.7)
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.7}
          pressBehavior={backdropPressBehavior}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          enableTouchThrough={false}
        />
      ),
      [backdropPressBehavior]
    );

    // 3. Hold a ref to the BottomSheetModal instance
    const modalRef = React.useRef<BottomSheetModal>(null);

    // 4. Expose imperative methods via forwardRef
    useImperativeHandle(ref, () => ({
      present: () => {
        modalRef.current?.present();
      },
      dismiss: () => {
        modalRef.current?.dismiss();
      },
    }));

    return (
      <BottomSheetModal
        ref={modalRef}
        index={0}
        enablePanDownToClose={enablePanDownToClose}
        enableDynamicSizing={enableDynamicSizing}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        keyboardBehavior="fillParent"
        keyboardBlurBehavior="restore" // ensure keyboard doesn’t push the sheet unpredictably :contentReference[oaicite:2]{index=2}
      >
        {children}
      </BottomSheetModal>
    );
  }
);

BottomSheetWrapper.displayName = 'BottomSheetWrapper';
