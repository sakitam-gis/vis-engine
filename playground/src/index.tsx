// import React, { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Mapbox from './Mapbox';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/mapbox',
    element: <Mapbox />,
  },
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 在开发模式的严格模式下函数式组件会执行两次 render，可以防止代码内无意执行的副作用 bug @link https://github.com/facebook/react/issues/17786
root.render(<RouterProvider router={router} />);
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );
