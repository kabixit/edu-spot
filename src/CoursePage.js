import React from 'react';
import CourseDisplay from './components/CourseDisplay';
import NavBar from './components/NavBar';
import { Box, Heading } from '@chakra-ui/react';

const CoursePage = () => {

  return (
    <div>
      <NavBar/>
      <Box padding={'200px'} alignItems="center">
      <Heading color={'white'} paddingBottom={'40px'}>Courses</Heading>
      <CourseDisplay />
      </Box>
    </div>
  );
};

export default CoursePage;
