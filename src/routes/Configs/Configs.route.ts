import { lazy } from 'react';
import { IRouteProps } from 'src/routes';

const configsRoute: IRouteProps = {
  path: '/configs',
  exact: true,
  component: lazy(() => import('./Configs')),
  name: 'Configs',
  to: '/configs',
};

export default configsRoute;
