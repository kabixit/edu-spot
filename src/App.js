// App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import theme from './theme';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Achievements from './Achievements';
import CoursePage from './CoursePage';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Achievements' element={<Achievements />}/>
          <Route path='/CoursePage' element={<CoursePage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
