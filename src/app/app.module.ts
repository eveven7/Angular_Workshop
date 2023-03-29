import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { PostsModuleComponent } from './posts-module/posts-module.component';
import { FilterPostsComponent } from './filter-posts/filter-posts.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  declarations: [AppComponent,
    ErrorComponent,
        PostsComponent,
    PostsModuleComponent,
    FilterPostsComponent,
    DetailedPostComponent,
    MainMenuComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
