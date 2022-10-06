import React from 'react'
import { SideBar,options } from '../../../App';
let Card = React.lazy(()=>import('../Card/Card'));
import { Box, Flex, SkeletonCircle,SkeletonText } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import SkeletonLoader from '../SkeletonLoader';

const URL = 'https://youtube-v3-alternative.p.rapidapi.com/search?query=';

const Home = () => {
    const {data,setData,isLoading,setIsLoading} = React.useContext(SideBar);
    const {category} = useParams();

    React.useMemo(()=>{
      setIsLoading(true);
       async function fetchData(category){
      const response = await fetch(URL+category,options);
        const {data} = await response.json();
        setData(data);
        setIsLoading(false)
        console.log(data)}

      fetchData(category);

    },[category])


  return (<>
    {isLoading?<SkeletonLoader />:
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
                    <React.Suspense fallback={<Box padding='6' m={5} boxShadow='lg' bg='blackAlpha.400'>
                                                <SkeletonCircle size='10' />
                                                <SkeletonText m='20' noOfLines={4} spacing='4' />
                                            </Box>}>

                        <Card item={item} key={i} />
                    </React.Suspense>
                )
            })}
    </Flex>}
    </>)
}

export default Home