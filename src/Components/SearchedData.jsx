import { Badge, Box, Flex, Image, Text, SimpleGrid, Button, Link } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { AppContext } from '../Contexts/Context'
import 'react-loading-skeleton/dist/skeleton.css'

const SearchedData = ({ author,
    content,
    description,
    title,
    img,
    date,
link}) => {

    const { state } = useContext(AppContext)
    return (
        <>
         <SkeletonTheme color="#202020" highlightColor="#444">

{
                        
                        state.isLoading ?
                    
                          <Box width={`60%`} margin='5px'>
                            <Skeleton height={400} />
                    
                           
                          </Box>:
            <Box>
                <Image height='250px' src={img} />
                <Text textDecoration='underline' fontWeight='medium' fontSize='20px'>{title}</Text>
                <Box display='flex' >
                    <Text>{date}</Text>
                    <Text><Badge>{author}</Badge></Text>

                </Box>
                <Link href={link} isExternal>
                    <Button backgroundColor="aqua"  >READ MORE</Button>
                </Link>
                
                
            </Box>

}
</SkeletonTheme>

        </>
    )
}

export default SearchedData