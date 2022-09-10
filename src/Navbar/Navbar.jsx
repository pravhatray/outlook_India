import React, { useEffect } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { Box, Button, Flex, IconButton, Image, Input, Link, SimpleGrid, Text, useColorMode } from "@chakra-ui/react"
import {
    FaSun, FaInstagram,
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaMoon
} from "react-icons/fa"
import { useState } from 'react'
import axios from 'axios'
import SearchedData from '../Components/SearchedData'
import { SearchIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { AppContext } from '../Contexts/Context'
const links = [

    {
        path: "/politics",
        title: "POLITICS"
    },
    {
        path: "/business",
        title: "BUSINESS"
    },
    {
        path: "/crypto",
        title: "CRYPTO CORNER"
    },
    {
        path: "/sports",
        title: "SPORTS"
    },
    {
        path: "/tech",
        title: "TECHNOLOGY"
    },
    {
        path: "/science",
        title: "SCIENCE"
    },
    {
        path: "/movies",
        title: "ENTERTAINMENT"
    },
    {
        path: "/health",
        title: "HEALTH"
    },
    {
        path: "/others",
        title: "OTHERS"
    },

]

const Navbar = () => {
    const { isAuth, handleLogout } = useContext(AppContext)

    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"

    const [searchParam, setSearchParam] = useSearchParams()
    const [query, setQuery] = useState(searchParam.get("q") || "")
    const [data, setData] = useState([])

    const searchData = (query) => {
        axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=40fbe681d33f4a1c9a394eb02a6ef8c2`)
            .then((res) => {
                setData(res.data.articles)
            })
    }
   
    const handleQuery = (e) => {

        setTimeout(() => {
            setQuery(e.target.value)
          
        }, 1000);
    }

    function handleSubmit() {
        searchData(query)
    
    }

    useEffect(() => {
        setSearchParam({ q: query })
    }, [query])

    return (
        <>
            <Box m={3}>
                <Image width='100%' height='250px' src='https://tpc.googlesyndication.com/simgad/7117080034950156774' />
            </Box>

            <Flex alignItems='center' justifyContent='space-between'>
                <Box>Satuday,September 02,2022</Box>
                <Box>
                    <NavLink to='/'>
                        <Image width='230px' height='60px' src='https://imgnew.outlookindia.com/public/uploads/articles/2020/4/14/Outlook.jpg' />
                    </NavLink>
                    <Flex justifyContent='center' >

                        {
                            isAuth.auth === true ?
                                <>
                                    <Text textTransform='uppercase'>{isAuth.name}</Text>
                                </> : <>
                                    <Text><NavLink to='/login'>LOGIN|</NavLink></Text>
                                    <Text><NavLink to='/signUp'>SUBSCRIBE</NavLink></Text>
                                </>
                        }


                    </Flex>
                </Box>
                <Box>
                    <Flex gap={2}>
                        <Link href='https://www.instagram.com/outlookindia/' isExternal>
                            <IconButton isRound={true} icon={<FaInstagram />} />
                        </Link>

                        <Link href='https://www.facebook.com/Outlookindia' isExternal>
                            <IconButton isRound={true} icon={<FaFacebook />} />
                        </Link>
                        <Link href='https://twitter.com/outlookindia/' isExternal>
                            <IconButton isRound={true} icon={<FaTwitter />} />
                        </Link>

                        <Link href='https://www.youtube.com/user/OutlookMagazine' isExternal>  <IconButton isRound={true} icon={<FaYoutube />} /></Link>


                        <IconButton isRound={true} onClick={toggleColorMode} icon={isDark ? <FaSun /> : <FaMoon />} />
                    </Flex>


                </Box>
            </Flex>



            <Flex flexWrap='wrap' backgroundColor='whiteAlpha.400' pos='sticky' top={0} justifyContent='space-evenly' alignItems='center' mb={10} mt={4} >
                <NavLink to='/'> <Image width='90px' src='https://imgnew.outlookindia.com/public/uploads/articles/2020/4/14/Outlook.jpg' />
                </NavLink>


                {
                    links.map((link) => {
                        return (
                            <>
                                <NavLink key={link.path} to={link.path}>
                                    <Text color='teal.' fontWeight='semibold' fontSize='17px'>{link.title}</Text>
                                </NavLink>

                            </>
                        )
                    })
                }
                <Input onChange={handleQuery} width='170px' placeholder='search news' />
                <Link to='/searched'><Button onClick={handleSubmit}><SearchIcon /></Button></Link>

            </Flex>
            <Box marginTop='10px' marginBottom='15px' width='100%' border='0.5px solid grey'></Box>
            <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
                {
                    data.map((item) => {
                        return (
                            <SearchedData
                                author={item.author}
                                content={item.content}
                                description={item.description}
                                title={item.title}
                                img={item.urlToImage}
                                date={item.publishedAt}
                                key={item.id}
                                link={item.url}
                            />
                        )
                    })
                }
            </SimpleGrid>
        </>
    )
}

export default Navbar



