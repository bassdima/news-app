import { Link } from 'react-router-dom';
import { Box, Typography } from "@mui/material";

interface LinkButtonProps {
    linkTo: string,
    text: string,
    childrenArrowRight?: JSX.Element,
    childrenArrowLeft?: JSX.Element
}

export const LinkButton = ({ linkTo, text, childrenArrowLeft, childrenArrowRight }: LinkButtonProps) => {
    return (
        <Link to={linkTo} style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {childrenArrowLeft}
                <Typography sx={{ fontWeight: '700', color: '#363636' }}>
                    {text}
                </Typography>
                {childrenArrowRight}
            </Box>
        </Link>
    );
}
