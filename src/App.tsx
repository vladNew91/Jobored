import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { LayoutComponent } from "./components";
import { queryClient, store } from './modules';
import { QueryClientProvider } from 'react-query';
import { FavoritesPage, HomePage, JobPage } from './pages';
import { ThemeProvider } from '@mui/material';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router >
            <LayoutComponent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/:jobId" element={<JobPage />} />
              </Routes>
            </LayoutComponent>
          </Router>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
