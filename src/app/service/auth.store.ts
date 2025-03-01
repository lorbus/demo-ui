import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, shareReplay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

const AUTH_DATA = "auth_data";

@Injectable({
    providedIn: 'root'
})
export class AuthStore {
    private readonly subject = new BehaviorSubject<string>(null);

    username$: Observable<string> = this.subject.asObservable();

    isLoggedIn$: Observable<boolean>;

    isLoggedOut$: Observable<boolean>;

    constructor(private readonly http: HttpClient) {

      this.isLoggedIn$ = this.username$.pipe(map(username => !!username));

      this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

      const username = sessionStorage.getItem(AUTH_DATA);

      if (username) {
        this.subject.next(username);
      }
    }

    login(username: string, password: string): Observable<boolean> {
      return this.http.get<boolean>("/api/v1/authors/username-password/" + username + "/" + password)
        .pipe(
            tap(exist => {
              if(exist) {
                this.subject.next(username);
                sessionStorage.setItem(AUTH_DATA, username);
              } else {
                this.logout();
              }
            }),
            shareReplay(),
        );
    }

    logout() {
      this.subject.next(null);
      sessionStorage.removeItem(AUTH_DATA);
    }

}
