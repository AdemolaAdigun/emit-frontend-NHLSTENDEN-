import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {HttpClient} from '@angular/common/http';
import {NavigationService} from './navigation.service';
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private currentUser: User;

    constructor(private http: HttpClient, private navigationService: NavigationService) {
    }

    public whoami(): void {
        if (!this.noLoginNeeded([''])) {
            this.http.get(`${environment.API_URL}auth/whoami`).subscribe(
                () => {
                },
                () => this.navigationService.navigateTo(''),
            );
        }
    }

    private noLoginNeeded(paths: string[], queryPaths?: string[]): boolean {
        let isAllowed = false;

        paths.forEach(path => {
            if (window.location.href.endsWith(path)) {
                isAllowed = true;
                return;
            }
        });

        if(queryPaths){
            queryPaths.forEach(path => {
                if(window.location.href.includes(path)) {
                    isAllowed = true;
                    return;
                }
            });
        }
        return isAllowed;
    }

    public getCurrentUser(): User {
        if (this.getCookie() !== undefined) {
            return this.getCookie();
        }

        return this.currentUser;
    }

    public updateUser(user: User): void {
        this.currentUser = user;

        this.setCookie(user);
    }

    private setCookie(user: User): void {
        const date = new Date();

        const value = JSON.stringify(user);

        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

        document.cookie = 'user' + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
    }

    private getCookie(): User {
        const value = '; ' + document.cookie;
        const parts = value.split('; ' + 'user' + '=');

          let user: User;
          user = JSON.parse(parts.pop()?.split(';').shift() || '{}');
            return user;
    }
}
