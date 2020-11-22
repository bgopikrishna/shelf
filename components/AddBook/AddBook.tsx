import { Divider, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import useBottomSheet from '../../hooks/useBottomSheet'
import BottomSheet from '../BottomSheet/BottomSheet'
import Button from '../Buttons/Button'

const AddBook: React.FC = () => {
  const { isOpen, onClose, onOpen } = useBottomSheet()
  const [inputValue, setInputValue] = useState('')

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value)

  return (
    <>
      <Button onClick={onOpen} size="lg" borderRadius="1rem">
        Add Book
      </Button>
      <BottomSheet isOpen={isOpen} onClose={onClose} headerTitle="Add a book">
        <Stack>
          <Input
            placeholder="Enter Book Name Or ISBN to search"
            type="search"
            value={inputValue}
            onChange={handleSearchInput}
          />

          <Divider orientation="horizontal" />

          <Button variant="ghost">Enter book details manually</Button>
        </Stack>
      </BottomSheet>
    </>
  )
}

export default AddBook
