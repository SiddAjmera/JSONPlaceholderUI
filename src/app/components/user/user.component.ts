import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { IUser } from './../../models/user';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: IUser;

  constructor(private _userService: UserService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      let username = params['username'];
      this._userService.getUserBy('username', username).subscribe((user: IUser) => {
        this.user = user;
      });
    });
  }

  public get mapURL() {
    return this.sanitizer
               .bypassSecurityTrustResourceUrl('http://maps.google.com/maps?q=' + this.user.address.geo.lng + ', ' + this.user.address.geo.lat + '&z=15&output=embed');
  }

}
