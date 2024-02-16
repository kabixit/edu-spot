import React from 'react';
import NavBar from './components/NavBar';
import CourseDisplay from './components/CourseDisplay'; // Assuming you have a NavBar component in the same directory
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Box padding={'200px'}>
      <CourseDisplay/>
      </Box>      
    </div>
  );
};

export default Home;
