import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  ActivatedRoute,
  RouterStateSnapshot,
  ParamMap,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard implements CanActivate {
  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let token = localStorage.getItem('token');
    if (token) {
      history.go(-1);
      return false;
    }
    return true;
  }
}
