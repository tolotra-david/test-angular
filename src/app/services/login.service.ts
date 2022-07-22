import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  invalidMessageSubject = new Subject<boolean>();

  private login = {
    name: 'test',
    password: 'test'
  };

  isAuth: boolean = false;

  constructor(private router: Router) { }

  isAuthorized(data: any) {
    const { username, password } = data;
    if (username === this.login.name && password === this.login.name) {
      this.isAuth = true;
      this.router.navigate(['/home']);
    }
  }

  emitSubject(){
    this.invalidMessageSubject.next(true);
  }
}
