import {FormGroup} from "@angular/forms";

export class LoginObj {
  email: string;
  password: string;

  constructor(form: FormGroup) {
    this.email = form.get("email")?.value;
    this.password = form.get("password")?.value;
  }
}
