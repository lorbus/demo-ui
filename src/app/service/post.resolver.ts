import {inject} from '@angular/core';
import {ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {PostsService} from "./posts.service";
import {Post} from "../model/post";

export function postResolver(route: ActivatedRouteSnapshot): Observable<Post> {

  const postsService = inject(PostsService);

  return postsService.findPostById(route.params['id']);

}
