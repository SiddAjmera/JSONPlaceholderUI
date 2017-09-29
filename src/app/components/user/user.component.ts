import { ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IUser } from './../../models/user';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: IUser;
  public routeLinks:any[];
  public activeLinkIndex: number = 0;
  public mapURL: string;

  constructor(private _userService: UserService, private route: ActivatedRoute) { 
    this.routeLinks = [
      { label: 'TODOS', link: 'todos' },
      { label: 'POSTS', link: 'posts' },
      { label: 'ALBUMS', link: 'albums' }
    ];
  }

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      let username = params['username'];
      this._userService.getUserBy('username', username).subscribe((user: IUser) => {
        this.user = user;
        this.mapURL = 'http://maps.google.com/maps?q=' + this.user.address.geo.lng + ', ' + this.user.address.geo.lat + '&z=15&output=embed';
      });
    });
  }

}
