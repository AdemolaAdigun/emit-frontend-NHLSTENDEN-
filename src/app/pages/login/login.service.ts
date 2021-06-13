// import {Injectable} from '@angular/core';
// import {HttpClient, HttpErrorResponse} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {environment} from '../../../environments/environment';
// import {FormGroup} from "@angular/forms";
// import {LoginObj} from "../../classes/request-objects/loginObj";
// import {AuthService} from "../../services/auth.service";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//
//   constructor(private http: HttpClient,
//               private authService: AuthService) {
//   }
//
//   public login(form: FormGroup): void {
//     this.http.post(`${environment.API_URL}/auth/login`, new LoginObj(form))
//       .subscribe(
//         response => {
//           this.authService.setToken(response.data.token);
//         }
//       );
//   }
//
// }
