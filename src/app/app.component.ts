import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BooksService } from './shared/services/books.service';
import { Book } from './shared/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public books: string;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
  }

  listBooks(searchInput: string): void {
    this.booksService.getBooks(searchInput).subscribe(books => {
      // wire up api call
    })
    this.books = searchInput;
    
  }
}
