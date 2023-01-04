import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Header } from '../header/Header';
import { Container } from '@mui/material';
import { Footer } from '../footer/Footer';
import { BEATSTARS_TRENDS_APP, MAIN_ROUTES } from '../../config/app.constant';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
   children?: ReactNode;
}

const Layout = (props: LayoutProps) => {
   const { title, description } = BEATSTARS_TRENDS_APP;

   const links = MAIN_ROUTES.map((route) => {
      return (
         <NavLink
            className={({ isActive }) => {
              const active = isActive ? 'active' : '';

              return `${styles['center']} ${styles[route.className]} ${
                styles[active]
              }`
            }
            }
            key={route.className}
            to={`/${route.href}`}
         >
            {route.title}
         </NavLink>
      );
   });

   return (
      <div className={styles['container']}>
         <Header title={title}>{links}</Header>
         <Container className="h-full" maxWidth="lg">
            <main className={styles['main']}>{props.children}</main>
         </Container>
         <Footer />
      </div>
   );
};

export { Layout };
