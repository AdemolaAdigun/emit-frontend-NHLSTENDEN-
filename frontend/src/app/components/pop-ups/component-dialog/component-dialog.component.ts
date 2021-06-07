import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  comName: string;
  comDesc: string;
  template: any;
}
@Component({
  selector: 'app-component-dialog',
  templateUrl: './component-dialog.component.html',
  styleUrls: ['./component-dialog.component.css']
})
export class ComponentDialogComponent implements OnInit {
  template: any;

  constructor(public dialogRef: MatDialogRef<ComponentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
