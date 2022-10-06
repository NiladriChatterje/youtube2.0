import React from 'react'
import { SideBar } from '../../../App';
let Card = React.lazy(()=>import('../Card/Card'));
import { Box, Flex, SkeletonCircle,SkeletonText } from '@chakra-ui/react';

const Home = () => {
    const {data} = React.useContext(SideBar);
  return (
    <Flex
        id={'home'}
        w={'full'}
        h={'90vh'}
        justifyContent={'center'}
        overflowX={'hidden'}
        overflowY={'auto'}
        flexWrap={'wrap'}>
            {data?.map((item,i)=>{
                return (
                    <React.Suspense fallback={<Box padding='6' boxShadow='lg' bg='blackAlpha.400'>
                                                <SkeletonCircle size='10' />
                                                <SkeletonText m='5' noOfLines={4} spacing='4' />
                                            </Box>}>

                        <Card item={item} key={i} />
                    </React.Suspense>
                )
            })}
    </Flex>
    )
}

export default Home