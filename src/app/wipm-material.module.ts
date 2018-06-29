import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: []
})
export class WIPMMaterialModule {}
