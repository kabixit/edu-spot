// CourseSearchPage.js
import React, { useState } from 'react';
import { Box, Grid, GridItem, Button, Text, Image } from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import NavBar from './components/NavBar';

const CourseSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      const coursesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredCourses = coursesData.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredCourses);
    } catch (error) {
      console.error('Error fetching courses:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <NavBar />
      <Box className="totalbox" padding="200px" display="flex" flexDirection="column" alignItems="center">
        <Box style={{ width: '50%', marginBottom: '20px' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search courses..."
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.125)',
            }}
          />
        </Box>
        <Button
          bg="#00ffff"
          color="black"
          _hover={{ bg: '#00e6e6' }}
          onClick={handleSearch}
          style={{
            borderRadius: '8px',
            padding: '12px 24px',
            marginBottom: '20px',
          }}
        >
          Search
        </Button>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {searchResults.map((course) => (
            <GridItem key={course.id}>
              <Box
                className="glassbox"
                padding="4"
                borderRadius="8px"
                border="1px solid rgba(255, 255, 255, 0.125)"
                backdropFilter="blur(16px) saturate(180%)"
                WebkitBackdropFilter="blur(16px) saturate(180%)"
                background="linear-gradient(-30deg, #090909 -20%, #2A2A2A 100%)"
              >
                <Image src={course.thumbnail} alt="Course Thumbnail" borderRadius="8px" />
                <Text fontSize="xl" fontWeight="bold" color="white" mt="2">{course.name}</Text>
                <Text fontSize="sm" fontWeight="bold" color="white">{course.enrollmentStatus}</Text>
                <Button bg="#00ffff" color="black" _hover={{ bg: '#00e6e6' }}>Enroll Now</Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CourseSearch;
