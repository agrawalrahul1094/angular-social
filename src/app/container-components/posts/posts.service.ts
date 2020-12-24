import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostsService {

  constructor(private baseService: BaseService) { }

  getPosts() {
    const url = `${environment.apiUrl}/posts/timeline?filter[where][type]=text`;
    return this.baseService.get(url);
  }

  getProfile(profileId) {
    const url = `${environment.apiUrl}/profiles/${profileId}?filter[include]=posts`;
    return this.baseService.get(url);
  }
}
