import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlbumService } from "../../services/album/album.service";
import { IAlbum } from './../../models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public albums: IAlbum[];
  
  constructor(private _albumService: AlbumService, private _route: ActivatedRoute) { }

  public ngOnInit() {
    this._route.queryParams.subscribe((queryParams) => {
      let userId = +queryParams['userId'];
      this._albumService.getUserAlbums(userId)
          .subscribe((albums: IAlbum[]) => {
            this.albums = albums;
          });
    });
  }

}
