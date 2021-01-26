import React, { useState } from 'react'
import { Divider, Input, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useBottomSheet from '../../hooks/useBottomSheet'
import BottomSheet from '../BottomSheet/BottomSheet'
import Button from '../Buttons/Button'
import { useSearch } from '../../context/SearchContext'
import { BookSearchItem } from '../../interfaces/BookItem'

const AddBook: React.FC = () => {
  const router = useRouter()
  const { isOpen, onClose } = useBottomSheet(true)
  const { searchForBooks } = useSearch()

  const [inputValue, setInputValue] = useState('')
  const [booksData, setBooksData] = useState<BookSearchItem[]>([])

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value)

  const handleClose = () => {
    onClose()
    router.back()
  }

  const searchBooks = async () => {
    try {
      const data = await searchForBooks(inputValue)
      setBooksData(data)
    } catch (error) {
      console.error(error)
      setBooksData([])
    }
  }

  return (
    <>
      <BottomSheet
        isOpen={isOpen}
        onClose={handleClose}
        headerTitle="Add a book"
      >
        <Stack>
          <Input
            placeholder="Enter Book Name Or ISBN to search"
            type="search"
            value={inputValue}
            onChange={handleSearchInput}
          />
          <Button type="submit" onClick={searchBooks}>
            Search
          </Button>

          <Divider orientation="horizontal" />

          {booksData.length &&
            booksData.map((bookItem) => (
              <li key={bookItem.infoLink}>{bookItem.title}</li>
            ))}

          {!booksData.length && (
            <Button variant="ghost">Enter book details manually</Button>
          )}
        </Stack>
      </BottomSheet>
    </>
  )
}

export default AddBook
