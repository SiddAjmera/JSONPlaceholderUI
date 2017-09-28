import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatListModule, MatProgressBarModule, MatTabsModule, MatGridListModule, MdButtonModule, MdCheckboxModule, MdDialogModule } from '@angular/material';

@NgModule({
  exports: [ MatCardModule, MatIconModule, MatListModule, MatProgressBarModule, MatTabsModule, MatGridListModule, MdButtonModule, MdCheckboxModule, MdDialogModule ]
})
export class MaterialModule { }
