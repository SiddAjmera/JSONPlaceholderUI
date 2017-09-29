import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AlbumComponent } from './components/album/album.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumService } from './services/album/album.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from './material/material.module';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user/user.service';
import { TodosComponent } from './components/todos/todos.component';
import { TodoService } from './services/todo/todo.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post/post.service';
import { AppendorPipe } from './pipes/appendor/appendor.pipe';
import { PhotoComponent } from './components/photo/photo.component';
import { SafeUrlPipe } from './pipes/safe-url/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodosComponent,
    AlbumsComponent,
    PostsComponent,
    PostComponent,
    AlbumComponent,
    AppendorPipe,
    PhotoComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    AlbumService, 
    PostService, 
    TodoService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [PhotoComponent]
})
export class AppModule { }
