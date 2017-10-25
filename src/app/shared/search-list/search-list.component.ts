import { Component, Input } from '@angular/core';
import { ISearchItem } from '../interfaces/search-item.interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent  {
  @Input() items: ISearchItem[];

}
