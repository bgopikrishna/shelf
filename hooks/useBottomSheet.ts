import { useDisclosure } from '@chakra-ui/react'

type UseBottomSheetReturns = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

const useBottomSheet = (openByDefault = false): UseBottomSheetReturns => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure({
    isOpen: openByDefault
  })

  return { isOpen, onOpen, onClose, onToggle }
}

export default useBottomSheet
