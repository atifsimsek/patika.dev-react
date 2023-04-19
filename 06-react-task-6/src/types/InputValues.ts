export interface InputValues {
  search: string;
  filter: 'partial' | 'full' | 'free-ebooks' | 'paid-ebooks' | 'ebooks';
  printType: 'all' | 'books' | 'magazines';
  sortBy: 'relevance' | 'newest';
}
