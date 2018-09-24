import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';

export interface PeriodicElement {
  title: string;
  body: string;
  }

@Component({
  selector: 'posts-details-component',
  styleUrls: ['posts-details-component.scss'],
  templateUrl: 'posts-details-component.html',
})
export class PostsDetailsComponent {
  id:number;
  postDetails:any;
  constructor(http: Http,private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => { 
      this.id = +params['id']; 
    }); 
    http.get('http://jsonplaceholder.typicode.com/posts/'+ this.id)
    .pipe(map(res => res.json()))
    .subscribe(post => this.postDetails = post);
    
  }
}

/** Builds and returns a new User. */
