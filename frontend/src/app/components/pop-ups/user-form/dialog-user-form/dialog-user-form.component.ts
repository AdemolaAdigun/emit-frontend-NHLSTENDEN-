import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  fName : string
  lName : string
  email : string
  pass : string
  role : string
}


@Component({
  selector: 'app-dialog-user-form',
  templateUrl: './dialog-user-form.component.html',
  styleUrls: ['./dialog-user-form.component.css']
})
export class DialogUserFormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  openDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
