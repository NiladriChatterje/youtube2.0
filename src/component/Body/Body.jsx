import { Box } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';

export default () => {
  return (
    <Box
        w={'full'}
        h={'full'}
    >
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </Box>
  )
}
