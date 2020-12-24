import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public profile: any;
  private streamSubscription = new Subscription();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.streamSubscription.add(
      this.route.data
        .pipe(map(data => data['profile']))
        .subscribe((result: any) => this.profile = result)
    );
  }

  ngOnDestroy() {
    this.streamSubscription.unsubscribe();
  }

}
