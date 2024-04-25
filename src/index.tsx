import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ThemeProvider from './app/providers/ThemeProvider/ThemeProvider';
import App from './app/App';
// import './index.css';
import { setupStore } from './store/store';

const container = document.getElementById('root');
const root = createRoot(container!);

const store = setupStore();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
