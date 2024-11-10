import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/system';
const userTestimonials = [
    {
        avatar: React.createElement(Avatar, { alt: "Remy Sharp", src: "/static/images/avatar/1.jpg" }),
        name: 'Remy Sharp',
        occupation: 'Senior Engineer',
        testimonial: "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    },
    {
        avatar: React.createElement(Avatar, { alt: "Travis Howard", src: "/static/images/avatar/2.jpg" }),
        name: 'Travis Howard',
        occupation: 'Lead Product Designer',
        testimonial: "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
    },
    {
        avatar: React.createElement(Avatar, { alt: "Cindy Baker", src: "/static/images/avatar/3.jpg" }),
        name: 'Cindy Baker',
        occupation: 'CTO',
        testimonial: 'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
    },
    {
        avatar: React.createElement(Avatar, { alt: "Remy Sharp", src: "/static/images/avatar/4.jpg" }),
        name: 'Julia Stewart',
        occupation: 'Senior Engineer',
        testimonial: "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
    },
    {
        avatar: React.createElement(Avatar, { alt: "Travis Howard", src: "/static/images/avatar/5.jpg" }),
        name: 'John Smith',
        occupation: 'Product Designer',
        testimonial: "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
    },
    {
        avatar: React.createElement(Avatar, { alt: "Cindy Baker", src: "/static/images/avatar/6.jpg" }),
        name: 'Daniel Wolf',
        occupation: 'CDO',
        testimonial: "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
    },
];
const whiteLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];
const darkLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];
const logoStyle = {
    width: '64px',
    opacity: 0.3,
};
export default function Testimonials() {
    const theme = useTheme();
    const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;
    return (React.createElement(Container, { id: "testimonials", sx: {
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
        } },
        React.createElement(Box, { sx: {
                width: { sm: '100%', md: '60%' },
                textAlign: { sm: 'left', md: 'center' },
            } },
            React.createElement(Typography, { component: "h2", variant: "h4", gutterBottom: true, sx: { color: 'text.primary' } }, "\u041E\u0442\u0437\u044B\u0432\u044B"),
            React.createElement(Typography, { variant: "body1", sx: { color: 'text.secondary' } }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0447\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u043E \u043D\u0430\u0448\u0435\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0435. \u0412 \u043E\u0442\u0437\u044B\u0432\u0430\u0445 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0437\u043D\u0430\u0442\u044C \u043E \u043F\u0440\u0438\u043C\u0435\u0440\u0430\u0445 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u043B\u044C\u0437\u0435 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.")),
        React.createElement(Grid, { container: true, spacing: 2 }, userTestimonials.map((testimonial, index) => (React.createElement(Grid, { size: { xs: 12, sm: 6, md: 4 }, key: index, sx: { display: 'flex' } },
            React.createElement(Card, { variant: "outlined", sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                } },
                React.createElement(CardContent, null,
                    React.createElement(Typography, { variant: "body1", gutterBottom: true, sx: { color: 'text.secondary' } }, testimonial.testimonial)),
                React.createElement(Box, { sx: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    } },
                    React.createElement(CardHeader, { avatar: testimonial.avatar, title: testimonial.name, subheader: testimonial.occupation }),
                    React.createElement("img", { src: logos[index], alt: `Logo ${index + 1}`, style: logoStyle })))))))));
}
