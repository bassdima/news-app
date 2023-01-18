import { CircularIndeterminate } from '../../Components/CircularIndeterminate';
import { Typography, Box } from '@mui/material';

interface ProgressInfoProps {
    loadingInfo: boolean,
    errorInfo: any
}

export const ProgressInformation = ({ loadingInfo, errorInfo }: ProgressInfoProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {loadingInfo && <CircularIndeterminate />}
            {errorInfo &&
                <Typography variant="h2" gutterBottom>
                    Error. Please try again later.
                </Typography>
            }
        </Box>
    );
}
