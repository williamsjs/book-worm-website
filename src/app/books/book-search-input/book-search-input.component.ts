import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-search-input',
  templateUrl: './book-search-input.component.html',
  styleUrls: ['./book-search-input.component.scss']
})
export class BookSearchInputComponent implements OnInit {
  @Input("searchInput") searchInput;
  @Input("searchMethod") searchMethod;

  constructor() { }

  ngOnInit() {
  }

}
