import React, { useState, useEffect } from 'react';
import { Box, Grid, GridItem, Button, Text, Image } from '@chakra-ui/react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { px } from 'framer-motion';

const CourseDisplay = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error.message);
      }
    };

    fetchCourses();
  }, []);

  const handleEnrollClick = (courseId) => {
    // Handle enrollment logic here
    console.log(`Enroll button clicked for course with ID ${courseId}`);
  };

  return (
    <Box className="totalbox" padding={'200px'}>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {courses.map((course) => (
          <GridItem key={course.id}>
            <Box
               className="glassbox"
               padding="6"
               borderRadius="32px"
               border="1px solid rgba(255, 255, 255, 0.125)"
               boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)"
               position="relative"
               backdropFilter="blur(16px) saturate(180%)"
               WebkitBackdropFilter="blur(16px) saturate(180%)"
               background="linear-gradient(-30deg, #090909 -20%, #2A2A2A 100%)"
            >
              <div style={{ width: '400px', height: '200px', overflow: 'hidden', borderRadius: '16px' }}>
                <img src={course.thumbnail} alt="Course Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>              
              <Text fontSize="xl" fontWeight="bold"color={'white'} mt="4">{course.name}</Text>
              <Text fontSize="sm" fontWeight="bold" color={'green'} mb="4"> {course.enrollmentStatus}</Text>
              <Button bg="#00ffff" onClick={() => handleEnrollClick(course.id)}>Enroll Now</Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseDisplay;
