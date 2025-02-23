import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Post} from '../model/post';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Tag} from '../model/tag';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

  constructor(private readonly http: HttpClient) {

  }

  searchTags(search: string): Observable<Tag[]> {
    return this.http.get<Tag[]>('/api/v1/tags', {
      params: {
          filter: search,
          pageSize: "1000",
      }
    })
    .pipe(
      map(res => res),
      shareReplay(),
    );
  }

  searchTagsByName(tagName: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(`/api/v1/tags/${tagName}`, {
      params: {
          filter: tagName,
          pageSize: "1000",
      }
    })
    .pipe(
      map(res => res),
      shareReplay(),
    );
  }

  findPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`/api/v1/posts/${postId}`);
  }

  findTags(
    postId: number,
    sortOrder: string,
    pageNumber: number,
    pageSize: number,
    sortColumn: string,
  ):  Observable<Tag[]> {

    return this.http.get('/api/v1/tags', {
      params: new HttpParams()
        .set('postId', postId.toString())
        .set('sortOrder', sortOrder)
        .set('sortColumn', sortColumn)
        .set('pageSize', pageSize.toString())
        .set('pageNumber', pageNumber.toString())
    }).pipe(
      map(res => res["payload"]
        .sort((a, b) => compare(a[sortColumn], b[sortColumn], sortOrder === "asc"))
      )
    );
  }

  findAllPosts(): Observable<Post[]> {
    return this.http.get('/api/v1/posts')
      .pipe(
        map(res => res['payload'])
      );
  }

  findAllPostTags(postId: number): Observable<Tag[]> {
    return this.http.get('/api/v1/tags', {
      params: new HttpParams()
        .set('postId', postId.toString())
        .set('pageNumber', "0")
        .set('pageSize', "1000")
    }).pipe(
      map(res =>  res["payload"])
    );
  }

  loadPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`/api/v1/posts/${postId}`)
      .pipe(
        shareReplay()
      );
  }

  loadAllPostTags(postId: number): Observable<Tag[]> {
    return this.http.get<Tag[]>('/api/v1/tags', {
      params: {
        pageSize: "10000",
        postId: postId.toString(),
      }
    })
      .pipe(
        map(res => res["payload"]),
        shareReplay(),
      );
  }

  loadAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("/api/v1/posts")
      .pipe(
        map(res => res["payload"]),
        shareReplay(),
      );
  }

  savePost(postId: string, changes: Partial<Post>):Observable<any> {
    return this.http.put(`/api/v1/posts/${postId}`, changes)
      .pipe(
        shareReplay(),
      );
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

