import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FieldDialogComponent} from "./field-dialog/field-dialog.component";

export interface DialogData {
  componentName: string;
  fieldName: string;
}
@Component({
  selector: 'app-pop-ups',
  templateUrl: './pop-ups.component.html',
  styleUrls: ['./pop-ups.component.css']
})
export class PopUpsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FieldDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
