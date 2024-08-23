import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { BEATSTARS_TRENDS_APP, MAIN_ROUTES } from '../../config/app.constant';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import styles from './Layout.module.scss';
import { Intro } from '../intro/intro';

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
            <Intro/>
            <main className={styles['main']}>{props.children}</main>
         </Container>
         <Footer />
      </div>
   );
};

export { Layout };
