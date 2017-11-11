import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CoreService } from '../../core/core.service';
import { AuthService } from '../../core/auth.service';

@Injectable()
export class BooksService {
  private apiUrl: string;

  constructor(private http: HttpClient, private coreService: CoreService, private authService: AuthService) {
    this.apiUrl = coreService.API_URL;
  }

  getBooks(title: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books?title=${title}`,
      {headers: new HttpHeaders().set('Authorization', this.authService.getToken())});
  }

  getBook(bookId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books/${bookId}`);
  }

}
