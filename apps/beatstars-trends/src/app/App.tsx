import './App.scss';

import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Airbit } from './airbit/Airbit';
import Beatstars from './beatstars/Beatstars';
import { Layout } from './shared/components/layout/Layout';
import { SuccessSnackbar } from './shared/components/snackbar/success-snackbar';
import theme from './shared/config/theme';
import { store } from './store/store';

const App = () => {
   return (
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <Layout>
               <Routes>
                  <Route path="/beatstars" element={<Beatstars />} />
                  <Route path="/airbit" element={<Airbit />} />
                  <Route
                     path="*"
                     element={<Navigate to="/beatstars" replace />}
                  />
               </Routes>
               <SuccessSnackbar />
            </Layout>
         </ThemeProvider>
      </Provider>
   );
};

export { App };
