import { ISearchItem } from '../interfaces/search-item.interface';

export class BookItem implements ISearchItem {
  public title: string;
  public imageUrl: string;

  constructor(bookDetails: any) {
    this.createBook(bookDetails);
  }

  createBook(bookDetails: any): void {
    this.title = bookDetails['volumeInfo']['title'];
    this.imageUrl = bookDetails['volumeInfo']['imageLinks']['thumbnail'];
  }

}
