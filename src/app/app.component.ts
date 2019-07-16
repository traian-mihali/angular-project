import { LogUpdateService } from './services/log-update.service';
import { FavoriteChangedEventArgs } from './star/star.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(log: LogUpdateService) {}

  title = 'Angular-app';

  viewMode = 'map';

  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];

  books;

  post = {
    title: 'Title',
    isFavorite: false
  };

  tweet = {
    body: 'tweet body',
    isLiked: false,
    likesCount: 10
  };

  loadBooks() {
    this.books = [
      { id: 1, name: 'book1' },
      { id: 1, name: 'book2' },
      { id: 1, name: 'book3' }
    ];
  }

  trackBook(index, book) {
    return book ? book.id : undefined;
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course) {
    course.name = 'new course';
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed', eventArgs);
  }
}
