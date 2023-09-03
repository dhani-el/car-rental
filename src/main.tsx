import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import App from './jsx/App.tsx';
import { Store } from './Store/store.ts';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <QueryClientProvider client={queryClient} >
          <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
