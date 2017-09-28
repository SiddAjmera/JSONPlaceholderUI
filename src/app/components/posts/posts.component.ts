import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";

import { IPost } from './../../models/post';
import { PostComponent } from './../post/post.component';
import { PostService } from './../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: IPost[];
  public isLoading: boolean = true;

  constructor(
    private _postService: PostService, 
    private _route: ActivatedRoute, 
    public dialog: MdDialog
  ) { }

  public ngOnInit() {
    this._route.queryParams.subscribe((queryParams) => {
      let userId = +queryParams['userId'];
      this._postService.getUserPosts(userId)
        .subscribe((posts: IPost[]) => {
          this.posts = posts;
          this.isLoading = false;
        });
    });
  }

  public openDialog(selectedPost: IPost): void {
    let dialogRef = this.dialog.open(PostComponent, { data: selectedPost });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
