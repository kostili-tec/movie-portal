import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ThemeProvider';
import { setupStore } from './store/store';
import ErrorBoundary from './app/providers/ThemeProvider/ErrorBoundary/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container!);

const store = setupStore();

root.render(
  <Provider store={store}>
    <HashRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </HashRouter>
  </Provider>
);
