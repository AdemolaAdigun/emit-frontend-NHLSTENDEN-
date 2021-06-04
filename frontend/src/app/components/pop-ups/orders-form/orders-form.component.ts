import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProjecrFormDialogComponent} from "../project-form/projecr-form-dialog/projecr-form-dialog.component";
import {OrdersFormDialogComponent} from "./orders-form-dialog/orders-form-dialog.component";


@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent implements OnInit {

  public picker: any ;
  public count: any;
  public tCost: any;

  constructor(public dialog: MatDialog, ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(OrdersFormDialogComponent,
      {data: { picker: this.picker, count:this.count, tCost:this.tCost}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.picker, this.count, this.tCost = result});
  }
  ngOnInit(): void {
  }

}
