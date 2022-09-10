import { Badge, Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../Contexts/Context'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Science = () => {

    const { state, dispatch } = useContext(AppContext)



    const handelScience = () => {
        dispatch({ type: "LOADING_DATA" })
        axios.get(`https://outlook-india-news.herokuapp.com/science`).then((res) => {

            dispatch({ type: "SCIENCE_DATA", payload: res.data })
        }).catch((err) => {
            console.log("err", err)
        })
    }
    useEffect(() => {
        handelScience()
    }, [])


    
    const handleScienceMore = () => {
        dispatch({ type: "LOADING_DATA" })
        axios.get(`https://outlook-india-news.herokuapp.com/science_detail?_sort=id&_order=DESC`).then((res) => {

            dispatch({ type: "SCIENCE_MORE_DATA", payload: res.data })
        }).catch((err) => {
            console.log("err", err)
        })
    }
    useEffect(() => {
        handleScienceMore()
    }, [])

    return (
        <>
            <SkeletonTheme color="#202020" highlightColor="#444">
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
                        <>
                            <Text fontSize={25} fontWeight="medium" color='teal'>BITCOIN NEWS</Text>
                            <SimpleGrid  columns={[1, 2, 3]} spacing='40px'>

                                {
                                    state.science.map((item) => {

                                        return (
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

                                            </Box>
                                        )




                                    })
                                }


                            </SimpleGrid>

                        </>
                }


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
                         <SimpleGrid mt={4} p={5} columns={[1, 2, 3,4]} spacing='40px'>
                            {
                                    state.science_detail.map((item) => {

                                        return (
                                            <Box>


                                                <Image height='200px' src={item.urlToImage} />
                                                <Text textDecoration='underline' fontWeight='medium' fontSize='20px'>{item.title}</Text>
                                                <Box display='flex' >
                                                    <Text>{item.publishedAt}</Text>
                                                    
                                                </Box>
                                                <Text><Badge>{item.author}</Badge></Text>
                                                <Text>
                                                    <NavLink

                                                        key={item.id}
                                                        to={`/${item.category}/${item.id}`}
                                                    >
                                                        <Badge variant='outline' color="violet" colorScheme='green'>Read More</Badge>
                                                    </NavLink>

                                                </Text>

                                            </Box>
                                        )




                                    })
                                }
                            
                         </SimpleGrid>
                    }



            </SkeletonTheme>
        </>
    )
}

export default Science