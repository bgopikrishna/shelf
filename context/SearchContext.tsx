import React, { createContext, ReactNode, useContext } from 'react'
import { BookSearchItem } from '../interfaces/BookItem'
import { searchBooks } from '../utils/searchUtils'

interface SearchContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchForBooks: (searchTerm: string) => Promise<BookSearchItem[]>
  getGoodReadsReviews: (isbn: string) => void
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

interface Props {
  children: ReactNode
}

const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const searchForBooks = async (searchTerm: string) => {
    const result = await searchBooks(searchTerm)
    return result
  }

  const getGoodReadsReviews = () => {
    const result = [{ id: 1 }]
    return result
  }

  return (
    <SearchContext.Provider value={{ getGoodReadsReviews, searchForBooks }}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext)

  if (typeof context === 'undefined') {
    throw new Error('useSearch Must be used inside a SearchContext Provider')
  }

  return context
}

export { useSearch, SearchContextProvider }
