import {NgModule} from '@angular/core';

import {MatButtonModule, MatButtonToggleModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonToggleModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule {
}
