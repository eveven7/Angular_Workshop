import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { PostsService } from './posts.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor(private postsService: PostsService) {}

  uniqueTitle: AsyncValidatorFn = (
    control: AbstractControl,
  ): Observable<ValidationErrors | null> => {
    return this.postsService.findPostsByTitle(control.value).pipe(
      map((res) => {
        if (res.length) {
          return { uniqueTitle: true };
        } else {
          return null;
        }
      }),
    );
  };
}
