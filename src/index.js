import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import useStore from './store/useStore';
import { Provider } from 'mobx-react';

// const store = useStore();

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
    {/* <Provider store={store}>
      <App />
    </Provider> */}
  </React.StrictMode>
);
