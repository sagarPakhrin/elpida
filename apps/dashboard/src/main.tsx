import { ApolloProvider } from '@apollo/client';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { client } from './apollo/client';
import App from './app/app';
import { UiProvider } from './context/ui-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <UiProvider>
          <App />
        </UiProvider>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
