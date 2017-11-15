import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { BooksService } from '../shared/services/books.service';
import { AuthService } from '../core/auth.service';
import { BookItem } from '../shared/models/book-item';
import { ISearchItem } from '../shared/interfaces/search-item.interface';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public books: {items: BookItem[], loading: boolean};
  private searchTerm$ = new Subject<string>();

  constructor(private booksService: BooksService,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.searchTerm$
        .distinctUntilChanged()
        .debounceTime(300)
        .subscribe(term => this.displayBooks(term));

    this.searchTerm$.subscribe(() => this.books = {items: [], loading: true});
  }

  displayBooks(searchInput: string): void {
    this.booksService.getBooks(searchInput)
      .subscribe(books => {
        this.books.items = books.map(book => this.createBook(book));
        this.books.loading = false;
    });
  }

  listBooks(searchInput: string): void {
    this.searchTerm$.next(searchInput);
  }

  createBook(book: any): BookItem {
    return new BookItem(book);
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
