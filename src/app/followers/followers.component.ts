import { ActivatedRoute } from '@angular/router';
import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.less']
})
export class FollowersComponent implements OnInit {
  constructor(
    private server: FollowersService,
    private route: ActivatedRoute
  ) {}

  followers: any;

  ngOnInit() {
    combineLatest(this.route.paramMap, this.route.queryParamMap)
      .pipe(
        switchMap(combined => {
          const id = combined[0].get('id');
          const page = combined[1].get('page');

          return this.server.getAll();
        })
      )
      .subscribe(followers => {
        this.followers = followers;
      });

    this.route.paramMap.subscribe(params => {});
    this.route.queryParamMap.subscribe(params => {});

    // let page = this.route.snapshot.queryParamMap.get("page");
    // console.log(page);
  }
}
