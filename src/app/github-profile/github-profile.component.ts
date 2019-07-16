import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.less']
})
export class GithubProfileComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const username = this.route.snapshot.paramMap.get('username');
    console.log(id, username);

    // this.route.paramMap.subscribe(params => {
    //   let id = +params.get("id");
    //   console.log(id);
    // });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }
}
