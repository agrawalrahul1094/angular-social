
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PostsService } from '../posts/posts.service';


@Injectable()

export class ProfileResolver implements Resolve<any> {

  constructor(private postsService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.postsService.getProfile(route.params['profileId']);
  }
}
