import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthGaurd implements CanActivate{

    KEY = 'test'

    constructor(private loginService: LoginService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.loginService.isAuth){
            return true
        }else{
            this.router.navigate(['/login'])
            localStorage.setItem('login', 'Please connect !')
            return false
        }
    }
}