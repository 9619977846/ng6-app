import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

export interface PeriodicElement {
userId:number,
id:number,
title: string;
body: string;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'posts-component',
  styleUrls: ['posts-component.scss'],
  templateUrl: 'posts-component.html',
})
export class PostsComponent {
  displayedColumns: string[] = ['userId','id','title', 'body'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  ELEMENT_DATA: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/posts')
    .pipe(map(res => res.json()))
    .subscribe(posts => this.doSomething(posts));
    
  }

  doSomething(posts){
   
    this.ELEMENT_DATA = posts.map(e => ({ ... e }));
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
