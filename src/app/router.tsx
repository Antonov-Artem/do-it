import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages/home';
import { ErrorPage } from 'pages/error';

export const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
]);
