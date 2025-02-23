import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthStore} from '../service/auth.store';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly auth: AuthStore,
    private readonly toast: ToastrService,
  ) {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    // method 'ngOnInit' is empty
  }

  login() {
    const val = this.form.value;

    this.auth.login(val.username, val.password)
      .subscribe(
        (exist) => {
          if(exist) {
            this.toast.info(val.username, "Welcome back");
            sessionStorage.setItem("auth_data", val.username);

            this.router.navigateByUrl("/");
          } else {
            this.toast.warning("Username and/or Password not correct.", "Login failed");
          }
        },
        error => {
          this.toast.error(error.message, "Error Message");
          this.toast.error(error.status, "Error Status Code");

          console.log(error.message);
        }
      );
  }

}
