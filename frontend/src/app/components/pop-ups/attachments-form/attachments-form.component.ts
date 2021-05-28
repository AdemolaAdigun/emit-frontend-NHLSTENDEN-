import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AttachmentsFormDialogComponent} from "./attachments-form-dialog/attachments-form-dialog.component";

@Component({
  selector: 'app-attachments-form',
  templateUrl: './attachments-form.component.html',
  styleUrls: ['./attachments-form.component.css']
})
export class AttachmentsFormComponent implements OnInit {

  public attachment : any | undefined;

  constructor(public dialog: MatDialog, ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AttachmentsFormDialogComponent,
      {data: { attachment: this.attachment}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.attachment = result});
  }
  ngOnInit(): void {
  }

}
