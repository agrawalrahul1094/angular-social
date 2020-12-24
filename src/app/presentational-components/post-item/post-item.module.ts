import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './post-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PostItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PostItemComponent
  ],
  entryComponents: [
    PostItemComponent
  ]
})
export class PostItemModule { }
