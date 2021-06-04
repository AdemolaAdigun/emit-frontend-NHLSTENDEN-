import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProjecrFormDialogComponent} from "../project-form/projecr-form-dialog/projecr-form-dialog.component";
import {ComponentFormDialogComponent} from "./component-form-dialog/component-form-dialog.component";


@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css']
})
export class ComponentFormComponent implements OnInit {

  public comDesc : string | undefined;
  public comName : string | undefined;
  public template :any;

  constructor(public dialog: MatDialog, ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ComponentFormDialogComponent,
      {data: { comDesc: this.comDesc, comName:this.comName}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.comDesc, this.comName = result});
  }

  ngOnInit(): void {
  }

}
