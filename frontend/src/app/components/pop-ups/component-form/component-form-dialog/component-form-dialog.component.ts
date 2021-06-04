import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  comName: string;
  comDesc: string;
  template: any;
}

@Component({
  selector: 'app-component-form-dialog',
  templateUrl: './component-form-dialog.component.html',
  styleUrls: ['./component-form-dialog.component.css']
})
export class ComponentFormDialogComponent implements OnInit {
  template: any;

  constructor(public dialogRef: MatDialogRef<ComponentFormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
