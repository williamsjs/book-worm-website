import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CoreService } from '../../core/core.service';
import { Book } from '../models/book';

@Injectable()
export class BooksService {
  private apiUrl: string;

  constructor(private http: HttpClient, private coreService: CoreService) {
    this.apiUrl = coreService.API_URL
  }

  getBooks(title: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books?title=${title}`);
  }

  getBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${bookId}`);
  }

}
