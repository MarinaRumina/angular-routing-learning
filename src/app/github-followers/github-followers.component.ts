import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {

    // subscribing different observables same time
    let obs = Observable.combineLatest([
      this.route.paramMap,  // required params [0]
      this.route.queryParamMap  // query params
    ])
    .switchMap(combined => {
      let id = combined[0].get('id'); // getting data from required params
      let page = combined[1].get('page'); // getting data from query params

      return this.service.getAll()

    })
    .subscribe(followers => this.followers = followers);

    // this.route.queryParamMap
    //   .subscribe(params => {

    // });

    // this.route.paramMap
    // .subscribe(params => {

    // });
    // -------
    // // getting required params
    // this.route.paramMap.subscribe();
    // // or
    // // let id = this.route.snapshot.paramMap.get('id');

    // // getting query params (optional params)
    // this.route.queryParamMap.subscribe();
    // // or
    // // let page = this.route.snapshot.queryParamMap.get('id');


  }
}
