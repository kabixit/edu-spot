import React from 'react';
import { Box, Flex, Spacer, Button, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    navigate('/Login');
  };

  return (
    <Box
      className="glassmorphism-container"
      position="fixed"
      top="70"
      width="100%"
      height="15%"
    >
      <Flex align="center">
        <Link mt={4} fontSize="xl" fontWeight="bold" color="white" onClick={() => navigate('/Home')}>
          EDUSPOT
        </Link>
        <Spacer />
        <Box mt={4}>
          <Link color="white" fontWeight="bold" mr={20} onClick={() => navigate('/Home')} _hover={{ color: '#00ffff' }}>
            Home
          </Link>
          <Link color="white" fontWeight="bold" mr={20} onClick={() => navigate('/Courses')} _hover={{ color: '#00ffff' }}>
            Courses
          </Link>
          <Link color="white" fontWeight="bold" onClick={() => navigate('/Achievements')} _hover={{ color: '#00ffff' }}>
            Achievements
          </Link>
        </Box>
        <Spacer />
        <Button onClick={handleLogout} color={'black'} colorScheme="custom" bg="#00ffff" fontFamily="'Black Han Sans', sans-serif">
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default NavBar;
