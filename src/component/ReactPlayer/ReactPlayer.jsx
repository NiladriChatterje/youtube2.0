import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { AiFillLike } from 'react-icons/ai';
import { GiWarlockEye } from 'react-icons/gi';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import {options} from '../../App'

const URL = 'https://youtube-v3-alternative.p.rapidapi.com/video?id='
const URL2 = 'https://youtube-v3-alternative.p.rapidapi.com/comments?id='

const Reactplayer = () => {
    const {id} = useParams();
    const [localData,setLocalData] = React.useState(()=>{})
    const [localComments,setLocalComments]=React.useState(()=>[]);

    React.useEffect(()=>{
      async function fetchVideoDetails(id){
        const response = await fetch(URL+id,options);
        const data = await response.json();
        setLocalData(data);
        console.log(data)
      }
      async function fetchVideoComments(id){
        const response = await fetch(URL2+id,options);
        const {data} = await response.json();
        setLocalComments(data);
        console.log(data)
      }
      fetchVideoDetails(id);
      fetchVideoComments(id)
    },[id])

  return (
    <Flex
        w='full'
        h='90vh'>
          <Box id='player'
              rowGap={'5%'}
              w={'70vw'}
              h={'90vh'}
              overflowX={'clip'}
              overflowY={'auto'}>
          <ReactPlayer 
            controls={true}
            url ={`https://www.youtube.com/watch?v=${id}`}
            height={'80%'}
            width={'100%'} />
            <Flex 
              justifyContent={'space-between'}>
                <Flex
                  alignItems={'center'} gap={5}>
                <GiWarlockEye color={'red'}/>
                <Text>views: {localData?.viewCount}</Text>
                </Flex>
            
            <Text>Runtime: {localData?.lengthSeconds}s</Text>
            </Flex>
            <Text fontSize={'xs'}>Uploaded: {localData?.publishDate}</Text>
          <Text  fontSize={'lg'}>{localData?.title}</Text>
          <Flex flexWrap={'wrap'}>
            {localData?.keywords?.map(item=>(
                
                <span  
                style={{borderRadius:10,width:'max-content',
                margin:'5px',padding:'5px',fontSize:'0.8em',
                background:'rgb(250,50,55)'}} >
                  {item}</span>
              
          ))}</Flex>
          <Text cursor={'pointer'} fontSize={'lg'} fontWeight={'900'}>{localData?.channelTitle}</Text>
          <Text fontSize={'xs'} fontWeight={'600'}>{localData?.description}</Text>
          
          {localComments?.map(item=>(
            <Box
              mt={10}
              w={'full'}
            >
               <Divider />
              <Flex>
                <Image src={item?.authorProfileImageUrl[0]?.url}
                style={{width:'40px',height:'40px',borderRadius:'50%'}}
                />
                <Box w={'full'}>
                    <Text fontWeight={900} fontSize={'0.9em'}>{item.authorDisplayName}</Text>
                    <Text fontSize={'0.8em'}>{item.textDisplay}</Text>
                    <Flex w='full' 
                    pr={10}
                    justifyContent={'space-between'} >
                      <Flex 
                      w={'max-content'}
                      flexDir={'row'}
                      >
                      <AiFillLike color='red' /><Text fontSize={'0.75em'}>Likes  : {item.likesCount}</Text>
                      </Flex>
                      <Text fontSize={'0.75em'}>Replies : &nbsp; &nbsp;&nbsp; {item.replyCount}</Text>
                    </Flex>
                    <Text fontSize={'0.7em'}>{item.publishedTimeText}</Text>
                </Box>
              </Flex>

            </Box>
          ))}
          </Box>
           
    </Flex>
  )
}

export default Reactplayer