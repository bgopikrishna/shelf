import { BookSearchItem } from './BookItem'

export type BookSearchResponseType = {
  items: BookSearchResponseItemType[]
  kind: string
  totalItems: number
}

export type BookSearchResponseItemType = {
  accessInfo: Record<string, unknown>
  etag: string
  id: string
  kind: string
  saleInfo: Record<string, unknown>
  searchInfo: Record<string, unknown>
  selfLink: string
  volumeInfo: BookSearchItem
}
