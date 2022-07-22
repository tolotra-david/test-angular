import { Router } from '@angular/router';
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


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.isLogin = localStorage.getItem('login') ?? '';
  }

  signIn() {
    if (this.form.valid) {
      const data = {
        username: this.form.value.username,
        password: this.form.value.password
      };
      this.loginService.isAuthorized(data)
    }
    this.loginService.invalidMessageSubject.subscribe((r)=>{
      this.isWrongPassword = r
    })
    this.loginService.emitSubject()

  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe()
  }
}
