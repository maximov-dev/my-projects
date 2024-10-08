import React from 'react';
import styles from './Footer.module.scss';
import { Container } from '@mui/material';

const Footer = () => {
   const date = new Date();
   
   return (
      <footer className={styles['footer']}>
         <Container className="h-full" maxWidth="lg">
            <div className="flex h-full text-sm font-light text-white justify-around items-center flex-col">
               <div className="text-center">
                  <span>
                     If you have any questions or suggestions please contact me:&nbsp;
                     <a href="mailto:ifeelzbeatz@gmail.com">
                        iFeelzBeatz@gmail.com
                     </a>
                  </span>
               </div>
               <div className="text-center">
                  <a href={'/'}>© {date.getFullYear()} BeatStars Search Trends</a>
               </div>
            </div>
         </Container>
      </footer>
   );
};

export { Footer };
