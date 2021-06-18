import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProfileService} from "../services/profile.service";
import {NavigationService} from "../services/navigation.service";
import {AuthService} from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class GuardService implements CanActivate {
  private currentPathSource: BehaviorSubject<string[]>;
  public currentPathInformation: Observable<string[]>;
  public path: string[];
  private whitelistedPages: string[];

    constructor(private profileService: ProfileService,
                private http: HttpClient,
                private navigationService: NavigationService,
                private authService: AuthService) {
      this.currentPathSource = new BehaviorSubject<string[]>([]);
      this.currentPathInformation = this.currentPathSource.asObservable();
      this.path = [];
      this.whitelistedPages = ['login'];
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
      Promise<boolean | UrlTree> | boolean | UrlTree {
      this.path = route.routeConfig?.path?.split('/') ?? [];
      this.currentPathSource.next(route.routeConfig?.path?.split('/') ?? []);
      if (this.authService.userInMemory()) {
        if (this.authService.getUser().status === 0) {
          return true;
        }
      }
      return this.whitelistedPages.includes(this.path[0]);
    }
}
