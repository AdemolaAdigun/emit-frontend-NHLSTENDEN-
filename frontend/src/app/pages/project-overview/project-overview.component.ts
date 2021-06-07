import { Component, OnInit } from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { EditProjectOverviewDialogComponent} from "../../components/pop-ups/edit-project-overview-dialog/edit-project-overview-dialog.component";
import { FieldDialogComponent} from "../../components/pop-ups/field-dialog/field-dialog.component";
// import { ProjectFormDialogComponent } from "../../components/pop-ups/project-form/projecr-form-dialog/projecr-form-dialog.component"

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  public edit_name : string | undefined;
  public edit_desc : string | undefined;
  public fieldName : string | undefined;
  public create_name : string | undefined;
  public create_desc : string | undefined;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProjectOverviewDialogComponent,
      {data: { name: this.edit_name, desc:this.edit_desc}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.edit_name, this.edit_desc = result});
  }

  openFieldDialog(): void {
    const dialogRef = this.dialog.open(FieldDialogComponent,
      {data: { fieldName: this.fieldName}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.fieldName = result});
  }

  // new_Project_Dialog(): void {
  //   const dialogRef = this.dialog.open(ProjecrFormDialogComponent,
  //     {data: { name: this.create_name, desc:this.create_desc}
  //     });
  //
  //   dialogRef.afterClosed().subscribe(result =>{
  //     console.log('The dialog was closed'); this.create_name, this.create_desc = result});
  // }

  ngOnInit(): void {
  }

}
