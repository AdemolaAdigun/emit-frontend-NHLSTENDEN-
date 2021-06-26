import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class InventoryOverviewService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getComponents(): Observable<object> {
    return this.http.get(`${environment.API_URL}components`);
  }

  public getTemplates(): Observable<object> {
    return this.http.get(`${environment.API_URL}components/templates/all`);
  }

  public getFields(): Observable<object> {
    return this.http.get(`${environment.API_URL}components/getFields/all`);
  }

}
