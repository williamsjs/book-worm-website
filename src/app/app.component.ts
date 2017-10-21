import { Component, OnInit } from '@angular/core';

import { Book } from './shared/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public bookSearch: () => Book[];
  public bookTitle: string;

  ngOnInit() {
  }
}
