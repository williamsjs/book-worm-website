import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
  private searchTerm = new Subject<string>();

  ngOnInit() {
    this.searchTerm
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(term => this.inputChange.emit(term));
  }

  searchInputChange(searchTerm: string): void {
    if (searchTerm !== '') {
      this.searchTerm.next(searchTerm);
    }
  }

}
