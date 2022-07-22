import { Observable, Observer, Subscription } from 'rxjs';
import { LoginService } from './../../services/login.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  errorSubscription: Subscription = new Subscription

  @HostListener('window:unload')
  private onUnload(): void {
    localStorage.clear();
  }

  isWrongPassword = false;
  isLogin = '';
  invalidMessage = '';

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
    this.isLogin = localStorage.getItem('login') ?? '';
  }

  signIn() {
    if (this.form.valid) {
      const data = {
        username: this.form.value.username,
        password: this.form.value.password
      };
      this.LoginService.isAuthorized(data);
    }
    this.errorSubscription = this.LoginService.invalidMessageSubject.subscribe((res: boolean) => {
      this.isWrongPassword = res
    })

  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe()
  }
}
