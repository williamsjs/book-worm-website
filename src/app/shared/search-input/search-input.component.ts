import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();

  searchInputChange(searchTerm: string): void {
    this.inputChange.emit(searchTerm);
  }

}
