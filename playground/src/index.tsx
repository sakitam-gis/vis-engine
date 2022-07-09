// import React, { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 在开发模式的严格模式下函数式组件会执行两次 render，可以防止代码内无意执行的副作用 bug @link https://github.com/facebook/react/issues/17786
root.render(<App />);
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );
