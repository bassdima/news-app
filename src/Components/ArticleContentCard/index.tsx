import { Paper, Typography } from '@mui/material';

interface ArticleContentCardProps {
    title: string,
    summary: string,
    children: JSX.Element
}

export const ArticleContentCard = ({ title, summary, children }: ArticleContentCardProps) => {
    return (
        <Paper sx={{
            minWidth: '320px',
            maxWidth: '1260px',
            minHeight: '500px',
            position: 'absolute',
            top: '140px',
            padding: '35px 75px 50px',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Typography sx={{
                mb: '50px',
                fontSize: '24px',
                lineHeight: '29px',
                textAlign: 'center',
                color: '#363636'
            }}>
                {title}
            </Typography>
            <Typography sx={{
                mb: '20px',
                fontSize: '18px',
                lineHeight: '27px',
                minWidth: '100%',
                minHeight: '100%',
                flex: 'auto'
            }}>
                {summary}
            </Typography>
            {children}
        </Paper>
    )
}
