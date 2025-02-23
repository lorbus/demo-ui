import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Post, sortPostsById} from '../model/post';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {LoadingService} from '../loading/loading.service';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class PostsStore {

    private readonly subject = new BehaviorSubject<Post[]>([]);

    posts$: Observable<Post[]> = this.subject.asObservable();

    constructor(
      private readonly http: HttpClient,
      private readonly loading: LoadingService,
      private readonly toast: ToastrService,
    ) {
      // empty method
    }

    public loadAllPosts() {
      const loadPosts$ = this.http.get<Post[]>('/api/v1/posts')
        .pipe(
          map(response => response),
          catchError(err => {
            const message = "Could not load posts";
            this.toast.error(message);

            console.log(message, err);
            return throwError(err);
          }),
          tap(posts => this.subject.next(posts))
        );
        this.loading.showLoaderUntilCompleted(loadPosts$).subscribe();
    }

    savePost(postId: number, changes: Partial<Post>): Observable<any> {
      const posts = this.subject.getValue();

      const index = posts.findIndex(post => post.id == postId);

      const newPost: Post = {
        ...posts[index],
        ...changes,
      };

      const newPosts: Post[] = posts.slice(0);

      newPosts[index] = newPost;

      this.subject.next(newPosts);

      return this.http.put(`/api/v1/posts/${postId}`, changes).pipe(
          catchError(err => {
            const message = "Could not save post";
            this.toast.error(message);

            console.log(message, err);
            return throwError(err);
          }),
        shareReplay()
      );
    }

    getAllPosts(): Observable<Post[]> {
      return this.posts$.pipe(
        map(posts => posts
          //.filter(post => post.category == category)
          .sort(sortPostsById)
        )
      )
    }

//     filterByTag(category: string): Observable<Post[]> {
//       return this.posts$.pipe(
//         map(posts => posts
//           .filter(post => post.category == category)
//           .sort(sortPostsById)
//         )
//       )
//     }

}
