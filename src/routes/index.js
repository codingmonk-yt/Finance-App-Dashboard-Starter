import { Navigate, useRoutes } from 'react-router-dom';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
