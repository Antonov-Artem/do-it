import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'app/store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider></ChakraProvider>
  </Provider>
);
