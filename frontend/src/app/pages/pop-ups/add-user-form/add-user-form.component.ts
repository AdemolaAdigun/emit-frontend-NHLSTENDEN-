import { Component, OnInit } from '@angular/core';
import {DialogAddUserComponent} from "./dialog-add-user/dialog-add-user.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

  loadDishDialog(){

  }
}
