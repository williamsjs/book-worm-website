import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent  {
  @Input() items: any[];

  getImage(item: any): string {
    return item.volumeInfo.imageLinks.thumbnail;
  }
}
