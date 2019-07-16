import { AuthorsService } from '../services/authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.less']
})
export class AuthorsComponent implements OnInit {
  title = 'Authors';
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {}
}
