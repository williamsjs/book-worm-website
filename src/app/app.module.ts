import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BooksService } from './shared/services/books.service';
import { AuthorsService } from './shared/services/authors.service';
import { CoreService } from './core/core.service';

import { AppComponent } from './app.component';
import { BookSearchInputComponent } from './books/book-search-input/book-search-input.component';
import { BookListComponent } from './books/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchInputComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BooksService,
    AuthorsService,
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
