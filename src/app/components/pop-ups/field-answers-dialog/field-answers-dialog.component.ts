import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


export interface DialogData {
  answer :string;
}
@Component({
  selector: 'app-field-answers-dialog',
  templateUrl: './field-answers-dialog.component.html',
  styleUrls: ['./field-answers-dialog.component.css']
})
export class FieldAnswersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FieldAnswersDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
