export interface BookType {
  volumeInfo: {
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    title: string;
    authors: string[];
    description: string;
    language: string;
    previewLink: string;
  };
}
