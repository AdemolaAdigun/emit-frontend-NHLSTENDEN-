import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminOverviewService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getAllUsers(): Observable<object> {
    return this.http.get(`${environment.API_URL}users`);
  }

  public deleteUsers(id: string): Observable<object> {
    return this.http.delete(`${environment.API_URL}users/delete/${id}`);
  }

}
