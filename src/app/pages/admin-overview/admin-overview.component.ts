import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'
import {NavigationService} from "../../services/navigation.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {

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
  ) {
    this.matIconRegistry.addSvgIcon(
      'close_custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/close.svg')
    )
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.auth.resetLocalStorage();
    this.navigationService.navigateTo('');
  }
}
