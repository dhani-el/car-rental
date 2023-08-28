import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import App from './jsx/App.tsx';
import { Store } from './Store/store.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
