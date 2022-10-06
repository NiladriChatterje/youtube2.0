import { Heading, Flex, Input, InputGroup, InputRightElement,Divider  } from '@chakra-ui/react'
import React from 'react'
import {AiFillYoutube,AiOutlineMenuUnfold} from 'react-icons/ai'
import {FaSearchengin} from 'react-icons/fa'
import { SideBar } from '../../App'


export default function Header(){
 
  const {setIsToggle} = React.useContext(SideBar);

  return (<>
    <Flex w={'100vw'}
          pos='relative'
          h={70}
          style={{alignItems:'center'}}
          >
            <AiOutlineMenuUnfold 
                      onClick={()=>setIsToggle(p => !p)}
                      cursor={'pointer'}
                      color='white'
                     style={{height:30,width:30}} />
            <AiFillYoutube 
                    color='rgb(250,20,40)'
                    style={{height:40,width:80}} />
          <InputGroup h={30}>
            <Heading size={'lg'}>2.0</Heading>
            <Input id='searchBar'
                  variant={'filled'}
                  bg={'whiteAlpha.300'} 
                  border='none'
                  pos={'absolute'}
                  right={10}
                  w={'45vw'}
                   />
                  <InputRightElement
                         children={<FaSearchengin 
                          cursor={'pointer'}
                          style={{right:0}}
                           />}
                      />
            
          </InputGroup>
    </Flex>
    <Divider /></>
  )
}

