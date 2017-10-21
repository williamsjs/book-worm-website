import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoreService } from '../../core/core.service';
import { Author } from '../models/author';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorsService {

  private apiUrl: string;

  constructor(private http: HttpClient, private coreService: CoreService) {
    this.apiUrl = coreService.API_URL
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('${this.apiUrl}/authors');
  }

  getAuthor(authorId: number) : Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/authors/${authorId}`);
  }

}
