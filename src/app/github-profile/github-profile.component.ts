import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
     // private route: ActivatedRoute,
     private router: Router) { }

  submit () {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

  ngOnInit() {
  //   // if we 100% sure we won't need to change parameters while staying in the same component

  //   // let id = this.route.snapshot.paramMap.get('id');

  //   // instead of using observables and subscribing to events
  //   // then A will every time destroy the component when leaving page and recreate it when load it again
  //   // with new parameters

  //   this.route.paramMap
  //     .subscribe(params => {
  //       // console.log(params);
  //       let id = +params.get('id');

  //       console.log(id);
  //     // });
  }

}
