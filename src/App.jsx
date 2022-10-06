import React,{ createContext } from 'react'
import { Box,Flex } from '@chakra-ui/react'
import './App.css'
import Body from './component/Body/Body';
import Header from './component/Header/Header';
import Sidebar from './component/SideBar/Sidebar';

export const URL = 'https://youtube-v3-alternative.p.rapidapi.com/related?id=';
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3224681278mshdf603cd43fde3cbp13a2f6jsnf3ec618192c1',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

export const SideBar = createContext()

function App() {
  const [isToggle,setIsToggle] = React.useState(()=>true)
  const [suggestedVideo,setSuggestedVideo] = React.useState(()=>(localStorage.getItem('suggested')||'dQw4w9WgXcQ'))
  const [data,setData] = React.useState(()=>[]);
  const [historyList,setHistoryList] = React.useState(()=>[]);

  async function fetchData(suggestedVideo){
    const response = await fetch(URL+suggestedVideo,options);
    const {data} = await response.json();
    setData(data);
  console.log(data)
  }
  React.useEffect(()=>{
    fetchData(suggestedVideo);
  },[suggestedVideo]);


  return (
    
    <Box  id="App" 
          bg={'blackAlpha.900'} 
          h={'100vh'} 
          w={'100vw'}
          color={'whiteAlpha.900'}
          >
      <SideBar.Provider value={{isToggle,data,historyList,setHistoryList,setData,setIsToggle,setSuggestedVideo}}>
      <Header />
      <Flex>
      <Sidebar />
      <Body />
      </Flex>
      </SideBar.Provider>
    </Box>
    
  )
}

export default App
