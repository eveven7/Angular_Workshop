import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, ParamMap, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Post } from '../interfaces/post';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class AvailablePostGuard implements CanActivate {


  constructor(private postsService: PostsService, private route: ActivatedRoute){}
  
  post$?: Observable<Post>

  router: any;
 
      canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
        const id = route.paramMap.get('id');
        if (id === null) {
          return of(this.router.createUrlTree(['/posts']));
        }
        return this.postsService.getSinglePost(id).pipe(
          map(() => true),
          catchError(() => of(this.router.createUrlTree(['/posts']))),
        );
    }
  }
  



