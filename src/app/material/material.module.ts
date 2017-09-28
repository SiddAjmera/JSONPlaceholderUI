import { NgModule } from '@angular/core';
import { MatListModule, MdButtonModule, MdCheckboxModule, MdDialogModule, MatGridListModule } from '@angular/material';


@NgModule({
  imports: [ MatListModule, MdButtonModule, MdCheckboxModule, MdDialogModule, MatGridListModule ],
  exports: [ MatListModule, MdButtonModule, MdCheckboxModule, MdDialogModule, MatGridListModule ]
})
export class MaterialModule { }
