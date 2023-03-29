import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-module',
  templateUrl: './posts-module.component.html',
  styleUrls: ['./posts-module.component.scss']
})
export class PostsModuleComponent {
  posts$!: Observable<Post[]>;
  post?: Post[];

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getPost();
  }

}
