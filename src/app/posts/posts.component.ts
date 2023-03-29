import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private postsService: PostsService) {
  }
  ngOnInit(): void {
    this.posts$ = this.postsService.getPost();
  }
  filterPosts(filter: string) {
    this.posts$ = this.postsService
      .getPost()
      .pipe(
        map((posts) => posts.filter((post) => post.title.includes(filter))),
      );
  }
}
