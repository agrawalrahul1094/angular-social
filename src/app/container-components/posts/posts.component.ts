import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  private streamSubscription = new Subscription();
  public posts: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.streamSubscription.add(
      this.route.data
        .pipe(map(data => data['posts']))
        .pipe(map(data => data['items']))
        .subscribe((result: any) => {
          this.posts = result;
        })
    );

  }

  ngOnDestroy() {
    this.streamSubscription.unsubscribe();
  }

}
