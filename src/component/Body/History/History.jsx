import { Flex } from '@chakra-ui/react';
import React from 'react';
const Card = React.lazy(()=>import('../Card/Card'));
import SkeletonLoader from '../SkeletonLoader';
import { SideBar } from '../../../App';


const History = () => {
    const {historyList} = React.useContext(SideBar);
 
  
  return (
    <Flex 
    flexWrap={'wrap'}
      w='full' 
      h ='max-content'>
        {historyList.length?historyList.map((item,i)=>{
         if(!(item instanceof Array))
          {return <React.Suspense key={i}
            fallback={<SkeletonLoader />}>
            <Card key={i} item={item} />
          </React.Suspense>}})
          :''}
    </Flex>
  );
}

export default History;