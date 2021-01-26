import { GPB_API_KEY, GPB_SEARCH_URL } from '../constants/misc'
import { BookSearchItem } from '../interfaces/BookItem'
import { BookSearchResponseType } from '../interfaces/BookSearchTypes'
import apiHelper from './apiHelper'

function formatData(data: BookSearchResponseType) {
  const { items } = data
  const onlyVolumneInfo = items.map((item) => item.volumeInfo)
  return onlyVolumneInfo
}

export async function searchBooks(
  searchTerm: string
): Promise<BookSearchItem[]> {
  const queryParams = { q: searchTerm, key: GPB_API_KEY }

  const apiResponose = await apiHelper<BookSearchResponseType>(
    GPB_SEARCH_URL,
    queryParams
  )

  const data = formatData(apiResponose)
  return data
}

export async function searchForGoodreadsReviews(isbn?: string) {
  console.log(isbn)
}
