import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  name: string;
  desc: string;
}

@Component({
  selector: 'app-projecr-form-dialog',
  templateUrl: './projecr-form-dialog.component.html',
  styleUrls: ['./projecr-form-dialog.component.css']
})
export class ProjecrFormDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjecrFormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
