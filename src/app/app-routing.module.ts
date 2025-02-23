import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {LoginComponent} from './login/login.component';
import {SearchTagsComponent} from './search-tags/search-tags.component';

import {postResolver} from "./service/post.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:"search-tags",
    component: SearchTagsComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    resolve: {
      post: postResolver
    }
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
