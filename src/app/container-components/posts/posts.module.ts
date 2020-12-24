import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { PostListModule } from 'src/app/presentational-components/post-list/post-list.module';
import { PostsResolver } from './posts-resolver';


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    PostListModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class PostsModule { }
