import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Header.module.scss';
import { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  children: ReactNode
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <div className="justify-between flex w-full">

          <div>
            <Typography className={styles.title} variant="h6" color="inherit" component="div">
              { title }
            </Typography>
          </div>

          <div>
            {children}
          </div>

        </div>
      </Toolbar>
    </AppBar>
  )
}

export { Header };
