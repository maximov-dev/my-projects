import React from 'react';
import styles from './Footer.module.scss'
import { Container } from '@mui/material';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className="flex h-full text-sm font-light text-white justify-around items-center flex-col" maxWidth="lg">
        <div className="text-center">
          <span>
            If you have any questions or suggestions please contact me:
          <a href="mailto:ifeelzbeatz@gmail.com">iFeelzBeatz@gmail.com</a>
        </span>
        </div>
        <div className="text-center">
          <a href={''}>
            © 2021 BeatStars Search Trends
          </a>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
