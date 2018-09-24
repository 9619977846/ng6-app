import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts-component';
import { PostsDetailsComponent } from './postsDetails/posts-details-component';

import { PageNotFoundComponent } from './not-found-page-component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: ':post/:id', component: PostsDetailsComponent },
  { path: '',   redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

