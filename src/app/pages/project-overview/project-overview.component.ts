import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditProjectOverviewDialogComponent} from "../../components/pop-ups/edit-project-overview-dialog/edit-project-overview-dialog.component";
import {FieldDialogComponent} from "../../components/pop-ups/field-dialog/field-dialog.component";
import {ProjectDialogComponent} from "../../components/pop-ups/project-dialog/project-dialog.component"
import {NavigationService} from "../../services/navigation.service";
import {AuthService} from "../../services/auth.service";
import {ProjectOverviewService} from "./project-overview.service";
import {Project} from "../../classes/project";
import {ConvertResponseToObjService} from "../../services/convert-response-to-obj.service";

// import { ProjectFormDialogComponent } from "../../components/pop-ups/project-form/projecr-form-dialog/projecr-form-dialog.component"

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  public edit_name: string | undefined;
  public edit_desc: string | undefined;
  public fieldName: string | undefined;
  public create_name: string | undefined;
  public create_desc: string | undefined;
  public allProjects: Project[];

  constructor(public dialog: MatDialog,
              private navigationService: NavigationService,
              private projectOverviewService: ProjectOverviewService,
              private auth: AuthService,
              private convertResponseToObjService: ConvertResponseToObjService) {
    this.allProjects = [];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProjectOverviewDialogComponent,
      {
        data: {name: this.edit_name, desc: this.edit_desc}
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.edit_name, this.edit_desc = result
    });
  }

  private getAllProjects(): void {
    this.projectOverviewService.getProjects().subscribe(
      (projects) => {
        this.allProjects = this.convertResponseToObjService.convertToProjectsArray(projects);
      },
      () => alert('An error occurred when trying to load projects')
    );
  }

  openProjectDialog(): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent,
      {
        data: {fieldName: this.fieldName}
      }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.fieldName = result
    });
  }

  public logout(): void {
    this.auth.resetLocalStorage();
    this.navigationService.navigateTo('');
  }

  ngOnInit(): void {
    this.getAllProjects();
  }

}
