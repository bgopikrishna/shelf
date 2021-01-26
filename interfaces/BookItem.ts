import BookReadingModes from '../constants/enums/BookReadingModes.enum'

export interface BookItem {
  id: string
  title: string
  subtitle?: string
  authors: [string]
  mode: BookReadingModes
}

export interface BookSearchItem {
  title: string
  subtitle?: string
  authors: [string]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: [
    {
      type: string
      identifier: string
    }
  ]
  readingModes: {
    text: boolean
    image: boolean
  }
  pageCount: number
  printType: string
  categories: [string]
  averageRating: number
  ratingsCount: number
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
  }
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  }
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}
