import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostItemModule } from '../post-item/post-item.module';



@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    PostItemModule
  ],
  exports: [
    PostListComponent
  ],
  entryComponents: [
    PostListComponent
  ]
})
export class PostListModule { }
