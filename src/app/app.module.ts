import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AlbumComponent } from './components/album/album.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumService } from './services/album/album.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user/user.service';
import { TodosComponent } from './components/todos/todos.component';
import { TodoService } from './services/todo/todo.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodosComponent,
    AlbumsComponent,
    PostsComponent,
    PostComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AlbumService, 
    PostService, 
    TodoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
