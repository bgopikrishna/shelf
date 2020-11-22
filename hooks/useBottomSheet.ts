import { useDisclosure } from '@chakra-ui/react'
import { UseDisclosureReturn } from '@chakra-ui/react/dist/useDisclosure'

interface UseBottomSheetReturns extends UseDisclosureReturn {}

const useBottomSheet = (): UseBottomSheetReturns => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  return { isOpen, onOpen, onClose, onToggle }
}

export default useBottomSheet
