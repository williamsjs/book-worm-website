import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BooksService } from './shared/services/books.service';
import { Book } from './shared/models/book';
import { ISearchItem } from './shared/interfaces/search-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public books: Book[];

  constructor(private booksService: BooksService) {}

  listBooks(searchInput: string): void {
    this.booksService.getBooks(searchInput)
      .subscribe(books => {
        this.books = books.map(book => this.createBook(book));
    });
  }

  createBook(book: any): Book {
    console.log(
      book['volumeInfo']['imageLinks']['thumbnail']);
    
    return new Book(
      book['volumeInfo']['title'],
      book['volumeInfo']['imageLinks']['thumbnail']
    );
  }
}
