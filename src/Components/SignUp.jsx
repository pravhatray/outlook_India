import { Flex } from '@chakra-ui/react'
import { Box, Text, Input, Button, Spacer, Divider } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {


    const [formData, setForm] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm({ ...formData, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`https://sale-asos-women.herokuapp.com/signup`, formData).then((res) => {
            console.log(res.data)
            alert("SignUp Successfull")
            setForm({ name: "", email: "", password: "" })
            navigate("/login")
        })
    }

    return (
        <>
            <Flex pt="5em">
                <Box margin='auto' mb={3} width={"26%"}>

                    <FormControl >
                        <Text fontSize='larger' as='b' margin='auto'>REGISTER YOURSELF AS A SUBSCRIBER</Text>
                        <Spacer />
                        <br />

                        <Input type='name'
                            required="required"
                            placeholder='NAME'
                            name="name"
                            fontSize='xs'
                            value={formData.name}
                            onChange={handleChange}
                            size='lg'
                        />
   <Spacer />
   <br />
                        <Input
                            required="required"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fontSize='xs'
                            type='email'
                            size='lg'
                            placeholder='E-MAIL'
                        />
                        <Spacer />
                        <br />
                        <Input
                           required="required"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            fontSize='xs'
                            type='password'
                            size='lg'
                            placeholder='PASSWORD'
                        />
                        <Spacer />


                        <Spacer />   <br />
                        <NavLink to='/login'>
                            <Button
                            disabled={formData.email==='' || formData.password===''}
                            size='lg'
                                type='submit'
                                onClick={handleSubmit}
                                fontSize='xs'
                                color={"white"}
                                bg={"black"}
                              width="340px"

                            >SIGN UP</Button>

                        </NavLink>

                    </FormControl>

                </Box>

            </Flex>


        </>
    )
}

export default SignUp