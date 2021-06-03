import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FieldDialogComponent} from "../../components/pop-ups/field-dialog/field-dialog.component";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public fieldName : string | undefined;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(FieldDialogComponent,
      {data: { fieldName: this.fieldName}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.fieldName = result});}

    ngOnInit(): void {
  }

}
