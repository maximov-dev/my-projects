import React, { ReactNode } from 'react';
import { BEATSTARS_TRENDS_APP, MAIN_ROUTES } from '../../../config/app.constant';
import styles from './Layout.module.scss';
import { Meta } from '../meta/Meta';
import { Header } from '../header/Header';
import Link from 'next/link';
import { Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
import { Footer } from '../footer/Footer';

interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  const router = useRouter()
  const currentRoute = router.pathname
  const { title, description } = BEATSTARS_TRENDS_APP;
  const isActive = (href: string) => {
    return currentRoute === href ? 'active' : '';
  };

  const links = MAIN_ROUTES.map((route) => {
    const active = isActive(route.href);

    return (<Link key={route.className} href={route.href} passHref>
      <Button className={`${styles[route.className]} ${styles[active]}`}>
        { route.title }
      </Button>
    </Link>)
  });

  return (
    <div className={styles.container}>
      <Meta title={title} description={description}/>
      <Header title={title}>
        { links }
      </Header>
      <Container className="h-full" maxWidth="lg">
        <main className={styles.main}>
          { props.children }
        </main>
      </Container>
      <Footer/>
    </div>);
};

export { Layout };
