import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailedPostComponent } from './posts/detailed-post/detailed-post.component';
import { ErrorComponent } from './error/error.component';
import { FilterPostsComponent } from './posts/filter-posts/filter-posts.component';
import { AvailablePostGuard } from './guards/available-post.guard';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsModuleComponent } from './posts-module/posts-module.component';
import { PostsComponent } from './posts/posts.component';



const routes: Routes = [
  { path: '', component: PostsModuleComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'new-post', loadComponent: () => import('./new-post/new-post.component').then((m) => m.NewPostComponent) },
  { path: 'posts/titleForm', component: FilterPostsComponent },
  { path: 'posts/:id', component: DetailedPostComponent, canActivate: [AvailablePostGuard] },
  { path: '404', component: ErrorComponent },

  { path: '**', component: ErrorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
