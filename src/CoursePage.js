import React, { useState, useEffect } from 'react';
import { Box, Button, Text, Image } from '@chakra-ui/react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const CoursePage = ({ courseId }) => {
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const courseDoc = await getDoc(doc(db, 'courses', courseId));
        if (courseDoc.exists()) {
          setCourseDetails({ id: courseDoc.id, ...courseDoc.data() });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching course details:', error.message);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (!courseDetails) {
    return <div>Loading...</div>; // Add loading indicator while fetching data
  }

  return (
    <Box className="totalbox" padding="200px">
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
        <Image src={courseDetails.thumbnail} alt="Course Thumbnail" />
        <Text fontSize="xl" fontWeight="bold" color="white" mt="4">
          {courseDetails.name}
        </Text>
        <Text fontSize="md" color="white" mb="4">
          {courseDetails.description}
        </Text>
        <Text fontSize="sm" fontWeight="bold" color="green" mb="4">
          {courseDetails.enrollmentStatus}
        </Text>
        <Text fontSize="sm" color="white">
          Duration: {courseDetails.duration}
        </Text>
        <Text fontSize="sm" color="white">
          Instructor: {courseDetails.instructor}
        </Text>
        <Text fontSize="sm" color="white">
          Location: {courseDetails.location}
        </Text>
        <Text fontSize="sm" color="white">
          Schedule: {courseDetails.schedule}
        </Text>
        <Text fontSize="sm" color="white" mt="2" mb="4">
          Prerequisites:
        </Text>
        <ul>
          {courseDetails.prerequisites.map((prerequisite, index) => (
            <li key={index}>{prerequisite}</li>
          ))}
        </ul>
        <Button bg="#00ffff">Enroll Now</Button>
      </Box>
    </Box>
  );
};

export default CoursePage;
