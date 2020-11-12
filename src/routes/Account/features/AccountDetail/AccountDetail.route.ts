import { lazy } from 'react';
import { IRouteProps } from 'src/routes';

const accountDetailRoute: IRouteProps = {
  path: '/account-detail',
  exact: true,
  component: lazy(() => import('./AccountDetail')),
  name: 'Account Detail',
  to: '/account-detail',
};

export default accountDetailRoute;
