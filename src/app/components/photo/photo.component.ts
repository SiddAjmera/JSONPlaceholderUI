import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";

import { IPhoto } from './../../models/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit{

  constructor(
    public dialogRef: MdDialogRef<PhotoComponent>,
    @Inject(MD_DIALOG_DATA) public photo: IPhoto
  ) { }

  public ngOnInit() {
    console.log(this.photo);
  }

}
