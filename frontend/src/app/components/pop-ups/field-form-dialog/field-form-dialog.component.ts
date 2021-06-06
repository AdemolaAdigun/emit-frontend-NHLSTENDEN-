import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  componentName: string;
  fieldName: string;
}

@Component({
  selector: 'app-field-dialog',
  templateUrl: './field-dialog.component.html',
  styleUrls: ['./field-dialog.component.css']
})
export class FieldFormDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FieldFormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
