import { Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeSnackbar, selectSnackbar } from '../../../store/snackbar.slice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const SuccessSnackbar = () => {
   const dispatch = useDispatch();

   const snackbarState = useSelector(selectSnackbar);
   const isOpen = snackbarState.state !== 'CLOSED';

   function handleClose() {
      dispatch(closeSnackbar());
   }

   return (
      <Snackbar
         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
         open={isOpen}
         onClose={handleClose}
         autoHideDuration={1000}
         message={
            <div className="flex items-center">
               <CheckCircleIcon className="mr-2" />
               <span>{snackbarState.text}</span>
            </div>
         }
      />
   );
};
