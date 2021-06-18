import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "./login.service";
import {NavigationService} from "../../services/navigation.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private loginService: LoginService,
              private navigationService: NavigationService,
              private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.resetLocalStorage();

    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public authenticate(): void {
    if (this.form.valid) {
      this.loginService.login(this.form);
    }
  }
}
