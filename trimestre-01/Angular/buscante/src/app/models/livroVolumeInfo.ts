import { ImageLinks } from "./interfaces";

export class LivroVolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    previewLink: string;
    thumbnail: ImageLinks;

    constructor(items) {
        this.title = items.volumeInfo?.title,
        this.authors = items.volumeInfo?.authors,
        this.publisher = items.volumeInfo?.publisher,
        this.publishedDate = items.volumeInfo?.publishedDate,
        this.description = items.volumeInfo?.description,
        this.previewLink = items.volumeInfo?.previewLink,
        this.thumbnail = items.volumeInfo?.imageLinks?.thumbnail
    }
}