import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class CoreService {

  public API_URL: string = environment.apiUrl;

  constructor() {}

}
