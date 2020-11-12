import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'recompose';
import { actionFetch } from './Home.actions';
import { IHomeReducer } from './Home.reducer';
import { homeSelector } from './Home.selector';
import { SpinnerContainer } from 'src/components';

interface IProps {}

const enhance = (WrappedComponent: React.FunctionComponent) => (
  props: IProps
) => {
  const dispatch = useDispatch();
  const { isFetching }: IHomeReducer = useSelector(homeSelector);
  const handleGetHomeConfigs = async () => {
    try {
      dispatch(actionFetch());
    } catch (error) {
      console.debug(`ERROR`, error);
    }
  };
  React.useEffect(() => {
    handleGetHomeConfigs();
  }, []);

  // if (isFetching) {
  //   return <SpinnerContainer animation={'grow'} />;
  // }
  return <WrappedComponent {...props} />;
};

export default compose<IProps, any>(enhance);
