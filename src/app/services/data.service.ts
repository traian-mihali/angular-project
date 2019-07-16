import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: "root"
// })
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, { title: 'new Title' })
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: Response) {
    if (err.status === 400) { return throwError(new BadInput(err)); }

    if (err.status === 404) { return throwError(new NotFoundError()); }

    return throwError(new AppError(err));
  }
}
