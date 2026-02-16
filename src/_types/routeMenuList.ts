import { UserRole } from '@Domains/users/type';

export type RouteMenuItem = {
  name: string;
  path: string;
  icon?: string;
  protected?: boolean;
  roles?: UserRole[];
  children?: RouteMenuItem[];
};

export type RouteDefinitionItem = RouteMenuItem & {
  page: JSX.Element;
  protected?: boolean;
  children?: RouteDefinitionItem[];
};

export type RouterDefinition = {
  [key in 'Dashboard' /*| 'Route'*/]: RouteDefinitionItem;
};
