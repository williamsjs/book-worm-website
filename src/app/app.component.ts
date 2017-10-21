import { Component } from '@angular/core';

import { Book } from './shared/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public bookSearch: () => Book[];

  ngOnInit() {

  }
}
