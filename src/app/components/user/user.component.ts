import { IUser } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: IUser;

  constructor(private _userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let username = params['username'];
      this._userService.getUserBy('username', username).subscribe((user: IUser) => {
        this.user = user;
        console.log('Got the user as: ', this.user);
      });
    });
  }

}
