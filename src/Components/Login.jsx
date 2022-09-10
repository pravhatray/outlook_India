import { Flex } from '@chakra-ui/react'
import { Box, Text , Input, Button, Spacer, Divider} from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Contexts/Context'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

const {setisAuth,handleLogin}=useContext(AppContext)


const [formData,setForm]=useState({email:"",password:""})
const navigate=useNavigate()
const [signUpData,setSignUpData]=useState([])



useEffect(()=>{
    axios.get(`https://sale-asos-women.herokuapp.com/signup`).then((res)=>{
        setSignUpData(res.data)
     })
},[])

const handleChange=(e)=>{
    const {name,value}=e.target

    setForm({...formData,[name]:value})

}

const handleSubmit=(e)=>{
    e.preventDefault()
    let mark=false
    let name=null
    signUpData.map((el)=>{
        if(el.email===formData.email && el.password===formData.password)
        {
            mark=true
            name=el.name
            return
        }
    })
 
    if(mark===true)
    {
        handleLogin(name)
        alert("Login successfull")
        navigate("/")
    }
    else{
        alert("login failed")
    }
}







  return (
   <>
   <Flex pt="5em">

    {/* login box */}
    <Box margin='auto' mb={3}  width={"26%"}>
     
    <FormControl >
    <Text fontSize='larger' as='b' margin='auto'>SIGN IN TO OUTLOOK</Text>
    <Spacer/>
   <br/>
    <Input 
     required="required"
     name='email' 
     value={formData.email}
     onChange={handleChange}
    fontSize='xs'
     width='400px'
      type='email' 
      size='lg'
      placeholder='E-MAIL' />
    <Spacer/>
    <br/>
    <Input 
    required="required"
     name='password' 
     value={formData.password}
     onChange={handleChange}
    fontSize='xs' 
    width='400px' 
    type='password' 
    size='lg'
    placeholder='PASSWORD' />
    <Spacer/>
   
    <FormHelperText fontSize='s' >If you are not a subscriber ?
   
        <Text textColor='blue' textDecoration='underline'> <Link to='/signUp'> Sign up </Link></Text>
   
   
    </FormHelperText>
    <Spacer/>   <br/>
    <Button disabled={formData.email==='' || formData.password===''} onClick={handleSubmit} fontSize='xs'  width='404px' color={"white"} bg={"black"} >LOG IN</Button>
</FormControl>

    </Box>

   </Flex>
   
   
   </>
  )
}

export default Login