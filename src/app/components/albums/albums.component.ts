import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AlbumComponent } from './../album/album.component';
import { AlbumService } from "../../services/album/album.service";
import { IAlbum } from './../../models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public albums: IAlbum[];
  public isLoading: boolean = true;
  
  constructor(
    private _albumService: AlbumService, 
    private _route: ActivatedRoute,
    public dialog: MdDialog
  ) { }

  public ngOnInit() {
    this._route.queryParams.subscribe((queryParams) => {
      let userId = +queryParams['userId'];
      this._albumService.getUserAlbums(userId)
          .subscribe((albums: IAlbum[]) => {
            this.albums = albums;
            this.isLoading = false;
          });
    });
  }

  public openDialog(selectedAlbum: IAlbum): void {
    let dialogRef = this.dialog.open(AlbumComponent, { 
      width: '80vw',
      height:'60vw',
      data: selectedAlbum
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
