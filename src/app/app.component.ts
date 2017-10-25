import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BooksService } from './shared/services/books.service';
import { BookItem } from './shared/models/book-item';
import { ISearchItem } from './shared/interfaces/search-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public books: BookItem[];

  constructor(private booksService: BooksService) {}

  listBooks(searchInput: string): void {
    this.booksService.getBooks(searchInput)
      .subscribe(books => {
        this.books = books.map(book => this.createBook(book));
    });
  }

  createBook(book: any): BookItem {
    return new BookItem(book);
  }
}
