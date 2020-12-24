import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileItemComponent } from './profile-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProfileItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProfileItemComponent
  ],
  entryComponents: [
    ProfileItemComponent
  ]
})
export class ProfileItemModule { }
