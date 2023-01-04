import { CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <CircularProgress className="m-4" />
    </div>
  );
}

export { Spinner };
