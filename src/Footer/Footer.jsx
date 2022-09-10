import React from 'react'
import { Badge, Box, Flex, IconButton, Image, Link, Tag, Text } from '@chakra-ui/react'
import {
  FaSun, FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube
} from "react-icons/fa"
const Footer = () => {
  return (
    <>

      <Flex p={2} gap={3} border='1px solid' width='100%' height='auto' backgroundColor='black' >

        <Box m={2} width='19%' >
          <Text fontStyle='italic' fontWeight='light' fontSize='13px' textColor='white'>MAIN STORIES</Text>
          <Box display='flex'>
            <Box width='30%' border='0.5px solid red'></Box>
            <Box width='30%' border='0.5px solid yellow'></Box>
          </Box>
          <Box textColor='teal' fontWeight='medium' fontSize='13' m={2} mt={3}>
            <Text mb={2} >NATIONAL</Text>
            <Text mb={2} >INTERNATIONAL</Text>
            <Text mb={2} >BUSINESS</Text>
            <Text mb={2} >OPINIONS</Text>
            <Text mb={2} >BOOK REVIEW</Text>
            <Text mb={2} >THE NEWS</Text>
            <Text mb={2} >SPORTS</Text>
            <Text mb={2} >ART</Text>
            <Text mb={2} >ENTERTAINMENT</Text>
          </Box>

        </Box>
        <Box m={2} width='19%' > <Text fontStyle='italic' fontWeight='light' fontSize='13px' textColor='white'>TRAVELLER</Text>
          <Box display='flex'>
            <Box width='30%' border='0.5px solid red'></Box>
            <Box width='30%' border='0.5px solid yellow'></Box>
          </Box>

          <Box textColor='teal' fontWeight='medium' fontSize='13' m={2} mt={3}>
            <Text mb={2} >TRAVELOGUES</Text>
            <Text mb={2} >WEEKEND BREAKS</Text>
            <Text mb={2} >HOLIDAYS WITH OT</Text>
            <Text mb={2} >PHOTO FEATURES</Text>
            <Text mb={2} >BOOK REVIEW</Text>
            <Text mb={2} >HOTELS</Text>
            <Text mb={2} >GUIDEBOOKS</Text>

          </Box>
        </Box>


        <Box m={2} width='19%' > <Text fontStyle='italic' fontWeight='light' fontSize='13px' textColor='white'>MONEY</Text>
          <Box display='flex'>
            <Box width='30%' border='0.5px solid red'></Box>
            <Box width='30%' border='0.5px solid yellow'></Box>
          </Box>
          <Box textColor='teal' fontWeight='medium' fontSize='13' m={2} mt={3}>
            <Text mb={2} >MUTUAL FUNDS</Text>
            <Text mb={2} >INSURANCE</Text>
            <Text mb={2} >EQUITY</Text>
            <Text mb={2} >FIXED ASSETS</Text>
            <Text mb={2} >BANKING</Text>
            <Text mb={2} >ASK</Text>

          </Box>
        </Box>
        <Box m={2} width='19%' > <Text fontStyle='italic' fontWeight='light' fontSize='13px' textColor='white'>BUSINESS</Text>
          <Box display='flex'>
            <Box width='30%' border='0.5px solid red'></Box>
            <Box width='30%' border='0.5px solid yellow'></Box>
          </Box>

          <Box textColor='teal' fontWeight='medium' fontSize='13' m={2} mt={3}>
            <Text mb={2} >THE BIG STORY</Text>
            <Text mb={2} >SPECIALS</Text>
            <Text mb={2} >PERSPECTIVE</Text>
            <Text mb={2} >ENTERPRISE</Text>
            <Text mb={2} >PIXSTORY</Text>
            <Text mb={2} >STRATEGY</Text>
            <Text mb={2} >MARKETS</Text>
            <Text mb={2} >C'EST LA VIE</Text>

          </Box>
        </Box>





        <Box m={2} width='13%' > <Text fontStyle='italic' fontWeight='light' fontSize='13px' textColor='white'>SOCIAL MEDIA</Text>
          <Box display='flex'>
            <Box width='30%' border='0.5px solid red'></Box>
            <Box width='30%' border='0.5px solid yellow'></Box>

          </Box>

          <Box textColor='teal' fontWeight='medium' fontSize='15' mt={3}>
            <Box display='flex'  justifyContent='space-between' mb={4}  >
              <Box >Facebook</Box>
              <Box>
              <Link href='https://www.facebook.com/Outlookindia' isExternal>
  
                <IconButton  opacity={0.5} isRound={true} icon={<FaFacebook />}/>
                </Link>
              </Box>
            </Box>
            <Box display='flex'  justifyContent='space-between' mb={4}  >
              <Box >Twitter</Box>
              <Box>  
              <Link href='https://twitter.com/outlookindia/' isExternal>
                <IconButton  opacity={0.5} isRound={true} icon={<FaTwitter />}/>
                </Link>
              </Box>
            </Box>


            <Box display='flex'  justifyContent='space-between' mb={4}  >
              <Box >Instagram</Box>
              <Box>  
              <Link href='https://www.instagram.com/outlookindia/' isExternal>
                <IconButton  opacity={0.5} isRound={true} icon={<FaInstagram />}/>
                </Link>
              </Box>
            </Box>


            <Box display='flex'  justifyContent='space-between' mb={4}  >
              <Box >YouTube</Box>
              <Box>  
              <Link href='https://www.youtube.com/user/OutlookMagazine' isExternal>
                <IconButton  opacity={0.5} isRound={true} icon={<FaYoutube />}/>
                </Link>
              </Box>
            </Box>

          </Box>


        </Box>
      </Flex>
      <Flex backgroundColor='blackAlpha.900' textColor='white'  width='100%' height='auto'>

<Box fontSize='13px' textColor='teal' display='flex' justifyContent='space-evenly' width='60%'>
<Text>About US</Text>
<Text>Contact Us</Text>
<Text>Subscribe</Text>
<Text>Compliance</Text>
<Text>Copyright & Disclaimer</Text>
<Text>Poshan</Text>
</Box>

<Box fontSize='13px' width='40%'>
<Text>@2022 Outlook Publishing India Pvt.Ltd</Text>
</Box>

      </Flex>
    </>

  )
}

export default Footer