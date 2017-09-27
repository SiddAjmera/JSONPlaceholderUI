import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { AlbumComponent } from '../components/album/album.component';
import { AlbumsComponent } from '../components/albums/albums.component';
import { PostComponent } from '../components/post/post.component';
import { PostsComponent } from '../components/posts/posts.component';
import { TodosComponent } from '../components/todos/todos.component';
import { UserComponent } from '../components/user/user.component';

const appRoutes: Routes = [
  { path: ':username', component: UserComponent, children: [
    { path: 'todos', component: TodosComponent, pathMatch: 'full' },
    { path: 'albums', component: AlbumsComponent, pathMatch: 'full', children: [
      { path: ':id', component: AlbumComponent, pathMatch: 'full' }
    ] },
    { path: 'posts', component: PostsComponent, pathMatch: 'full', children: [
      { path: ':id', component: PostComponent, pathMatch: 'full' }
    ] }
  ] },
  { path: '', redirectTo: '/:username', pathMatch: 'full' },
  { path: '**', redirectTo: '/:username', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
