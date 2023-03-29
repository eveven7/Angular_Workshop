import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) { }


  getPost() {
    return this.httpClient.get<Post[]>('/api/posts');
  }
  addPost(post: Post) {
    return this.httpClient.post<Post>('/api/posts', post);
  }

  findPostsByTitle(title: string) {
    return this.httpClient.get<Post[]>(`/api/posts?title=${title}`);
  }

  getSinglePost(id: string) {
    return this.httpClient.get<Post>(`/api/posts/${id}`)


  }
}
