import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FormGroup} from "@angular/forms";
import {LoginObj} from "../../request-objects/loginObj";
import {AuthService} from "../../services/auth.service";
import {NavigationService} from "../../services/navigation.service";
import {Observable, Subject} from "rxjs";
import {ProfileService} from "../../services/profile.service";
import {GuardService} from "../../guard-service/guard.service";
import {User} from "../../classes/user";
import {Project} from "../../classes/project";
import {ConvertResponseToObjService} from "../../services/convert-response-to-obj.service";

@Injectable({
  providedIn: 'root'
})

export class ProjectOverviewService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getProjects(): Observable<object> {
    return this.http.get(`${environment.API_URL}projects`);
  }

}
