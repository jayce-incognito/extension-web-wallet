import { Dispatch } from 'redux';
import { IRootState } from 'src/redux/interface';
import { ACTION_FETCHING, ACTION_FETCHED } from './Preload.constant';
import { IPreloadReducer } from './Preload.reducer';
import { goServices, setConfig } from 'incognito-js/build/web/browser';
import { actionHandleLoadWallet, walletSelector } from 'src/routes/Wallet';
import { IWalletReducer } from 'src/routes/Wallet';
import { preloadSelector } from './Preload.selector';

export const actionFetching = () => ({
  type: ACTION_FETCHING,
});

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload,
});

export const actionFetch = () => async (
  dispatch: Dispatch,
  getState: () => IRootState
) => {
  const state: IRootState = getState();
  const preload: IPreloadReducer = preloadSelector(state);
  const wallet: IWalletReducer = walletSelector(state);
  const { configs } = preload;
  try {
    await dispatch(actionFetching());
    await setConfig(configs);
    await goServices.implementGoMethodUseWasm();
    await actionHandleLoadWallet()(dispatch, getState);
  } catch (error) {
    console.debug(error);
  } finally {
    dispatch(actionFetched({}));
  }
};
