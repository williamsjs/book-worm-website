import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BooksService } from './shared/services/books.service';
import { AuthorsService } from './shared/services/authors.service';
import { CoreService } from './core/core.service';
import { AuthService } from './core/auth.service';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';
import { SearchListComponent } from './shared/search-list/search-list.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchListComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BooksService,
    AuthorsService,
    CoreService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
