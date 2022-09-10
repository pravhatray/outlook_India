import { Badge, Box, Flex, Image, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AppContext } from '../Contexts/Context'
import { Link, NavLink } from 'react-router-dom'
import Carouselll from './Carousel'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {

  const { state, dispatch } = useContext(AppContext)

  const handlePolitics = () => {
    dispatch({ type: "LOADING_DATA" })
    axios.get(`https://outlook-india-news.herokuapp.com/politics_detail?_limit=5`).then((res) => {

      dispatch({ type: "POLITICS_DATA", payload: res.data })
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleCrypto = () => {
    dispatch({ type: "LOADING_DATA" })
    axios.get(`https://outlook-india-news.herokuapp.com/bitcoins?_limit=5`).then((res) => {
      console.log(res.data)
      dispatch({ type: "CRYPTO_DATA", payload: res.data })
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleTech = () => {
    dispatch({ type: "LOADING_DATA" })
    axios.get(`https://outlook-india-news.herokuapp.com/tech?_limit=5`).then((res) => {

      dispatch({ type: "TECH_DATA", payload: res.data })
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleBusiness = () => {
    dispatch({ type: "LOADING_DATA" })
    axios.get(`https://outlook-india-news.herokuapp.com/business?_limit=3`).then((res) => {

      dispatch({ type: "BUSINESS_DATA", payload: res.data })
    }).catch((err) => {
      console.log("err", err)
    })
  }


  const handleEntertain = () => {
    dispatch({ type: "LOADING_DATA" })
    axios.get(`https://outlook-india-news.herokuapp.com/entertainment?_limit=4`).then((res) => {

      dispatch({ type: "ENTERTAINMENT_DATA", payload: res.data })
    }).catch((err) => {
      console.log("err", err)
    })
  }


  const handleSports = () => {
    dispatch({ type: "LOADING_DATA" })
    axios.get(`https://outlook-india-news.herokuapp.com/sports?_limit=5`).then((res) => {

      dispatch({ type: "SPORTS_DATA", payload: res.data })
    }).catch((err) => {
      console.log("err", err)
    })
  }


  const handleScience = () => {
    dispatch({ type: "LOADING_DATA" })
    axios.get(`https://outlook-india-news.herokuapp.com/science?_limit=6`).then((res) => {

      dispatch({ type: "SCIENCE_DATA", payload: res.data })
    }).catch((err) => {
      console.log("err", err)
    })
  }


  const handleHealth = () => {
    dispatch({ type: "LOADING_DATA" })
    axios.get(`https://outlook-india-news.herokuapp.com/health?_limit=4`).then((res) => {

      dispatch({ type: "HEALTH_DATA", payload: res.data })
    }).catch((err) => {
      console.log("err", err)
    })
  }

  useEffect(() => {
    handleHealth()
  }, [])

  useEffect(() => {
    handleScience()
  }, [])



  useEffect(() => {
    handleSports()
  }, [])


  useEffect(() => {
    handlePolitics()
  }, [])

  useEffect(() => {
    handleEntertain()
  }, [])

  useEffect(() => {
    handleTech()
  }, [])

  useEffect(() => {
    handleCrypto()
  }, [])

  useEffect(() => {
    handleBusiness()
  }, [])







  return (
    <>

      <SkeletonTheme color="#202020" highlightColor="#444">

        <Box>

          <Image p={4} width="100%" src='https://s0.2mdn.net/simgad/17272595026596385330' />
        </Box>
  

        <Flex width={['128vw','159vw','125vw','100vw']} direction={['column','column','column','row']}  gap='10px'>



          {
            state.isLoading ?
              <Box width={`75%`}>
                <Skeleton height={400} />
                <Skeleton height={100}/>
                <Skeleton height={270} />
                <Skeleton height={50} />
                <Skeleton fontSize={100} />
                <Box display='flex'>
                  <Skeleton height={40}/>
                  <Skeleton height={70}/>
                </Box>
                 <Skeleton height={150} width={`50%`}/>
                <Skeleton height={150} width={`50%`}/>

              </Box>
              :


              <Box width='75%' >
                <Box display="flex" padding='8px' gap='10px' margin='5px' border="1px solid" width="100%">


                  <Image width='500px' src='https://im.rediff.com/cricket/2021/dec/14virat1.jpg?w=670&h=900' />

                  <Box>
                    <Image height='270px' src='https://cricfit.com/wp-content/uploads/2021/06/Kolw.jpg' />

                    <Text fontWeight='bold' textDecoration='underline' fontSize='20px'>VOTE! Should Kohli Be Dropped From T20 WC Team?</Text>

                  </Box>
                </Box>

                <Box>
                  <Text fontWeight='bold' fontStyle="italic" fontSize='33px'>Can Virat Kohli Get Back Among The Runs Before T20 World Cup In Australia?</Text>
                  <Box display='flex'>
                    <Text color='red' mb={2} fontSize={15} textDecoration="underline" >AKSHAY SAWAI</Text><span>/ last updated today</span>
                  </Box>

                  <Box display='flex' width='100%' gap='20px' justifyContent='space-between'>
                    <Box>
                      <Text>When critics say, “the performance lacked soul” or insist that there was nothing technica­lly wrong with a performance but it somehow didn’t come together, they are pointing to the existence of the opposite of being out of form—being in the ‘zone’.</Text>
                      <Text>By announcing on Twitter that he was stepping down from the India T20 captaincy, he may have played into BCCI’s hands</Text>
                    </Box>

                    <Box mt={2} mb={2} border='0.5px solid pink'></Box>
                    <Text>
                      <ul>
                        <li> Virat Kohli, India's biggest batting hope, is undergoing the longest drought in his career.</li>
                        <li> Physically, Virat Kohli doesn’t appear to be struggling, but the first mistake you make tends to be your last.</li>
                      </ul>
                    </Text>
                  </Box>
                </Box>
                <Box width='100%' ml={2} mr={2} border='0.5px solid pink'></Box>
                <Box display="flex">

                  <Box width='50%' margin='10px' >
                    <Image src='https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1660803040.webp' />
                    <Text color='red' fontSize='15px'>OPINION</Text>
                    <Text fontWeight='bold' fontStyle='italic' fontSize='17px' textDecoration='underline'>Are We Witnessing Virat Kohli's End In Cricket?</Text>
                    <Box display='flex'>
                      <Text color='red' mb={2} fontSize={15} textDecoration="underline" >SURESH MENON</Text><span>/ last updated today</span>
                    </Box>
                    <Text>Physically, Virat Kohli doesn’t appear to be struggling, but as it often happens when you are out of form, the first mistake you make tends to be your last.</Text>

                    <Text margin='20px' fontSize='18px' textDecoration='underline'>
                      <ul >
                        <li>One Good Innings Is All It Takes For Virat Kohli To Come Back To Form: Mohammad Azharuddin</li>
                      </ul>
                    </Text>
                  </Box>

                  <Box mt={2} mb={2} border='0.5px solid pink'></Box>

                  <Box width="50%" margin='10px'>
                    <Text color='red' fontSize='15px'>OPINION</Text>
                    <Text fontWeight='bold' fontStyle='italic' fontSize='17px' textDecoration='underline'>Why Virat Kohli May Have Played Into BCCI’s Hands</Text>
                    <Box display='flex'>
                      <Text color='red' mb={2} fontSize={15} textDecoration="underline" >ANAND VASU</Text><span>/ last updated today</span>
                    </Box>
                    <Box display='flex' gap='30px' >
                      <Box>
                        <Text>
                          By announcing on Twitter that he was stepping down from the India T20 captaincy, he may have played into BCCI’s hands
                        </Text>
                      </Box>
                      <Box>
                        <Image width='700px' height='120px' src='https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1660805622.webp' />
                      </Box>
                    </Box>

                    <Box mt={3} display='flex' gap='30px' backgroundColor='pink' >
                      <Box>
                        <Text color='red' fontSize='15px'>OPINION</Text>
                        <Text mt={2} fontWeight='bold' fontStyle='italic' fontSize='16px' textDecoration='underline'>Virat Kohli's Loss Of Form: Why Good Form Or Writing Is Akin To Divine Intervention</Text>
                        <Text mt={2} color='red' fontSize={15} textDecoration="underline" >ANAND VASU</Text><span>/ last updated today</span>
                      </Box>
                      <Box>
                        <Text>In the world of sports and writing, it is hard to explain even in life whether your luck shines because you work hard on your form, or whether your form arrives at the right time when luck sides with you.</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
          }
          <Box border='0.5px solid pink'></Box>

          {
            state.isLoading ?
              <Box width="25%" margin='5px'>

                <Skeleton fontSize='20px' />
                <Skeleton height={200} />
                <Skeleton fontSize='20px' />
                <Skeleton height={200} />
                <Skeleton fontSize='20px' />
                <Skeleton height={200} />
                <Skeleton fontSize='20px' />
                <Skeleton height={200} />
                <Skeleton fontSize='20px' />
                <Skeleton height={200} />

              </Box>
              :

              <Box width="25%" margin='5px'  >
                <Box>

           
            
                <Text color='teal' fontWeight='medium' fontSize='20px'>INDIAN POLITCS</Text>
                <Box border='0.5px solid tomato'></Box>
                <Flex w={['auto','85vw','85vw','auto']} mt={2}>
                  <Box >
                
                  {
                    state.politics.map((item) => {
                      return (
                        <>
                          <Link to='/politics'>
                            <Image src={item.urlToImage} />
                          </Link>
                          <Text>{item.title}</Text>

                        </>
                      )
                    })
                  }
                    </Box>
                </Flex>
                </Box>

              </Box>
          }
        </Flex>
        <Box border='0.5px solid red'></Box>
       

        {
          state.isLoading ?
            <Box>

              <Skeleton width={`100%`} height={470} />

            </Box> : <Carouselll />
        } 


 
        <Flex direction={['column','column','row','row']}    gap='10px'>

          {
            state.isLoading ?
           
              <Box width={`25%`}   margin='5px'>
        <Skeleton height={50}/>

                <Skeleton  height={200} />
                <Skeleton  height={100} fontSize='40px' />
                <Skeleton  fontSize='20px' />

                <Skeleton  height={200} />
                <Skeleton  height={100} fontSize='40px' />
                <Skeleton  fontSize='20px' />

                <Skeleton  height={200} />
                <Skeleton  height={100} fontSize='40px' />
                <Skeleton  fontSize='20px' />

                <Skeleton  height={200} />
                <Skeleton  height={100} fontSize='40px' />
                <Skeleton  fontSize='20px' />

                <Skeleton  height={200} />
                <Skeleton  height={100} fontSize='40px' />
                <Skeleton  fontSize='20px' />

              </Box>
              :

              <Box width="25%" margin='5px' >
                <Box>
                <Text color='teal' fontWeight='medium' fontSize='20px'>CRYPTO COINS</Text>
                <Box border='0.5px solid tomato'></Box>
                <Box w={['auto','85vw','auto','auto']}>
                <Box  mt={2}>

                  {
                    state.crypto.map((item) => {
                      return (
                        <>
                          <Link to='/crypto'>
                            <Image mt={2} src={item.urlToImage} />
                          </Link>
                          <Text>{item.title}</Text>
                          <Tag gap='10px'>
                            <Text>{item.publishedAt}</Text>
                            <Text>
                              <NavLink

                                key={item.id}
                                to={`/${item.category}/${item.id}`}
                              >
                                <Badge variant='outline' color="violet" colorScheme='green'>Read More</Badge>
                              </NavLink>

                            </Text>
                          </Tag>
                        </>
                      )
                    })
                  }
                </Box>
                </Box>
</Box>
              </Box>

          }

          <Box mt={2} mb={2} border='0.5px solid pink'></Box>

          {
            state.isLoading ?
              <Box width={`47%`} margin='5px'>
                  <Skeleton height={50}/>

                <Skeleton  height={350} />
                <Skeleton height={100} />
                <Skeleton fontSize='20px' />
                <Skeleton height={350} />
                <Skeleton height={100} />
                <Skeleton fontSize='20px' />
                <Skeleton height={350} />
                <Skeleton height={100} />
                <Skeleton fontSize='20px' />
                <Skeleton height={350} />
                <Skeleton height={100} />
                <Skeleton fontSize='20px' />
                <Skeleton height={350} />
                <Skeleton height={100} />
                <Skeleton fontSize='20px' />

              </Box>
              :



              <Box width='48%'>
                <Box>
                <Text color='teal' fontWeight='medium' fontSize='20px'>BUSINESS & MONEY</Text>
                <Box border='0.5px solid tomato'></Box>
                <Box  w={['auto','85vw','auto','auto']}>


                
                <Box  mt={2}>

                  {
                    state.business.map((item) => {
                      return (
                        <>
                          <Link to='/business'>
                            <Image src={item.urlToImage} />
                          </Link>
                          <Text>{item.title}</Text>
                          <Tag gap='10px'>
                            <Text>{item.publishedAt}</Text>
                            <Text>
                              <NavLink

                                key={item.id}
                                to={`/${item.category}/${item.id}`}
                              >
                                <Badge variant='outline' colorScheme='green'>Read More</Badge>
                              </NavLink>

                            </Text>
                          </Tag>

                        </>
                      )
                    })
                  }
                </Box>
                <Box border='0.5px solid tomato'></Box>
                <Text fontWeight='medium' fontSize='20px'>RBI Lifts Restrictions Imposed On American Express; Allows Onboarding Of New Customers</Text>
                <Text margin='10px'>
                  <ul>
                    <li>How An Unpaid Loan Aided Adani To Make Hostile Takeover Bid For NDTV</li>
                    <li>Why Are Indian IT Companies Withholding Their Employee’s Variable Salary</li>
                  </ul>
                </Text>
                </Box>
                </Box>
              </Box>
          }

          <Box mt={2} mb={2} border='0.5px solid pink'></Box>
          {
            state.isLoading ?
              <Box width={`25%`}  margin='5px'>

<Skeleton height={50}/>
                <Skeleton height={200} />
                <Skeleton  height={100} fontSize='40px' />
                <Skeleton  fontSize='20px' />
                <Skeleton  height={200} />
                <Skeleton  height={100} fontSize='40px' />
                <Skeleton  fontSize='20px' />
                <Skeleton  height={200} />
                <Skeleton  height={100} fontSize='40px' />
                <Skeleton  fontSize='20px' />
                <Skeleton  height={200} />
                <Skeleton  height={100} fontSize='40px' />
                <Skeleton  fontSize='20px' />
                <Skeleton  height={200} />
                <Skeleton  height={100} fontSize='40px' />
                <Skeleton  fontSize='20px' />

              </Box>
              :

              <Box width="25%" margin='5px' >
                <Box>
                <Text color='teal' fontWeight='medium' fontSize='20px'>TECHNOLOGY</Text>
                <Box border='0.5px solid tomato'></Box>
                <Flex w={['auto','85vw','auto','auto']}>
                <Box  mt={2}>

                  {
                    state.tech.map((item) => {
                      return (
                        <>
                          <Link to='/tech'>
                            <Image mt={2} src={item.urlToImage} />
                          </Link>
                          <Text>{item.title}</Text>
                          <Tag gap='10px'>
                            <Text>{item.publishedAt}</Text>
                            <Text>
                              <NavLink

                                key={item.id}
                                to={`/${item.category}/${item.id}`}
                              >
                                <Badge variant='outline' color="violet" colorScheme='green'>Read More</Badge>
                              </NavLink>

                            </Text>
                          </Tag>
                        </>
                      )
                    })
                  }
                </Box>
                </Flex>
</Box>
              </Box>
          }
        </Flex>

         <Box border='0.5px solid red'></Box>

        {
          state.isLoading ?

            <Box mt={2}>
              <Skeleton height={50} fontSize={30}/>
              <Box width={`22%`}>
                <Skeleton  height={200} width={300} />
                <Skeleton />
                <Skeleton fontSize={20} />
                <Skeleton fontSize={20} />
              </Box>
            </Box> :
<>

 <Text color='teal' fontWeight='medium' fontSize='20px'>ENTERTAINMENT & MOVIES</Text>
            <Box  >
             
              <Box border='0.5px solid tomato'></Box>
              <Box display='flex'  justifyContent='space-around' mt={2}>

                {
                  state.entertainment.map((item) => {
                    return (
                      <>
                        <Box width='23%'>
                          <Link to='/movies'>
                            <Image width="300px" height='200px' src={item.urlToImage} />
                          </Link>

                          <Text color='red' >OUTLOOK ENTERTAINMENTS</Text>


                          <Link to='/entertain'>
                            <Text textDecoration='underline' mb={2} mt={3} fontWeight='medium'>{item.title}</Text>
                          </Link>


                          <Tag gap='10px'>
                            <Text >{item.publishedAt}</Text>
                            <Text>
                              <NavLink

                                key={item.id}
                                to={`/${item.category}/${item.id}`}
                              >
                                <Badge variant='outline' color="violet" colorScheme='green'>Read More</Badge>
                              </NavLink>
                            </Text>
                          </Tag>
                          <Text >{item.content}</Text>
                        </Box>
                      </>
                    )
                  })
                }
              </Box>

            </Box>
            </>
        }
        <Box border='0.5px solid red'></Box>
      
         <Flex direction={['column','column','row','row']}  gap='10px'>

          {
            state.isLoading ?
              <Box width={`40%`}>

                <Skeleton />
                <Skeleton height={400} />
                <Skeleton height={50} />
                <Skeleton fontSize={20} />

              </Box>
              :

              <Box width="40%" margin='5px' >
                <Text color='teal' fontWeight='medium' fontSize='20px'>SPORTS</Text>
                <Box border='0.5px solid tomato'></Box>
                <Box w={['auto','85vw','auto','auto']}>


          
                <Box mt={2}>

                  {
                    state.sports.map((item) => {
                      return (
                        <>
                          <Link to='/sports'>
                            <Image src={item.urlToImage} />
                          </Link>
                          <Text>{item.title}</Text>
                          <Tag gap='10px'>
                            <Text>{item.publishedAt}</Text>
                            <Text>
                              <NavLink

                                key={item.id}
                                to={`/${item.category}/${item.id}`}
                              >
                                <Badge variant='outline' color="violet" colorScheme='green'>Read More</Badge>
                              </NavLink>

                            </Text>
                          </Tag>

                        </>
                      )
                    })
                  }
                  <Box border='0.5px solid tomato' mt={2}></Box>
                  <Box mt={2}>
                    <Link display='flex' to='/politics'>
                      <Text fontWeight='bold' fontStyle='italic' color='sky' textDecoration='underline'>NEXT CM OF BIHAR?</Text>
                      <Image width='380px' m={3} src='https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1660793147.jpg' />

                    </Link>

                  </Box>
                </Box>
</Box>
              </Box>
          }
          <Box mt={2} mb={2} border='0.5px solid pink'></Box>



          {
            state.isLoading ?
              <Box width={`30%`}>

                <Skeleton />
                <Skeleton height={300} />
                <Skeleton height={50} />
                <Skeleton fontSize={20} />

              </Box>
              :

              <Box width='30%'>
                <Text color='teal' fontWeight='medium' fontSize='20px'>HEALTHY LIFE</Text>
                <Box border='0.5px solid tomato'></Box>

                <Box w={['auto','85vw','auto','auto']}>
                <Box mt={2}>

                  {
                    state.health.map((item) => {
                      return (
                        <>
                          <Link to='/health'>
                            <Image src={item.urlToImage} />
                          </Link>
                          <Text>{item.title}</Text>
                          <Tag gap='10px'>
                            <Text>{item.publishedAt}</Text>
                            <Text>
                              <NavLink

                                key={item.id}
                                to={`/${item.category}/${item.id}`}
                              >
                                <Badge variant='outline' colorScheme='green'>Read More</Badge>
                              </NavLink>

                            </Text>
                          </Tag>

                        </>
                      )
                    })
                  }
                </Box>
               
                <Box border='0.5px solid tomato'></Box>
                <Text fontWeight='medium' fontSize='20px'>Can We Agree To Disagree And Reserve Our Right To Question?</Text>
                <Image src='https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1661409687.webp' />
                <Text margin='10px'>
                  <ul>
                    <li>The Craft Of Salman Rushdie And His Belief That Writers Must Tackle Larger Issues Of The Day</li>
                    <li>JK Rowling Gets Death Threats After Condemning Attack On Salman Rushdie</li>
                    <li>Attack On Salman Rushdie Manifests Barbarism In The Name Of Religion: Taslima Nasrin</li>
                  </ul>
                </Text>
                <Image width='350px' src='https://imgnew.outlookindia.com/public/uploads/articles/2020/4/14/Outlook.jpg' />
 </Box>
              </Box>
          }

          <Box mt={2} mb={2} border='0.5px solid pink'></Box>

          {
            state.isLoading ?
              <Box width={`30%`}>

                <Skeleton />
                <Skeleton height={300} />
                <Skeleton height={50} />
                <Skeleton fontSize={20} />

              </Box>
              :

              <Box width="30%" margin='5px' >
                <Text color='teal' fontWeight='medium' fontSize='20px'>SCIENCE</Text>
                <Box border='0.5px solid tomato'></Box>
                <Box w={['auto','85vw','auto','auto']}>
                <Box mt={2}>

                  {
                    state.science.map((item) => {
                      return (
                        <>
                          <Link to='/science'>
                            <Image src={item.urlToImage} />
                          </Link>

                          <Text>{item.title}</Text>
                          <Tag gap='10px'>
                            <Text>{item.publishedAt}</Text>
                            <Text>
                              <NavLink

                                key={item.id}
                                to={`/${item.category}/${item.id}`}
                              >
                                <Badge variant='outline' color="violet" colorScheme='green'>Read More</Badge>
                              </NavLink>

                            </Text>
                          </Tag>
                        </>
                      )
                    })
                  }
                  <Box mt={2}>
                    <Image src='https://imgnew.outlookindia.com/uploadimage/library/free_files/jpg/1895x3_2022_08_06_022449.jpg' />
                  </Box>
                </Box>
</Box>
              </Box>
          }
        </Flex>  
          
      </SkeletonTheme>
    </>
  )
}

export default Home

