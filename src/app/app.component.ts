import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BooksService } from './shared/services/books.service';
import { Book } from './shared/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public books: any[];

  constructor(private booksService: BooksService) {}

  listBooks(searchInput: string): void {
    this.booksService.getBooks(searchInput)
      .subscribe(books => {
        this.books = books;
    });
  }
}
