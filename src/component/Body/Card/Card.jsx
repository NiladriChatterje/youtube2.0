import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import {MdImageNotSupported} from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai';
import { SideBar } from '../../../App';

function addHistory(historyList){
    localStorage.setItem('history',historyList);
}

const Card = ({item}) => {
    const {historyList,setHistoryList} = React.useContext(SideBar);

  return (
    <Link to={`/player/${item.videoId}`}
            onClick={()=>{setHistoryList([...historyList,item.videoId]);
                            addHistory(historyList)}}>
        <Box
            id='card'
            m={5}
            mt={0}
            h={255}
            w={295}>
                {item.thumbnail[1]?.url?<Image 
                    src={item.thumbnail[1]?.url}
                    w={'full'}
                    objectFit={'contain'} />:
                    <MdImageNotSupported 
                        id='iconHover'
                        style={{height:150,width:150}}/>}
                <Text fontSize={'xs'} fontWeight={900}>{item.title}</Text>
                <Flex>
                    <AiFillEye />
                    <Text
                        ml={2}
                        fontSize={'xs'}
                        color={'gray.500'}>
                        {item.viewCount}
                    </Text>
                </Flex>
            
            <Flex
                w={'full'}
                justifyContent={'space-between'}>
                <Text fontSize={'xs'}
                       fontWeight={700} >
                        {item.publishedTimeText}
                </Text>
                <Text fontSize={'xs'}
                        fontWeight={700}>
                        {item.lengthText}
                </Text>
            </Flex>
        </Box>
    </Link>
  )
}

export default Card