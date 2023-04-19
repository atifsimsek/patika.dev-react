export interface BookType {
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
    };
    title: string;
    authors: string[];
    description: string;
    language: string;
    previewLink: string;
  };
}
