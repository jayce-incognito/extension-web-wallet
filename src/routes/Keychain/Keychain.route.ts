import { lazy } from 'react';
import { IRouteProps } from 'src/routes';

const keychainRoute: IRouteProps = {
  path: '/keychain',
  exact: true,
  component: lazy(() => import('./Keychain')),
  name: 'Keychain',
  to: '/keychain',
};

export default keychainRoute;
