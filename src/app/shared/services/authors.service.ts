import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthor } from '../interfaces/author';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorsService {

  API_ENDPOINT = '';
  constructor(private http: HttpClient) { }

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(this.API_ENDPOINT);
  }

}
