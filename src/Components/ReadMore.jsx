import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { AppContext } from '../Contexts/Context'
import { Text, Box, SimpleGrid, Flex, Image, Badge, Button, Link, Textarea } from '@chakra-ui/react'

const ReadMore = () => {
  const { state } = useContext(AppContext)
  const [news, setNews] = useState([])
  const params = useParams()

  function details(category, id) {
    return axios.get(`https://outlook-india-news.herokuapp.com/${category}/${id}`)
      .then((res) => {
        setNews(res.data)
      })
  }

  useEffect(() => {
    details(params.category, params.id)
  }, [params.category, params.id])

  return (
    <>
      <SkeletonTheme color="#202020" highlightColor="#444">
 
              <Text fontSize={25} fontWeight="medium" color='teal'>{params.category.toUpperCase()}</Text>
              <SimpleGrid columns={"400px,"} minChildWidth='30%' maxChildWidth='70%' spacing='30px'>


                {
                  news && (
                    <>

                  

                      <SimpleGrid mb={1} m={3} spacing='10px'>
                        <Image borderRadius='10px' width='70%' src={news.urlToImage} />
                        <Text fontWeight='medium' textDecoration={'underline'} fontSize='25px'>{news.title}</Text>
                        <Text >
                          <Badge colorScheme='yellow' fontSize='18px'>{news.publishedAt}</Badge>
                        </Text>

                        <Text fontStyle='italic' color='teal' fontWeight='bold'>{news.author}</Text>

                        <Link href={news.url} isExternal>
                          <Button color='black' colorScheme='blue' w='120px'>READ MORE</Button>
                        </Link>
                        <Text>{news.content}</Text>
                        <Text>{news.description}</Text>
                      </SimpleGrid>




                    </>
                  )
                }
               

              </SimpleGrid>
       
      </SkeletonTheme>
    </>
  )

}

export default ReadMore