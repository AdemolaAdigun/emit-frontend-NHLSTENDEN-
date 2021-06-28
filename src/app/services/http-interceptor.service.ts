import {Injectable} from '@angular/core';
import {NavigationService} from './navigation.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(public auth: AuthService,
              private navigationService: NavigationService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /** Checking if the system has a token set. If there is no token we send request without the bearer
     * token attached to get a 401 if the request is unauthorized. This gives us a good reason to send
     * user to the login page (there should always be some token) */
    if (this.auth.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      });
    } else if (request.url.endsWith('')) {
      // Intended empty block
    } else {
      this.handleNoToken();
    }

    return next.handle(request).pipe();
  }

  private handleNoToken(): void {
    this.navigationService.navigateTo('');
  }
}
