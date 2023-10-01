/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import ScreensName from '@constant/screensName';
import store from '@app/reduxs/index';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params?: unknown): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};

export const navigateAndSimpleReset = (name: string, index = 0): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      }),
    );
  }
};

export const navigateAndCheckAuth = (name: string, params?: never): void => {
  if (!store.getState()?.todo?.auth?.isLogin) {
    navigate(ScreensName.LOGIN_SCREEN);
  } else {
    navigate(name as never, params as never);
  }
};

export const getCurrentScreenName = () => navigationRef?.getState()?.routes[navigationRef.getState().index]?.name;

export const resetScreen = (
  name: string,
  params: Record<string, unknown> | undefined = undefined,
): void => {
  if (navigationRef.isReady()) {
    const currentScreen = getCurrentScreenName();
    if (currentScreen === name) {
      navigationRef?.dispatch(StackActions.replace(name, params));
    } else {
      navigate(name as never, params as never);
    }
  }
};
