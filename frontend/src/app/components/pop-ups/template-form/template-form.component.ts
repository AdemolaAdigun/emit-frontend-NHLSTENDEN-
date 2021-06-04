import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TemplateFormDialogComponent} from "./template-form-dialog/template-form-dialog.component";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public templateName : string | undefined;

  constructor(public dialog: MatDialog, ) {}

  templateOpenDialog(): void {
    const dialogRef = this.dialog.open(TemplateFormDialogComponent,
      {data: { templateName: this.templateName}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.templateName = result});
  }

  ngOnInit(): void {
  }

}
