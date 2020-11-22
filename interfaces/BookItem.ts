import { BookReadingModes } from "../constants/enums/BookReadingModes.enum";

export interface BookItem {
    id: string;
    title: string;
    subtitle?: string;
    authors: [string];
    mode: BookReadingModes,
}