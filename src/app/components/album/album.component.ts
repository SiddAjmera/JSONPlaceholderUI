import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { AlbumService } from './../../services/album/album.service';
import { IAlbum } from './../../models/album';
import { IPhoto } from './../../models/photo';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  public photos: IPhoto[];
  public isLoading: boolean = true;

  constructor(
    public dialogRef: MdDialogRef<AlbumComponent>,
    @Inject(MD_DIALOG_DATA) public album: IAlbum,
    private _albumService: AlbumService
  ) { }

  ngOnInit() {
    this._albumService.getAlbumPhotos(this.album.id)
        .subscribe((photos: IPhoto[]) => {
          this.photos = photos;
          this.isLoading = false;
        });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
