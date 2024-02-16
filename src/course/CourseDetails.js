import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Text, Image, Heading } from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import NavBar from '../components/NavBar';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        console.log('Fetching course details for courseId:', courseId);
        const docRef = doc(db, 'courses', courseId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCourseDetails({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such document found for courseId:', courseId);
        }
      } catch (error) {
        console.error('Error fetching course details:', error.message);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  return (
    <>
    <NavBar/>
    <Box className="totalbox" padding="200px">
      {courseDetails && (
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
            <Image src={courseDetails.thumbnail} alt="Course Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <Heading fontSize="xl" fontWeight="bold" color="white" mt="4">{courseDetails.name}</Heading>
          <Text fontSize="md" color="white" mt="2">Instructor: {courseDetails.instructor}</Text>
          <Text fontSize="md" color="white" mt="2">Location: {courseDetails.location}</Text>
          <Text fontSize="md" color="white" mt="2">Duration: {courseDetails.duration}</Text>
          <Text fontSize="md" color="white" mt="2">Enrollment Status: {courseDetails.enrollmentStatus}</Text>
          <Text fontSize="md" color="white" mt="2">Description: {courseDetails.description}</Text>
          <Button bg="#00ffff" marginTop={'30px'}>Enroll Now</Button>
        </Box>
      )}
    </Box>
    </>
  );
};

export default CourseDetails;
