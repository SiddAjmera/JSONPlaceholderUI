import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { AlbumService } from './../../services/album/album.service';
import { IAlbum } from './../../models/album';
import { IPhoto } from './../../models/photo';
import { PhotoComponent } from './../photo/photo.component';

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
    private _albumService: AlbumService,
    public dialog: MdDialog
  ) { }

  public ngOnInit() {
    this._albumService.getAlbumPhotos(this.album.id)
        .subscribe((photos: IPhoto[]) => {
          this.photos = photos;
          this.isLoading = false;
        });
  }

  public openDialog(selectedPhoto: IPhoto): void {
    let secondDialogRef = this.dialog.open(PhotoComponent, { 
      width: '55vw',
      data: selectedPhoto
    });

    secondDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
