import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.scss']
})
export class DetailedPostComponent {
  post$?: Observable<Post>


  constructor(private postsService: PostsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get("id");
      if (id != null) {
        this.post$ = this.postsService.getSinglePost(id)
          .pipe(tap((post => console.log('post,', post))));
      }
    });
  }
}

