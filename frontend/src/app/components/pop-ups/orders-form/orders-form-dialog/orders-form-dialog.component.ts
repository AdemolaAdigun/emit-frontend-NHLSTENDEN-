import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {

  picker: any;
  count: any;
  tCost: any;
}
@Component({
  selector: 'app-orders-form-dialog',
  templateUrl: './orders-form-dialog.component.html',
  styleUrls: ['./orders-form-dialog.component.css']
})
export class OrdersFormDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrdersFormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
