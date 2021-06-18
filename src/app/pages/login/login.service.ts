import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FormGroup} from "@angular/forms";
import {LoginObj} from "../../request-objects/loginObj";
import {AuthService} from "../../services/auth.service";
import {NavigationService} from "../../services/navigation.service";
import {Subject} from "rxjs";
import {ProfileService} from "../../services/profile.service";
import {GuardService} from "../../guard-service/guard.service";
import {User} from "../../classes/user";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public wrongCredentials = new Subject<boolean>();
  public awaitingLogin = new Subject<boolean>();

  constructor(private http: HttpClient,
              private navigationService: NavigationService,
              private profileService: ProfileService,
              private guardService: GuardService,
              private authService: AuthService) {
  }

  public login(form: FormGroup): void {
    this.http.post(`${environment.API_URL}auth/login`, new LoginObj(form))
      .subscribe(
        (response: any) => {
          this.authService.setToken(response['data'].token);

          let user = new User(response['data'].user);
          this.setUser(user);

          this.navigationService.navigateTo('/project-overview');
        },
        (error: HttpErrorResponse) => {
          alert('Error logging in');
        },
        () => {
          this.awaitingLogin.next(false)
        }
      );
  }

  public setUser(user: User): void {
    this.authService.setUser(user);
    this.profileService.updateUser(user);
  }

}
