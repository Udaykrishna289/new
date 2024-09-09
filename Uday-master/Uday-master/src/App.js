import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Avatar, Card, CardContent, CardActions, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const teamMembers = [
  { 
    name: 'Anupam Gupta', 
    title: 'CEO', 
    description: 'Anupam oversees all operations and ensures the team delivers top-notch products.', 
    avatar: 'path_to_anupam_avatar.jpg', 
    linkedIn: '#' 
  },
  { 
    name: 'Godwin Carole', 
    title: 'Director', 
    description: 'Godwin specializes in strategic planning and client relationships.', 
    avatar: 'path_to_godwin_avatar.jpg', 
    linkedIn: '#' 
  },
  { 
    name: 'Member 3', 
    title: 'President', 
    description: 'Skilled in front-end and back-end development, building robust applications.', 
    avatar: 'path_to_member4_avatar.jpg', 
    linkedIn: '#' 
  },
  { 
    name: 'Member 4', 
    title: 'Manager', 
    description: 'Ensures smooth project management and timely delivery of milestones.', 
    avatar: 'path_to_member5_avatar.jpg', 
    linkedIn: '#' 
  },
  { 
    name: 'Member 5', 
    title: 'Full Stack Developer', 
    description: 'Expert in UI/UX design, creating intuitive and appealing interfaces.', 
    avatar: 'path_to_member3_avatar.jpg', 
    linkedIn: '#' 
  },
  { 
    name: 'Member 6', 
    title: 'Business Analyst', 
    description: 'Provides data-driven insights to optimize performance and strategy.', 
    avatar: 'path_to_member6_avatar.jpg', 
    linkedIn: '#' 
  },
  { 
    name: 'Member 7', 
    title: 'Frontend Developer', 
    description: 'Focused on product engineering and innovative technical solutions.', 
    avatar: 'path_to_member7_avatar.jpg', 
    linkedIn: '#' 
  },
  { 
    name: 'Member 8', 
    title: 'Backend Developer', 
    description: 'Offers expert advice to enhance business processes and growth.', 
    avatar: 'path_to_member8_avatar.jpg', 
    linkedIn: '#' 
  },
  { 
    name: 'Member 9', 
    title: 'Testing', 
    description: 'Develops long-term strategies to achieve business goals.', 
    avatar: 'path_to_member9_avatar.jpg', 
    linkedIn: '#' 
  },
  { 
    name: 'Member 10', 
    title: 'DevOps', 
    description: 'Crafts marketing campaigns that effectively reach target audiences.', 
    avatar: 'path_to_member10_avatar.jpg', 
    linkedIn: '#' 
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '40px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '30px',
      }
    },
    {
      breakpoint: 600, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '20px',
      }
    }
  ]
};

const TeamSection = () => {
  return (
    <Box sx={{ backgroundColor: '#212121', color: 'white', py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Meet Our Team Members
      </Typography>
<Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}></Box>
      <Box sx={{ width: '80%', margin: '0 auto' }}>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Card sx={{ 
                backgroundColor: '#0f0f0f', 
                color: 'white', 
                textAlign: 'center', 
                mx: 1, 
                border: '1px solid rgba(255, 255, 255, 0.2)'  
              }}>
                <CardContent>
                  <Avatar 
                    src={member.avatar} 
                    alt={member.name} 
                    sx={{ width: 80, height: 80, margin: '0 auto 10px auto' }} 
                  />
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2">{member.title}</Typography>
                  <Typography variant="body2" sx={{ mt: 1, fontStyle: 'Cambria' }}>
                    {member.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <IconButton 
                    aria-label="LinkedIn" 
                    href={member.linkedIn} 
                    sx={{ color: 'white' }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton 
                    aria-label="Close" 
                    sx={{ color: 'white' }}
                  >
                    <CloseIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 3, px: 2 }}>
        <Typography variant="body1">
          We believe in the power of collaboration and teamwork. Our team is committed to delivering the best solutions tailored to your needs.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          With diverse expertise and a passion for innovation, we strive to create impactful products that make a difference.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Join us on our journey to excellence and see what we can achieve together.
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamSection;