import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostsResolver } from './posts-resolver';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: { posts: PostsResolver }
  },
  {
    path: ':profileId',
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
