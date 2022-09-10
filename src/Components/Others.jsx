import { Badge, Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../Contexts/Context'

const Others = () => {

    const { state, dispatch } = useContext(AppContext)



    const handleOthers = () => {
      dispatch({ type: "LOADING_DATA" })
      axios.get(`https://outlook-india-news.herokuapp.com/news_all`).then((res) => {
  
        dispatch({ type: "OTHER_DATA", payload: res.data })
      }).catch((err) => {
        console.log("err", err)
      })
    }
useEffect(()=>{
    handleOthers()
},[])

  return (
    <>

{
                    state.isLoading ?

                        <Box width={`90%`} margin='5px'>
                            <Skeleton style={{ display: "flex" }} height={50} />

                            <Skeleton height={200} /><Skeleton height={200} />
                            <Skeleton height={100} fontSize='40px' />
                            <Skeleton fontSize='20px' />
                            <Skeleton fontSize='30px' />
                        </Box>
                        :
    <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
        {
            state.others.map((item)=>{
               
                return(
                           <Box>
                <Image height='250px' src={item.urlToImage} />
                <Text textDecoration='underline' fontWeight='medium' fontSize='20px'>{item.title}</Text>
                <Box display='flex' >
                    <Text>{item.publishedAt}</Text>
                    <Text><Badge>{item.author}</Badge></Text>
                
                </Box>
                <Text>
                              <NavLink

                                key={item.id}
                                to={`/${item.category}/${item.id}`}
                              >
                                <Badge variant='outline' color="violet" colorScheme='green'>Read More</Badge>
                              </NavLink>

                            </Text>
                {/* <Link href={link} isExternal>
                    <Button backgroundColor="aqua"  >READ MORE</Button>
                </Link> */}
                
                
            </Box>
                )
          
                
                
            
            })
        }


    </SimpleGrid>
}
    </>
  )
}

export default Others