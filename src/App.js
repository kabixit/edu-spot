// App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import theme from './theme';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import CoursePage from './CoursePage';
import CourseDetails from './course/CourseDetails'; // Import CourseDetails component
import CourseSearch from './CourseSearch';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/CourseSearch' element={<CourseSearch />} />
          <Route path='/CoursePage' element={<CoursePage />} />
          <Route path='/course/:courseId' element={<CourseDetails />} /> 
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
