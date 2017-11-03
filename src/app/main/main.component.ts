import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BooksService } from '../shared/services/books.service';
import { BookItem } from '../shared/models/book-item';
import { ISearchItem } from '../shared/interfaces/search-item.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
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
