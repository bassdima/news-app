import { limitCharacters } from '../../helpers';
import { CalendarIcon } from '../CalendarIcon';
import { ArrowLinkIcon } from '../ArrowLinkIcon';
import { LinkButton } from '../LinkButton';
import Highlighter from "react-highlight-words";
import moment from "moment";
import {
    Card,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";


interface NewsCardProps {
    image: string;
    date: string;
    title: string;
    description: string;
    id: number | string;
    searchWords: any;
}

export const NewsCard = ({ image, date, title, description, id, searchWords }: NewsCardProps) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt="news-image"
                height="217"
                image={image}
            />
            <CardContent sx={{ p: '25px' }}>
                <Typography sx={{ mb: "24px", fontSize: '14px', opacity: '0.6', color: '#363636', display: "flex" }}>
                    <CalendarIcon />
                    {moment(date).format('MMMM Do, YYYY')}
                </Typography>
                <Typography sx={{
                    mb: '20px',
                    fontSize: '24px',
                    lineHeight: '29px',
                    height: { xl: '115px', lg: '143px', md: '255px', sm: '145px', xs: '200px' },
                    color: '#363636'
                }}>
                    <Highlighter
                        searchWords={searchWords}
                        autoEscape={true}
                        textToHighlight={limitCharacters(title, 100)}
                    />
                </Typography>
                <Typography
                    sx={{
                        mb: '20px',
                        height: { xl: '70px', md: '142px', sm: '100px', lg: '100px' },
                        color: '#363636'
                    }}>
                    <Highlighter
                        searchWords={searchWords}
                        autoEscape={true}
                        textToHighlight={limitCharacters(description, 100)}
                    />
                </Typography>
                <LinkButton
                    linkTo={`/article-page/${id}`}
                    text='Read more'
                    childrenArrowRight={<ArrowLinkIcon fontSize='inherit' />}
                />
            </CardContent>
        </Card>
    );
}
