import {Component, OnInit} from '@angular/core';
import {AuthStore} from './service/auth.store';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent implements OnInit {
  protected title: string = "";

  constructor(
    public auth: AuthStore,
    private readonly router: Router,
  ) {
    // empty constructor
  }

  ngOnInit() {
    window.setTimeout(() => this.title = "Welcome to Post Demo Angular App", 100)
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login").then(r => []);
  }
}
