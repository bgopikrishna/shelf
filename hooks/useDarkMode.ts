import { useColorMode } from '@chakra-ui/react'

/**
 * A react hook which internally uses chakra UI colormode hook for toggling darkmode
 */
const useDarkMode = () => {
  const { colorMode, toggleColorMode: toggleDarkMode } = useColorMode()
  return { colorMode, toggleDarkMode }
}

export default useDarkMode
