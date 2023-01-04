import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './shared/components/layout/Layout';
import theme from './shared/config/theme';
import { ThemeProvider } from '@mui/material';
import { Airbit } from './airbit/Airbit';
import Beatstars from './beatstars/Beatstars';
import React from 'react';

const App = () => {
   return (
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
            </Layout>
         </ThemeProvider>
   );
};

export { App };
