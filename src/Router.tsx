import { createBrowserRouter } from 'react-router-dom';
import Layout from '@components/layout';
import { Dm, Friend, Login, Server, Store } from './pages';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/service/friend',
        element: <Friend />,
      },
      {
        path: '/service/store',
        element: <Store />,
      },
      {
        path: '/service/dm/:id',
        element: <Dm />,
      },
      {
        path: '/server/:name',
        element: <Server />,
      },
    ],
  },
]);

export default Router;
