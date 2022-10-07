import { Flex } from '@chakra-ui/react'
import React from 'react'
const Card = React.lazy(()=>import('../Card/Card'));
import SkeletonLoader from '../SkeletonLoader'
import { SideBar,options } from '../../../App';

const URL='https://youtube-v3-alternative.p.rapidapi.com/video?id='

const History = () => {
    const {historyList,setIsLoading} = React.useContext(SideBar);
    const [localHistory,setLocalHistory] = React.useState(()=>[])
    
    async function fetchData(history){
      setIsLoading(true);
      try{
      const response = await fetch(URL+history,options);
      
      setIsLoading(false);
      return response}catch(err){}}


React.useEffect(()=>{
  async function ab(){
    const res = await Promise.all(historyList.map(item=>fetchData(item)));
    const {body} = res;
    console.log(body)
  }
  ab();
  console.log(localHistory);
  console.log(historyList);
  },[])
 
  
  return (
    <Flex>
        {/*obtainedData.length?obtainedData.map((item,i)=>{
         
          return <React.Suspense 
            fallback={<SkeletonLoader />} >
            <Card key={i} item={item} />
          </React.Suspense>})
        :''*/}
    </Flex>
  );
}

export default History;