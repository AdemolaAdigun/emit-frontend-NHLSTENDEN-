import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FieldDialogComponent} from "../../components/pop-ups/field-dialog/field-dialog.component";
import {TemplateDialogComponent} from "../../components/pop-ups/template-dialog/template-dialog.component";
import {ComponentDialogComponent} from "../../components/pop-ups/component-dialog/component-dialog.component";
import {NavigationService} from "../../services/navigation.service";
import {AuthService} from "../../services/auth.service";
import {ProjectComponent} from "../../classes/project-component";
import {Template} from "../../classes/template";
import {InventoryOverviewService} from "./inventory-overview.service";
import {ConvertResponseToObjService} from "../../services/convert-response-to-obj.service";
import {Field} from "../../classes/field";

@Component({
  selector: 'app-inventory-overview',
  templateUrl: './inventory-overview.component.html',
  styleUrls: ['./inventory-overview.component.css']
})
export class InventoryOverviewComponent implements OnInit {

  public componentName : string | undefined;
  public fieldName : string | undefined;
  public templateName : string | undefined;
  public comDesc : string | undefined;
  public comName : string | undefined;
  public template :any;
  public allComponents: ProjectComponent[];
  public allTemplates: Template[];
  public allFields: Field[];

  constructor(public dialog: MatDialog,
              private navigationService: NavigationService,
              private inventoryOverviewService: InventoryOverviewService,
              private convertResponseToObjService: ConvertResponseToObjService,
              private auth: AuthService) {
    this.allComponents = [];
    this.allTemplates = [];
    this.allFields = [];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FieldDialogComponent,
      {data: { componentName: this.componentName, fieldName:this.fieldName}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.componentName, this.fieldName = result});
  }

  openDialogTemplates(): void {
    const dialogRef = this.dialog.open(TemplateDialogComponent,
      {data: { templateName: this.templateName}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.componentName, this.fieldName = result});
  }

  openDialogComponent(): void {
    const dialogRef = this.dialog.open(ComponentDialogComponent,
      {data: { comDesc: this.comDesc, comName:this.comName}
      });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed'); this.comDesc, this.comName = result});
  }

  ngOnInit(): void {
    this.getAllComponents();
    this.getAllTemplates();
    this.getAllFields();
  }

  private getAllComponents(): void {
    this.inventoryOverviewService.getComponents().subscribe(
      (components: any) => {
        console.log(components);
        this.allComponents = this.convertResponseToObjService.convertToComponentsArray(components);
      },
      () => alert('An error occurred when trying to load components')
    );
  }

  private getAllTemplates(): void {
    this.inventoryOverviewService.getTemplates().subscribe(
      (templates: any) => {
        this.allTemplates = this.convertResponseToObjService.convertToTemplatesArray(templates);
      },
      () => alert('An error occurred when trying to load components')
    );
  }

  private getAllFields(): void {
    this.inventoryOverviewService.getFields().subscribe(
      (fields: any) => {
        console.log(fields)
        this.allFields = this.convertResponseToObjService.convertToFieldsArray(fields);
        console.log(this.allFields);
      },
      () => alert('An error occurred when trying to load components')
    );
  }

  public logout(): void {
    this.auth.resetLocalStorage();
    this.navigationService.navigateTo('');
  }

}
