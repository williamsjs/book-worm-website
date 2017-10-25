import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CoreService } from '../../core/core.service';

@Injectable()
export class BooksService {
  private apiUrl: string;

  constructor(private http: HttpClient, private coreService: CoreService) {
    this.apiUrl = coreService.API_URL;
  }

  getBooks(title: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books?title=${title}`);
  }

  getBook(bookId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books/${bookId}`);
  }

}
