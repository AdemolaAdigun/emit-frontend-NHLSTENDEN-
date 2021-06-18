import {Injectable} from '@angular/core';
import {User} from "../classes/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public getToken(): string {
        return localStorage.getItem('token') || "{}";
    }

    public setToken(token: string): void {
        return localStorage.setItem('token', token);
    }

    public getUser(): User {
        return new User(JSON.parse(localStorage.getItem('user') || "{}"));
    }

    public setUser(user: User): void {
        localStorage.setItem('user', JSON.stringify(user));
    }

    public resetLocalStorage(): void {
        localStorage.clear();
    }

    public userInMemory(): boolean {
        return localStorage.getItem('user') !== null;
    }
}
