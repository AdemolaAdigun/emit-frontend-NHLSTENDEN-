import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogUserFormComponent} from "./dialog-user-form/dialog-user-form.component";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public fName : string | undefined;
  public lName : string | undefined;
  public email : string | undefined;
  public pass : string | undefined;
  public role : string | undefined;

  constructor(public dialog: MatDialog, ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUserFormComponent,
      {data: { fName: this.fName, lName: this.lName, email:this.email, pass:this.pass, role:this.role}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.fName, this.lName, this.email, this.pass,this.role = result});
  }
  ngOnInit(): void {
  }

}
