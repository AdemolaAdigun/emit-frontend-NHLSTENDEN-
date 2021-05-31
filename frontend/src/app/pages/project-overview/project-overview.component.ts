import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditProjectOverviewDialogComponent} from "../../components/pop-ups/edit-project-overview-dialog/edit-project-overview-dialog.component";

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  public name : string | undefined;
  public desc : string | undefined;

  constructor(public dialog: MatDialog,) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProjectOverviewDialogComponent,
      {data: { name: this.name, desc:this.desc}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.name, this.desc = result});
  }

  ngOnInit(): void {
  }

}
