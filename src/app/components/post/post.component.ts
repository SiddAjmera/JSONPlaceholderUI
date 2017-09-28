import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";

import { IComment } from './../../models/comment';
import { IPost } from './../../models/post';
import { PostService } from './../../services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public comments: IComment[];
  public isLoading: boolean = true;

  constructor(
    public dialogRef: MdDialogRef<PostComponent>,
    @Inject(MD_DIALOG_DATA) public post: IPost,
    private _postService: PostService
  ) { }

  ngOnInit() {
    this._postService.getPostComments(this.post.id)
        .subscribe((comments: IComment[]) => {
          this.comments = comments;
          this.isLoading = false;
        });
  }

}
