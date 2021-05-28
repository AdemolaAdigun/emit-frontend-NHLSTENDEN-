import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProjecrFormDialogComponent} from "./projecr-form-dialog/projecr-form-dialog.component";


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  public name : string | undefined;
  public desc : string | undefined;

  constructor(public dialog: MatDialog, ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ProjecrFormDialogComponent,
      {data: { name: this.name, desc:this.desc}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.name, this.desc = result});
  }
  ngOnInit(): void {
  }

}
