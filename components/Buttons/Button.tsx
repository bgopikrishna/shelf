import React from 'react'
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react'

interface ButtonProps extends ChakraButtonProps {}

const Button = (props: ButtonProps) => {
  return <ChakraButton {...props} />
}

export default Button
