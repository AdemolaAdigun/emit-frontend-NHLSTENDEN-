import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  name: string;
  desc: string;
}

@Component({
  selector: 'app-edit-project-overview-dialog',
  templateUrl: './edit-project-overview-dialog.component.html',
  styleUrls: ['./edit-project-overview-dialog.component.css']
})
export class EditProjectOverviewDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProjectOverviewDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
