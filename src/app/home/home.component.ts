import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Post} from '../model/post';
import {Observable} from 'rxjs';
import {PostsStore} from '../service/posts.store';
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(
    private readonly postsStore: PostsStore,
    private readonly router: Router,
  ) {

  }

  ngOnInit() {
    const username = sessionStorage.getItem("auth_data");

    if (!username) {
      this.router.navigateByUrl("/login");
    } else {
      this.postsStore.loadAllPosts()
      this.reloadPosts();
    }

  }

  reloadPosts() {

    this.posts$ = this.postsStore.getAllPosts();

  }

}
