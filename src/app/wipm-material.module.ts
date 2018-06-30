import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatBadgeModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class WIPMMaterialModule {}
