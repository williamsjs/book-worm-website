import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../shared/services/authors.service';
import { Author } from '../../shared/models/author';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public author: Author;
  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.authorsService.getAuthor(1).subscribe(author => {
      console.log(author);
    }, err => {
      console.log(err);
      
    });
  }

}
