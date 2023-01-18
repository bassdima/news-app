import { CircularProgress, Box } from '@mui/material';

export const CircularIndeterminate = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      mt: 25,
      minWidth: '100%',
      minHeight: '100%',
    }}>
      <CircularProgress
        color="secondary"
        size={100}
      />
    </Box>
  );
}