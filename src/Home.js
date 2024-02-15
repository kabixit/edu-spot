import React from 'react';
import NavBar from './components/NavBar';
import CourseDisplay from './components/CourseDisplay'; // Assuming you have a NavBar component in the same directory

const Home = () => {
  return (
    <div>
      <NavBar />
      <CourseDisplay/>      
    </div>
  );
};

export default Home;
