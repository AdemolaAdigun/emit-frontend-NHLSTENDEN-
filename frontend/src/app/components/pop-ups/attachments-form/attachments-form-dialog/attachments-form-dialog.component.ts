import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  attachment:any;
}

@Component({
  selector: 'app-attachments-form-dialog',
  templateUrl: './attachments-form-dialog.component.html',
  styleUrls: ['./attachments-form-dialog.component.css']
})
export class AttachmentsFormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AttachmentsFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
