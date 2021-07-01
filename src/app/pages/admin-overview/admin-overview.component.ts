import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'
import {NavigationService} from "../../services/navigation.service";
import {AuthService} from "../../services/auth.service";
import {Template} from "../../classes/template";
import {User} from "../../classes/user";
import {AdminOverviewService} from "./admin-overview.service";
import {ConvertResponseToObjService} from "../../services/convert-response-to-obj.service";

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {

  public allUsers: User[];
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(
    private navigationService: NavigationService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private auth: AuthService,
    private adminOverviewService: AdminOverviewService,
    private convertResponseToObjService: ConvertResponseToObjService,
  ) {
    this.matIconRegistry.addSvgIcon(
      'close_custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/close.svg')
    )
    this.allUsers = [];
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  public logout(): void {
    this.auth.resetLocalStorage();
    this.navigationService.navigateTo('/login');
  }

  private getAllUsers(): void {
    this.adminOverviewService.getAllUsers().subscribe(
      (users: any) => {
        this.allUsers = this.convertResponseToObjService.convertToUsersArray(users);
      },
      () => alert('An error occurred when trying to load components')
    );
  }

  public deleteUser(user: User): void {
    this.adminOverviewService.deleteUsers(user.id).subscribe( data => {
      console.log(data);
      this.getAllUsers();
    })
  }
}
