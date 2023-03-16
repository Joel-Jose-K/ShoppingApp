import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image:
          'https://m.media-amazon.com/images/I/51b7XbfMIIL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 700,
      },
      {
        name: 'Pragmatic Programmer',
        author: 'David Thomas',
        image:
          'https://m.media-amazon.com/images/I/51yaxPX4BFL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 800,
      },
      {
        name: 'Art of Computer Programming',
        author: 'Donald John Fuller and Donald Knuth',
        image:
          'https://m.media-amazon.com/images/I/81ZF4SE6CJS._AC_UY327_FMwebp_QL65_.jpg',
        amount: 1800,
      },
      {
        name: 'Introduction to Algorithms',
        author: 'T Cormen',
        image:
          'https://m.media-amazon.com/images/I/41VndKVtiXL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 2800,
      },
    ];
  }
}
