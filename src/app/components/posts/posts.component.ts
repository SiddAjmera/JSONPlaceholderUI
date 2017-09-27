import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IPost } from './../../models/post';
import { PostService } from './../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: IPost[];
  
  constructor(private _postService: PostService, private _route: ActivatedRoute) { }

  public ngOnInit() {
    this._route.queryParams.subscribe((queryParams) => {
      let userId = +queryParams['userId'];
      this._postService.getUserPosts(userId)
          .subscribe((posts: IPost[]) => {
            this.posts = posts;
          });
    });
  }

}
