import { Box } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Reactplayer from '../ReactPlayer/ReactPlayer';
import History from './History/History';
import Home from './Home/Home';

export default () => {
  return (
    <Box
        w={'full'}
        h={'90vh'}
    >
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/History' element={<History />} />
          <Route path='/:category' element={<Home />} />
          <Route path='/player/:id' element={<Reactplayer />} />
          
        </Routes>
    </Box>
  )
}
