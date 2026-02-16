import { UserRole } from '@Domains/users/type';
import { useAuth } from '@Hooks/auth';

import { Spin } from 'antd';

import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
  children: JSX.Element;
  roles?: UserRole[];
};

export function ProtectedRoute({ children, roles }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Spin spinning={isLoading} fullscreen />;

  if (!user) return <Navigate to="/login" replace />;

  if (roles && !roles.includes(user.fields.Role))
    return <Navigate to="/unauthorized" replace />;

  return children;
}
