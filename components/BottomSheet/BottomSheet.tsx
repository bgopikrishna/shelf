import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface BottomSheetProps extends DrawerProps {
  showFooter?: boolean
  children: ReactNode
  headerTitle?: string
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  showFooter,
  headerTitle,
  ...props
}) => {
  return (
    <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} {...props}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          {headerTitle && <DrawerHeader>{headerTitle}</DrawerHeader>}

          <DrawerBody>{children}</DrawerBody>

          {showFooter && (
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          )}
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default BottomSheet
