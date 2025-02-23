import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../model/post';
import {startWith, map} from 'rxjs/operators';
import {Observable, combineLatest } from 'rxjs';
import {PostsService} from '../service/posts.service';
import {LoadingService} from '../loading/loading.service';
import {Tag} from '../model/tag';

interface PostData {
  post: Post;
  tags: Tag[];
}

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {

  data$: Observable<Post>;

  activeTag: Tag;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly postsService: PostsService,
    private readonly router: Router,
    private readonly loading: LoadingService,
  ) {}

  ngOnInit() {
    const user = sessionStorage.getItem("auth_data");

    if (!user) {
      this.router.navigateByUrl("/login");
    }

    const postId = parseInt(this.route.snapshot.paramMap.get("id"));

    this.data$= this.postsService.loadPostById(postId)
      .pipe(
          startWith(null),
      );

//     const tags$ = this.postsService.loadAllPostTags(postId)
//       .pipe(
//         startWith([]),
//       );
//
//     this.data$ = combineLatest([post$, tags$])
//       .pipe(
//         map(([post, tags]) => {
//           return {
//             post,
//             tags,
//           }
//         })
//       );

    this.loading.showLoaderUntilCompleted(this.data$).subscribe();
  }

  openTag(tag: Tag) {
    this.activeTag = tag;
  }

  onBackToTags() {
    this.activeTag = null;
  }

  onBackToPosts() {
    this.activeTag = null;
    this.router.navigateByUrl("/");
  }

}
