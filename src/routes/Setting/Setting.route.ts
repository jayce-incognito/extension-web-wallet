import { lazy } from 'react';
import { IRouteProps } from 'src/routes';

const settingRoute: IRouteProps = {
  path: '/setting',
  exact: true,
  component: lazy(() => import('./Setting')),
  name: 'Setting',
  to: '/setting',
};

export const route = '/setting';

export default settingRoute;
