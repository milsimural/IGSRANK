import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
const cardData = [
    {
        img: 'https://picsum.photos/800/450?random=1',
        tag: 'Engineering',
        title: 'Revolutionizing software development with cutting-edge tools',
        description: 'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
        authors: [
            { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
            { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
        ],
    },
    {
        img: 'https://picsum.photos/800/450?random=2',
        tag: 'Product',
        title: 'Innovative product features that drive success',
        description: 'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
        authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=3',
        tag: 'Design',
        title: 'Designing for the future: trends and insights',
        description: 'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
        authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=4',
        tag: 'Company',
        title: "Our company's journey: milestones and achievements",
        description: "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
        authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=45',
        tag: 'Engineering',
        title: 'Pioneering sustainable engineering solutions',
        description: "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
        authors: [
            { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
            { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
        ],
    },
    {
        img: 'https://picsum.photos/800/450?random=6',
        tag: 'Product',
        title: 'Maximizing efficiency with our latest product updates',
        description: 'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
        authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
    },
];
const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));
const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});
const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});
function Author({ authors }) {
    return (React.createElement(Box, { sx: {
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
        } },
        React.createElement(Box, { sx: { display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' } },
            React.createElement(AvatarGroup, { max: 3 }, authors.map((author, index) => (React.createElement(Avatar
            // eslint-disable-next-line react/no-array-index-key
            , { 
                // eslint-disable-next-line react/no-array-index-key
                key: index, alt: author.name, src: author.avatar, sx: { width: 24, height: 24 } })))),
            React.createElement(Typography, { variant: "caption" }, authors.map((author) => author.name).join(', '))),
        React.createElement(Typography, { variant: "caption" }, "July 14, 2021")));
}
export function Search() {
    return (React.createElement(FormControl, { sx: { width: { xs: '100%', md: '25ch' } }, variant: "outlined" },
        React.createElement(OutlinedInput, { size: "small", id: "search", placeholder: "Search\u2026", sx: { flexGrow: 1 }, startAdornment: React.createElement(InputAdornment, { position: "start", sx: { color: 'text.primary' } },
                React.createElement(SearchRoundedIcon, { fontSize: "small" })), inputProps: {
                'aria-label': 'search',
            } })));
}
export default function MainContent() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
    const handleFocus = (index) => {
        setFocusedCardIndex(index);
    };
    const handleBlur = () => {
        setFocusedCardIndex(null);
    };
    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };
    return (React.createElement(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 4 } },
        React.createElement("div", null,
            React.createElement(Typography, { variant: "h1", gutterBottom: true }, "Blog"),
            React.createElement(Typography, null, "Stay in the loop with the latest about our products")),
        React.createElement(Box, { sx: {
                display: { xs: 'flex', sm: 'none' },
                flexDirection: 'row',
                gap: 1,
                width: { xs: '100%', md: 'fit-content' },
                overflow: 'auto',
            } },
            React.createElement(Search, null),
            React.createElement(IconButton, { size: "small", "aria-label": "RSS feed" },
                React.createElement(RssFeedRoundedIcon, null))),
        React.createElement(Box, { sx: {
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' },
                width: '100%',
                justifyContent: 'space-between',
                alignItems: { xs: 'start', md: 'center' },
                gap: 4,
                overflow: 'auto',
            } },
            React.createElement(Box, { sx: {
                    display: 'inline-flex',
                    flexDirection: 'row',
                    gap: 3,
                    overflow: 'auto',
                } },
                React.createElement(Chip, { onClick: handleClick, size: "medium", label: "All categories" }),
                React.createElement(Chip, { onClick: handleClick, size: "medium", label: "Company", sx: {
                        backgroundColor: 'transparent',
                        border: 'none',
                    } }),
                React.createElement(Chip, { onClick: handleClick, size: "medium", label: "Product", sx: {
                        backgroundColor: 'transparent',
                        border: 'none',
                    } }),
                React.createElement(Chip, { onClick: handleClick, size: "medium", label: "Design", sx: {
                        backgroundColor: 'transparent',
                        border: 'none',
                    } }),
                React.createElement(Chip, { onClick: handleClick, size: "medium", label: "Engineering", sx: {
                        backgroundColor: 'transparent',
                        border: 'none',
                    } })),
            React.createElement(Box, { sx: {
                    display: { xs: 'none', sm: 'flex' },
                    flexDirection: 'row',
                    gap: 1,
                    width: { xs: '100%', md: 'fit-content' },
                    overflow: 'auto',
                } },
                React.createElement(Search, null),
                React.createElement(IconButton, { size: "small", "aria-label": "RSS feed" },
                    React.createElement(RssFeedRoundedIcon, null)))),
        React.createElement(Grid, { container: true, spacing: 2, columns: 12 },
            React.createElement(Grid, { size: { xs: 12, md: 6 } },
                React.createElement(SyledCard, { variant: "outlined", onFocus: () => handleFocus(0), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 0 ? 'Mui-focused' : '' },
                    React.createElement(CardMedia, { component: "img", alt: "green iguana", image: cardData[0].img, sx: {
                            aspectRatio: '16 / 9',
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                        } }),
                    React.createElement(SyledCardContent, null,
                        React.createElement(Typography, { gutterBottom: true, variant: "caption", component: "div" }, cardData[0].tag),
                        React.createElement(Typography, { gutterBottom: true, variant: "h6", component: "div" }, cardData[0].title),
                        React.createElement(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true }, cardData[0].description)),
                    React.createElement(Author, { authors: cardData[0].authors }))),
            React.createElement(Grid, { size: { xs: 12, md: 6 } },
                React.createElement(SyledCard, { variant: "outlined", onFocus: () => handleFocus(1), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 1 ? 'Mui-focused' : '' },
                    React.createElement(CardMedia, { component: "img", alt: "green iguana", image: cardData[1].img, "aspect-ratio": "16 / 9", sx: {
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                        } }),
                    React.createElement(SyledCardContent, null,
                        React.createElement(Typography, { gutterBottom: true, variant: "caption", component: "div" }, cardData[1].tag),
                        React.createElement(Typography, { gutterBottom: true, variant: "h6", component: "div" }, cardData[1].title),
                        React.createElement(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true }, cardData[1].description)),
                    React.createElement(Author, { authors: cardData[1].authors }))),
            React.createElement(Grid, { size: { xs: 12, md: 4 } },
                React.createElement(SyledCard, { variant: "outlined", onFocus: () => handleFocus(2), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 2 ? 'Mui-focused' : '', sx: { height: '100%' } },
                    React.createElement(CardMedia, { component: "img", alt: "green iguana", image: cardData[2].img, sx: {
                            height: { sm: 'auto', md: '50%' },
                            aspectRatio: { sm: '16 / 9', md: '' },
                        } }),
                    React.createElement(SyledCardContent, null,
                        React.createElement(Typography, { gutterBottom: true, variant: "caption", component: "div" }, cardData[2].tag),
                        React.createElement(Typography, { gutterBottom: true, variant: "h6", component: "div" }, cardData[2].title),
                        React.createElement(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true }, cardData[2].description)),
                    React.createElement(Author, { authors: cardData[2].authors }))),
            React.createElement(Grid, { size: { xs: 12, md: 4 } },
                React.createElement(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2, height: '100%' } },
                    React.createElement(SyledCard, { variant: "outlined", onFocus: () => handleFocus(3), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 3 ? 'Mui-focused' : '', sx: { height: '100%' } },
                        React.createElement(SyledCardContent, { sx: {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%',
                            } },
                            React.createElement("div", null,
                                React.createElement(Typography, { gutterBottom: true, variant: "caption", component: "div" }, cardData[3].tag),
                                React.createElement(Typography, { gutterBottom: true, variant: "h6", component: "div" }, cardData[3].title),
                                React.createElement(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true }, cardData[3].description))),
                        React.createElement(Author, { authors: cardData[3].authors })),
                    React.createElement(SyledCard, { variant: "outlined", onFocus: () => handleFocus(4), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 4 ? 'Mui-focused' : '', sx: { height: '100%' } },
                        React.createElement(SyledCardContent, { sx: {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%',
                            } },
                            React.createElement("div", null,
                                React.createElement(Typography, { gutterBottom: true, variant: "caption", component: "div" }, cardData[4].tag),
                                React.createElement(Typography, { gutterBottom: true, variant: "h6", component: "div" }, cardData[4].title),
                                React.createElement(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true }, cardData[4].description))),
                        React.createElement(Author, { authors: cardData[4].authors })))),
            React.createElement(Grid, { size: { xs: 12, md: 4 } },
                React.createElement(SyledCard, { variant: "outlined", onFocus: () => handleFocus(5), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 5 ? 'Mui-focused' : '', sx: { height: '100%' } },
                    React.createElement(CardMedia, { component: "img", alt: "green iguana", image: cardData[5].img, sx: {
                            height: { sm: 'auto', md: '50%' },
                            aspectRatio: { sm: '16 / 9', md: '' },
                        } }),
                    React.createElement(SyledCardContent, null,
                        React.createElement(Typography, { gutterBottom: true, variant: "caption", component: "div" }, cardData[5].tag),
                        React.createElement(Typography, { gutterBottom: true, variant: "h6", component: "div" }, cardData[5].title),
                        React.createElement(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true }, cardData[5].description)),
                    React.createElement(Author, { authors: cardData[5].authors }))))));
}
