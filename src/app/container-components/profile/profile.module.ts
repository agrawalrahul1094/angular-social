import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileItemModule } from 'src/app/presentational-components/profile-item/profile-item.module';
import { ProfileResolver } from './profile-resolver';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ProfileItemModule
  ],
  providers: [
    ProfileResolver
  ]
})
export class ProfileModule { }
